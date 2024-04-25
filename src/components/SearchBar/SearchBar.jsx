import toast, { Toaster } from "react-hot-toast";
import { HiOutlineSearch } from "react-icons/hi";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchParam = form.elements.searchField.value;
    if (searchParam === "") {
      toast.error("Please enter search term!");
      return;
    }
    onSearch(searchParam);
    form.reset();
  };

  return (
    <header className={css.searchHeader}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button>
          <HiOutlineSearch />
        </button>
        <input
          type="text"
          name="searchField"
          placeholder="Search images and photos"
        />
        <Toaster />
      </form>
    </header>
  );
}
