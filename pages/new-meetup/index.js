import NewMeetupFrom from '../../components/meetups/NewMeetupForm'


function New_Meetup()
{
  function addMeetupHandler(meetupData)
  {
    console.log(meetupData)
  };
  
  
  
  return <NewMeetupFrom onAddMeetup={addMeetupHandler}/>
}

export default New_Meetup;