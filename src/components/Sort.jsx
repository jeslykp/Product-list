export default function Sort({ sortOption, setSortOption }) {
    return (
        <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-black p-2 w-full  md:w-1/6 my-2 rounded-md me-4"
        >
            <option value="">Sort By</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="rating">Rating</option>
        </select>
    );
}
