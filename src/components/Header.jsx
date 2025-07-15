import SearchBar from "./SearchBar";

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="bg-black text-white p-4 flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-xl font-bold mb-2 md:mb-0">Product Listing Page</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </header>
  );
}
