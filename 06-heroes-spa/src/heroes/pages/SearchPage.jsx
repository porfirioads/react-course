import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {q === '' ? (
            <div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>
          ) : (
            !heroes.length && (
              <div className="alert alert-danger animate__animated animate__fadeIn">
                No hero with <strong>{q}</strong>
              </div>
            )
          )} */}

          {q === '' && (
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a hero
            </div>
          )}

          {q !== '' && !heroes.length && (
            <div className="alert alert-danger animate__animated animate__fadeIn">
              No hero with <strong>{q}</strong>
            </div>
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
