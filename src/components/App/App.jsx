import { useState, useEffect } from "react";
import { featchPhotos } from "../../unsplash-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import "./App.css";

function App() {
  const [photoCollection, setPhotoCollection] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotoCollection([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getPhotos() {
      try {
        setLoader(true);
        setError(false);
        const data = await featchPhotos(query, page);
        console.log(data);
        setPhotoCollection((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getPhotos();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photoCollection.length > 0 && <ImageGallery items={photoCollection} />}
      {loader && <Loader />}
      {photoCollection.length > 0 && loader && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}

export default App;
