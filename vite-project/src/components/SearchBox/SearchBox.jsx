export default function SearchBox({ value, onFilter }) {
  return (
    <form>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </form>
  );
}
