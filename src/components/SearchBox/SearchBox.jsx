// src/components/SearchBox/SearchBox.jsx
import useStore from '../../store'; // Import the Zustand store
import css from './SearchBox.module.css';

export default function SearchBox() {
  const filterValue = useStore(state => state.filters.name);
  const changeFilter = useStore(state => state.filters.changeFilter);

  const handleChange = (event) => {
    changeFilter(event.target.value);
  };

  return (
    <input
      className={css.searchBox}
      type="text"
      name="search"
      placeholder="Search contacts..."
      value={filterValue}
      onChange={handleChange}
      autoComplete="off"
    />
  );
}
