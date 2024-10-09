const { db } = require('../../services');

exports.handler = async (event) => {
    try {
        const params = {
            TableName: 'message-db'
        };
        const result = await db.scan(params);
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                data: result.Items
            })
        };
    } catch (error) {
        console.error("Error fetching messages:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: "Internal Server Error" })
        };
    }
};
