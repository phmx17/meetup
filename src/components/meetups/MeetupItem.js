import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useContext } from 'react';  
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext); // focus on context data object

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);  // props passed from MeetupList; assigned bool returned from .some() method in handler function

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>      
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </Card>
    </li>
  )
}
export default MeetupItem;