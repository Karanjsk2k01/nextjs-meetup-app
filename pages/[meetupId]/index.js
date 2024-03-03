import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails(props) {
  return (
    <MeetupDetail
    image={props.image}
    title={props.title}
    address={props.address}
    description={props.description}
    />
  )
  
}

export function getStaticPaths()
{
  return {
    paths: [
      {
        params: {
          meetupId:'m1'
        }
      },
      {
        params: {
          meetupId:'m2'
        }
      }
    ],
    fallback:true,
  }
}


export function getStaticProps(context)
{
  //fetch data for the single meetup
  let contextId = context.params.meetupId;
  
  console.log(contextId)
  
  return {
    props: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
      id:contextId,
      title:'First Meetup',
      address:"1234,Newyork,London",
      description:"This is the first meetup ever"
    }  
  } 
}

export default MeetupDetails;