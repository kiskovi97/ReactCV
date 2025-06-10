import { dynamodb, initAWS } from "./aws-config.js";
import { v4 as uuidv4 } from 'uuid'

export const fetchData = async () =>
{
    await initAWS();

    const params = {
        TableName: "Projects",
    }

    try {
        const data = await dynamodb.scan(params).promise();
        return { success: true, data: data.Items };
    } catch(error)
    {
        return {success: false, message: error.message};
    }
}
export const fetchDataByTag = async (tag) =>
{
    await initAWS();

    const params = {
        TableName: "Projects",
        FilterExpression: 'contains (#tags, :tag)',
        ExpressionAttributeNames: {
        '#tags': 'tags',
        },
        ExpressionAttributeValues: {
        ':tag': tag,
        },
    }

    try {
        const data = await dynamodb.scan(params).promise();
        return { success: true, data: data.Items };
    } catch(error)
    {
        return {success: false, message: error.message};
    }
}

export const fetchDataById = async (id) =>
{
    await initAWS();
    
    const params = {
        TableName: "Projects",
        Key: {
            id: id, // Assuming 'id' is your partition key
        },
    }

    try {
        const data = await dynamodb.get(params).promise();
        return { success: true, data: data.Item };
    } catch(error)
    {
        return {success: false, message: error.message};
    }
}