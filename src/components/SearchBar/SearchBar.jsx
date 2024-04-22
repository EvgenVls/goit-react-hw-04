export default function SearchBar({ onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchParam = form.elements.searchField.value;
    if (searchParam === "") {
      alert("Please enter search term!");
      return;
    }
    onSearch(searchParam);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchField"
          placeholder="Search images and photos"
        />
        <button>Search</button>
      </form>
    </header>
  );
}
