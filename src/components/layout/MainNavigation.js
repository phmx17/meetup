import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext, { FavoritesContextProvider } from '../../store/favorites-context';

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>React Meetups</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default MainNavigation;