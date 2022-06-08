# Sample Project Url Shortener Application
Sample application project to short an URL.

Techstack:
- NestJS - Typescript power 💪
- AWS CDK - To create the IaC (Infrastructure as a code) and deploy using Cloudformation
- Flutter Web - Beautiful UIs in a breeze  💅
- Docker - Pack it, ship it! 🚢 🚀
- Magic 💫💫

[![Publish Docker Image to ECR](https://github.com/HektorCyC/url-shortener-app/actions/workflows/publish.yaml/badge.svg)](https://github.com/HektorCyC/url-shortener-app/actions/workflows/publish.yaml)
## Demo links

1. Create a short link:

```
curl -d '{"longUrl": "google.com"}' -H "Content-Type: application/json" -X POST https://ev8saa98t2.execute-api.us-east-1.amazonaws.com/prod/url-handler
```

2. Get the short link information

```
curl https://ev8saa98t2.execute-api.us-east-1.amazonaws.com/prod/url-handler/{ID}
```

3. Health Check endpoint

```
curl https://ev8saa98t2.execute-api.us-east-1.amazonaws.com/prod/url-handler
```

## Getting Started

### Folder Structure:

```
📂/
└───📂 backend - NestJS Backend Application
└───📂 frontend - Flutter Web Application
└───📂 iac - AWS CDK Project contains the infrastructure to deploy the backend service.
```

### Backend
Open your terminal and open the ``backend`` folder.

1. Install project dependencies:
```
npm install
``` 
2. Initialize the project on localhost
```
npm run start:dev
```

### How to deploy:

### Manually:

1. Containerize the project 
```
docker build -t url-shortener-repo .
```
2. Push the generated Docker container to your desired repository.

### Via CI/CD
Configure your repository to use [Github Actions](https://github.com/features/actions)

Use [this](https://github.com/HektorCyC/url-shortener-app/blob/main/.github/workflows/publish.yaml) workflow as reference

## IaC (Infrastructure as Code)
Open your terminal and open the ``iac`` folder.

1. Install aws-cdk package
```
npm install -g aws-cdk
```

2. Install project dependencies:
```
npm install
``` 
3. Syntethize the cdk code to generate a cloudformation template
```
cdk synth
```
4. Deploy your infrastructure.
```
cdk deploy
``` 
Infrastructure to be provisioned:
- API Gateway
- ECR Repository
- Lambda Function
- IAM Role
- DynamoDB Table definition

**BE AWARE YOU MIGHT INCUR IN COSTS BY DEPLOYING TO AWS**

## Frontend

TBD

## Want to deploy your own?
[![Deploy to AWS](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=url-shortener-stack&templateURL=https://hectorcyc-assets.s3.amazonaws.com/url-shortener-stack.template.json)

