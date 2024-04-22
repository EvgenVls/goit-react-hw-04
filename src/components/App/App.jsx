import { useState, useEffect } from "react";
import { featchPhotos } from "../../unsplash-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import "./App.css";

function App() {
  const [photoCollection, setPhotoCollection] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotoCollection([]);
  };

  useEffect(() => {
    async function getPhotos() {
      if (query === "") {
        return;
      }
      try {
        const data = await featchPhotos(query, page);
        console.log(data);
        setPhotoCollection((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        console.log(error);
      }
    }
    getPhotos();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery items={photoCollection} />
      <ul>
        {photoCollection.map((photo) => {
          <li key={photo.id}>
            <img src={photo.urls.small} alt="" />
          </li>;
        })}
      </ul>
    </>
  );
}

export default App;
