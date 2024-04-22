import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(({ id, description, urls }) => {
        <li key={id}>
          <ImageCard url={urls.small} descr={description} />
        </li>;
      })}
    </ul>
  );
}
