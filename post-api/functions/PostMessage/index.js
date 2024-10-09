const { db } = require('../../services/index')
const { sendResponse, sendError } = require('../../responses/index')
const { v4 : uuid } = require('uuid')

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const newMessage = {
            id: uuid(),
            username: body.username,
            message: body.message,
            createdAt: new Date().toISOString()
        };

        const params = {
            TableName: 'message-db',
            Item: newMessage
        };

        await db.put(params);

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, data: newMessage })
        };
    } catch (error) {
        console.error("Error posting message:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: "Internal Server Error" })
        };
    }
};