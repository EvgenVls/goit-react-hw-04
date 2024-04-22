import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map((item) => {
        <li key={item.id}>
          <ImageCard url={item.urls} descr={item.description} />
        </li>;
      })}
    </ul>
  );
}
