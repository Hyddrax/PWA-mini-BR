const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://admin:pwaAdmin@pwa-mini-br-cluster.32rxd.mongodb.net/miniBR?retryWrites=true&w=majority";


var DbConnection = function () {

    var client = null;

    async function DbConnect() {
        try {
            let _db = await MongoClient.connect(connectionString, { useUnifiedTopology: true });

            return _db
        } catch (e) {
            return console.error(e);
        }
    }

    async function Get() {
        try {
            if (client != null) {
                console.log(`db connection is already alive`);
                return client.db();
            } else {
                console.log(`getting new db connection`);
                client = await DbConnect();
                console.log(`Connected`);
                return client.db();
            }
        } catch (e) {
            return console.error(e);
        }
    }

    return {
        Get: Get
    }
}


module.exports = DbConnection();