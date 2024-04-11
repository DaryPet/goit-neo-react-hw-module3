import css from "./Contacts.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { BiSolidPhone } from "react-icons/bi";

export default function Contacts({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.data}>
        <p className={css.text}>
          <RiUser3Fill />
          {name}
        </p>
        <p className={css.text}>
          <BiSolidPhone />
          {number}
        </p>
      </div>

      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
