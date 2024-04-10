export default function ContactForm() {
  return (
    <form>
      <p>Name</p>
      <input type="text" name="name" />
      <p>Number</p>
      <input type="tel" name="number" />
      <button type="submit">Add Contact</button>
    </form>
  );
}
