import css from "./Contacts.module.css";

export default function Contacts({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.data}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>

      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
