import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, openInModal }) {
  return (
    <ul>
      {items.map(({ id, urls, description }) => (
        <li key={id}>
          <ImageCard url={urls} descr={description} openInModal={openInModal} />
        </li>
      ))}
    </ul>
  );
}
