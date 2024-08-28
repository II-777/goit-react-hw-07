import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { ImPhone } from "react-icons/im";

export default function Contact({ data: { id, name, phone }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <p className={css.name}>
          <FaUser className={css.icon} /> {name}
        </p>
        <p className={css.phone}>
          <ImPhone className={css.icon} /> {phone}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
