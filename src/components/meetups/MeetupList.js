import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {
        props.meetups.map(meetup => (
          <MeetupItem 
            key={meetup.id}
            id={meetup.id}            
            image={meetup.image}
            address={meetup.address}
            descritpion={meetup.description}
          />

        ))
      }  
    </ul>
  )
}
export default MeetupList;