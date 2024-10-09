const { db } = require('../../services');

exports.handler = async (event) => {
    try {
        
        
        const { id } = JSON.parse(event.body);
        
        

        const params = {
            TableName: 'message-db',
            Key: { id }
        };

        
        await db.delete(params);

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: "Message deleted successfully" })
        };
    } catch (error) {
        console.error("Error deleting message:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: error.message || "Internal Server Error" })
        };
    }
};
