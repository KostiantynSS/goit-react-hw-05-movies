import { Suspense, lazy, useEffect, useState } from 'react';
import css from './movies.module.css';
import { apiHandler } from 'helpers/apiHandler';
import { useSearchParams } from 'react-router-dom';
const MoviesList = lazy(() => import('../../components/MoviesList/MoviesList'));
const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchQuery] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const query = elements[1].value;
    if (query.trim() === '') return;

    setSearchQuery({ query: query });
    e.currentTarget.reset();
  };
  useEffect(() => {
    if (!searchParams) return;
    const getMovies = async () => {
      try {
        const { results } = await apiHandler('search/movie', searchParams);

        setSearchResults(results);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [searchParams]);
  return (
    <>
      <div className={css.SearchBar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
          />
        </form>
      </div>
      <Suspense fallback={<div>Wait a second...</div>}>
        <MoviesList moviesArr={searchResults} url={''} />
      </Suspense>
    </>
  );
};

export default Movies;
