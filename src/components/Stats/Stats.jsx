// src/components/Stats/Stats.jsx
import { TbFilterSearch } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import useStore from '../../store'; // Import the Zustand store
import css from './Stats.module.css';

const Stats = () => {
  const contacts = useStore(state => state.contacts.items);
  const filter = useStore(state => state.filters.name);

  const totalContactsCount = contacts.length;
  const visibleContactsCount = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  ).length;

  return (
    <div className={css.stats}>
      <ul className={css.statsList}>
        {!filter && (
          <li>
            <FaPeopleGroup size='24px' className={css.statsIcon}/> 
            Total contacts: {totalContactsCount}
          </li>
        )}
        {filter && (
          <li>
            <TbFilterSearch size='24px' className={css.statsIcon}/> 
            Search result: {visibleContactsCount}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Stats;
