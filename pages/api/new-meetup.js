import {MongoClient} from 'mongodb';

async function postHandler(req,res)
{
  if (req.method === 'POST')
  {
    const data = req.body;
    
    const { title, image, address, description } = data;
    
    const client=await MongoClient.connect('mongodb+srv://karanvarun14501:jbGHZFm4vJThQI9P@cluster0.h3zm0ql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    
    const db = client.db('meetups');
    
    const meetupCollection = db.collection('meetups');
    
    const result =await meetupCollection.insertOne(data)
    
    console.log(result);
    
    client.close();
    
    res.status(201).json({
      message: 'Meetups Inserted',
    })
  }
};

export default postHandler;