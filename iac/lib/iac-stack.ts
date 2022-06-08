import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ServicePrincipal } from 'aws-cdk-lib/aws-iam';

export class IacStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    /**
       * DynamoDB Table Creation
       */
    const table = new dynamodb.Table(this, 'url-shortener-table', {
      tableName: 'shorturl-table',
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY
    });

    /**
     * Create Default lambda execution role
     */
    const lambdaExecutionRole = new iam.Role(this, 'lambda-execution-role', {
      path: '/service-role/',
      roleName: 'url-shortener-lambdaexec-role',
      description: 'Simple lambda execution role for the lambda',
      managedPolicies: [{
        managedPolicyArn: 'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole'
      }],
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com')
    });

    /**
     * Create Lambda function, code is served from ECR Repo
     */
     const ecrRepo = new ecr.Repository(this, 'url-shortener-repo', {
       repositoryName:'url-shortener-repo'
     });

     const webApiLambdaFunction = new lambda.DockerImageFunction(this, 'shorturl-docker-fn', {
       functionName: 'url-shortener-lambda',
       code: lambda.DockerImageCode.fromEcr(ecrRepo),
       role: lambdaExecutionRole,
       memorySize: 128,
       tracing: lambda.Tracing.ACTIVE
     });

    /**
    * Create API Gateway Resource and attach the web api lambda function 
    */
    const lambdaApiGateway = new apigw.LambdaRestApi(this, 'LambdaApigw', {
      restApiName: 'url-shortener-apigw',
      handler: webApiLambdaFunction,
      endpointTypes: [apigw.EndpointType.REGIONAL],
      proxy: false,
      deployOptions: {
        stageName: 'prod'
      },
      defaultCorsPreflightOptions: {
        allowOrigins: apigw.Cors.ALL_ORIGINS
      },
      retainDeployments: false
    });
    /**
    * Add proxy to the lambda integration to serve as web api server
    */
    lambdaApiGateway.root.addProxy({
      defaultIntegration: new apigw.LambdaIntegration(webApiLambdaFunction)
    });

    /**
     * Add resource permissions to operate
     */
    webApiLambdaFunction.grantInvoke(new ServicePrincipal('apigateway.amazonaws.com'));
    table.grantReadWriteData(webApiLambdaFunction);
  }
}
