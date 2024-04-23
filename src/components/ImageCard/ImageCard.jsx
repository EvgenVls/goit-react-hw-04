export default function ImageCard({ id, url, descr, openInModal }) {
  return (
    <div>
      <img src={url.small} alt={descr} onClick={() => openInModal(id)} />
    </div>
  );
}
