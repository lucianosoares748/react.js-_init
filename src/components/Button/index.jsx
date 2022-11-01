import "./style.css";
export function Button(props, disabled) {
  const { text, onClick, page, postsPerPage, allPosts } = props;
  const noMorePosts = page + postsPerPage >= allPosts;
  return (
    <button disabled={noMorePosts} className="button" onClick={onClick}>
      {text}
    </button>
  );
}
