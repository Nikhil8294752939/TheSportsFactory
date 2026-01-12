import "./ProductCatalogue.css";

const products = [
  { id: 1, image: "/products/j1.jpg", category: "JERSEYS" },
  { id: 2, image: "/products/j2.jpg", category: "JERSEYS" },
  { id: 3, image: "/products/j3.webp", category: "JERSEYS" },
  { id: 4, image: "/products/j4.jpg", category: "JERSEYS" },

  { id: 5, image: "/products/jac1.webp", category: "JACKETS" },
  { id: 6, image: "/products/jac2.webp", category: "JACKETS" },
  { id: 7, image: "/products/jac3.webp", category: "JACKETS" },
  { id: 8, image: "/products/jac4.webp", category: "JACKETS" },

  { id: 9, image: "/products/shoe1.avif", category: "BOOTS" },
  { id: 10, image: "/products/shoe2.avif", category: "BOOTS" },
  { id: 11, image: "/products/shoe33.avif", category: "BOOTS" },
  { id: 12, image: "/products/shoe4.jpg", category: "BOOTS" },
];

export default function ProductCatalogue() {
  return (
    <section className="product-section">
      <div className="home-product-grid">
        {products.map((product) => (
          <div className="home-product-card" key={product.id}>
            <img src={product.image} alt={product.category} />

            <div className="product-overlay">
              <span>{product.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
