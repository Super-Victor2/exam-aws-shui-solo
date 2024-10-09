const { db } = require('../../services');

exports.handler = async (event) => {
    try {
        const { id } = event.pathParameters;
        const body = JSON.parse(event.body);

        const params = {
            TableName: 'message-db',
            Key: { id },
            UpdateExpression: "set #msg = :message, #createdAt = :createdAt, #username = :username",
            ExpressionAttributeNames: {
                "#msg": "message",
                "#createdAt": "createdAt",
                "#username": "username"
            },
            ExpressionAttributeValues: {
                ":message": body.message,
                ":createdAt": body.createdAt || new Date().toISOString(),
                ":username": body.username || "anonymous"
            },
            ReturnValues: "ALL_NEW"
        };

        const result = await db.update(params).promise(); // Ensure `.promise()` is used with AWS SDK

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, data: result.Attributes })
        };
    } catch (error) {
        console.error("Error updating message:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: "Internal Server Error" })
        };
    }
};
