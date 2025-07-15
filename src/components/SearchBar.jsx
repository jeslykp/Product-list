export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 w-full md:w-1/3 my-2 rounded-md lg:me-4 text-black"
      />
    );
  }