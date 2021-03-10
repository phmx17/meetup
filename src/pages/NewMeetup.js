import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

const NewMeetupPage = () => {
  const history = useHistory();
  const onAddMeetupHandler = meetupData => {
    // adding table 'meetups' to the db; anything that comes after 'firebaseio.com/'; must have.json!!
    // also must be a post request
    // some apis require the headers too; 
    fetch('https://meetup-8235d-default-rtdb.firebaseio.com/meetups.json',
    {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      history.replace('/')   // the next page will prevent browser 'back' button
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
       <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  )
}
export default NewMeetupPage;