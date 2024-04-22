export default function ImageCard({ url, descr }) {
  return (
    <div>
      <img src={url.small} alt={descr} />
    </div>
  );
}
