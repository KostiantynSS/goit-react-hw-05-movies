import MoviesList from 'components/MoviesList/MoviesList';
import css from './home.module.css';
function Home() {
  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <MoviesList />
    </div>
  );
}

export default Home;
