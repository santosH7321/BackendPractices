const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

// Database Name
const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    
  
    // Insert a user

    const data = {
        firstName: "Pratik",
        lastName: "Kumar",
        city: "Nawada",
        phoneNumber: "9835212801"
    };

    // const insertResult = await collection.insertOne(data);
    // console.log('Inserted documents =>', insertResult);

    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);




    // // Read
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
  

    // const countResult = await collection.countDocuments({});
    // console.log("Count of the users => ", countResult)


    // const result = await collection.find({firstName: "Santosh"}).toArray();
    // console.log("Found user name is : ", result);

    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());