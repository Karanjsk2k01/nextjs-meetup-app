import NewMeetupFrom from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router';
import Head from 'next/head';

function New_Meetup()
{
  let router = useRouter()
  async function addMeetupHandler(meetupData)
  {
    try {
      const res = await fetch('/api/new-meetup',{
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-type': 'application/json'
      }
    });
    
    const data = await res.json();

      if (!data)
      {
        throw new Error('Something Went Wrong');
      }
      
      console.log(data);
      router.push('/')
      
    } catch (error) {
      console.log(error.message);
    }
    
  };
  
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetup and create amazing networking opportunities"
        />
      </Head>
    <NewMeetupFrom onAddMeetup={addMeetupHandler} />
    </>

  
  )
}

export default New_Meetup;