import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);  // create spinner
  const [loadedMeetups, setLoadedMeetups] = useState([]); // store fetched data

  useEffect(() => { // conditionally run this block and not automatically when state gets updated; see []
    setIsLoading(true);
    fetch('https://meetup-8235d-default-rtdb.firebaseio.com/meetups.json')
    .then(response => {
      return response.json(); // this is also async which is why a return is required
    }).then(data => {
      // extract firebase ass array into an array of individual meetup objects
      const meetups = []
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups); // this will cause an infinite loop because it will re-evaluate (run) this entire component again incl the fetch.
    });
  }, []);  // [] = will only run once at render time; should list external dependencies, except setIsLoading and setLoadedMeetups which are exempt
  
  if (isLoading) {
    return <section>
      <h4>Loading...</h4>
    </section>
  }
   
  return (
    <section>
     <MeetupList meetups={loadedMeetups} />
    </section>
  )
}
export default AllMeetupsPage;