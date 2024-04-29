export default function ErrorMessage({ message }) {
  return (
    <p>
      <span>
        <i style={{ color: "red" }}>{message}...</i>
      </span>
    </p>
  );
}
