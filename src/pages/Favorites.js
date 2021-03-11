import { useContext } from 'react';
import FavoritesContext, { FavoritesContextProvider } from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

const FavoritesPage = () => {

  const favoritesCtx = useContext(FavoritesContext)
  const noFavorites = "You don't have any favorites. Please add some."
  return <section>
    <h1>Favorites Page</h1>
    <p>{favoritesCtx.totalFavorites === 0 && noFavorites}</p>
    <MeetupList meetups={favoritesCtx.favorites} />
  </section>
  
}
export default FavoritesPage;