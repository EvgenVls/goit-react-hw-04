import toast, { Toaster } from "react-hot-toast";

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
    <header>
      <form onSubmit={handleSubmit}>
        <button>Search</button>
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
