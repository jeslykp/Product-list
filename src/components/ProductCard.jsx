export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow-md text-center bg-gray-200">
      <img src={product.image} alt={product.title} className="h-[10rem] object-cover mb-2 mx-auto" />
      <h2 className="font-bold">{product.title}</h2>
      <p className="text-gray-500">Price: <span className="text-blue-600 font-bold">${product.price}</span></p>
      <p className="text-gray-500">Category: {product.category}</p>
      <p className="text-gray-500">Rating: <span className="text-red-500 font-bold">{product.rating?.rate}</span></p>
      <button
        className="mt-2 bg-black text-white py-1 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
