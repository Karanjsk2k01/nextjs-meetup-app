import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some Address 1, 1234',
    description: 'This is the description for the first meetup.'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
    address: 'Another Address 2, 5678',
    description: 'This is the description for the second meetup.'
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/G%C3%A9iseres_del_Tatio%2C_Atacama%2C_Chile%2C_2016-02-01%2C_DD_03-05_HDR.JPG/800px-G%C3%A9iseres_del_Tatio%2C_Atacama%2C_Chile%2C_2016-02-01%2C_DD_03-05_HDR.JPG',
    address: 'Yet Another Address 3, 91011',
    description: 'This is the description for the third meetup.'
  }
];



function Homepage()
{
  return (
    <MeetupList meetups={DUMMY_DATA}/>
  )
}
export default Homepage;