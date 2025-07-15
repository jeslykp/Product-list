export default function FilterBar({ categories, selectedCategory, setSelectedCategory }) {
    return (
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border border-black p-2 w-full md:w-1/6 my-2 rounded-md me-4 "
      >
        <option value="">All item categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    );
  }