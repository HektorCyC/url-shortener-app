import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const dynamodbClient = new DynamoDBClient({
    region: 'us-east-1'
});

const documentClient = DynamoDBDocumentClient.from(dynamodbClient);

export default documentClient;