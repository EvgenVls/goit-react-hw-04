export default function LoadMoreBtn({ onLoadMore }) {
  const handleClick = () => {
    onLoadMore();
  };

  return <button onClick={handleClick}>Load more</button>;
}
