const {MongoClient}=require('mongodb');
var url="mongodb+srv://admin:admin@cluster0.eewjm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('vishwadb')
        const collection=db.collection('mycol');
        var obj=[{name:"azar2",age:34,email:"azar2@gmail.com",salary:20000},
        {name:"azar3",age:35,email:"azar3@gmail.com",salary:10000}]
        await collection.insertMany(obj);
        console.log("Data inserted");
        
        //find data in the database
         var result=(await collection.find({}).toArray());
         console.log(`Result from find operation  ${result}`);
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)