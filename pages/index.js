import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from 'mongodb';
import Head from 'next/head';

function Homepage(props)
{
  return (
    <>
      <Head>
        <title>NextjsMeetup</title>
        <meta
          name="description"
          content="Browse a huge list of higly active Next js meetup"
        />
      </Head>
      <MeetupList meetups={props.meetups}/>
    </>

  )
}

export async function getStaticProps()
{
  //fetch backend data through API;
  const client=await MongoClient.connect('mongodb+srv://karanvarun14501:jbGHZFm4vJThQI9P@cluster0.h3zm0ql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    
  const db = client.db('meetups');
    
  const meetupCollection = db.collection('meetups');
  
  const meetupData = await meetupCollection.find().toArray();
   
  client.close()
  
  return {
    props: {
      meetups: meetupData.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id:meetup._id.toString()
      })),
    },
    revalidate:10
  }
}
export default Homepage;