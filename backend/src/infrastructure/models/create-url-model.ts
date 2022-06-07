import { PutCommandInput, PutCommand } from '@aws-sdk/lib-dynamodb';
import documentClient from '../dynamodb';

export const createUrl = (url: string, hashId: string) => {
    const putUrlParams: PutCommandInput = {
        TableName: 'url-shortener-table',
        Item: {
            PK: 'url-id',
            SK: hashId,
            longUrl: url,
            userUUID: '' // TBD
        }
    }
    const dynamoCommand = new PutCommand(putUrlParams);
    return documentClient.send(dynamoCommand);
}