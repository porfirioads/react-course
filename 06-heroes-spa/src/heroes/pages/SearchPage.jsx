import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks';
import { HeroCard } from '../components';

export const SearchPage = () => {
  const { searchText, onInputChange } = useForm({ searchText: '' });

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const onSearchSubmit = (event) => {
    event.preventDefault();

    if (!searchText.trim().length) {
      return;
    }

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

          <div className="alert alert-primary">Search a hero</div>

          <div className="alert alert-danger">
            No hero with <strong>{q}</strong>
          </div>

          {/* <HeroCard/> */}
        </div>
      </div>
    </>
  );
};
