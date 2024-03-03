import MeetupDetail from '../../components/meetups/MeetupDetail'
import { MongoClient ,ObjectId} from 'mongodb';
import Head from 'next/head';


function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
    <MeetupDetail
    image={props.meetupData.image}
    title={props.meetupData.title}
    address={props.meetupData.address}
    description={props.meetupData.description}
    />
    </>

  )
  
}

export async function getStaticPaths()
{
  const client=await MongoClient.connect('mongodb+srv://karanvarun14501:jbGHZFm4vJThQI9P@cluster0.h3zm0ql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    
  const db = client.db('meetups');
    
  const meetupCollection = db.collection('meetups');
  
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  
  client.close()
  
  
  return {
    paths: 
    meetups.map((meetup) => ({
      params:{meetupId:meetup._id.toString()}
    }))
    ,
    fallback:false,
  }
}


export async function getStaticProps(context)
{
  //fetch data for the single meetup
  let contextId = context.params.meetupId;
  
  const client=await MongoClient.connect('mongodb+srv://karanvarun14501:jbGHZFm4vJThQI9P@cluster0.h3zm0ql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    
  const db = client.db('meetups');
    
  const meetupCollection = db.collection('meetups');
  
  let selectMeetup = await meetupCollection.findOne({ _id: new ObjectId(contextId) })
  
  client.close()
   
  return {
    props: {
      meetupData: {
        id: selectMeetup._id.toString(),
        title: selectMeetup.title,
        address: selectMeetup.address,
        image: selectMeetup.image,
        description:selectMeetup.description
      },
    }  
  } 
}

export default MeetupDetails;