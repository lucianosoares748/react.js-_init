export function Button(props) {
  const { text, onClick } = props;
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
