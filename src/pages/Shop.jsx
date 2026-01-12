import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import "../Styles/Shop.css";


export default function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const genderFromUrl = params.get("gender");
  const categoryFromUrl = params.get("category");

  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(5000);
  const [genderFilter, setGenderFilter] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH FROM BACKEND
  useEffect(() => {
 fetch("http://localhost:5000/api/products")


      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);




  
console.log("URL gender:", genderFromUrl);
console.log("URL category:", categoryFromUrl);
console.log("PRODUCTS:", products);
  // 🔥 FILTER LOGIC (NOW BACKEND DATA)
 
const filteredProducts = products.filter((product) => {
  const productGender = product.gender?.toLowerCase();
  const productCategory = product.category?.toLowerCase();

  const urlGender = genderFromUrl?.toLowerCase();
  const urlCategory = categoryFromUrl?.toLowerCase();

  return (
    (!urlGender || productGender === urlGender) &&
    (!urlCategory || productCategory === urlCategory) &&
    product.price <= price &&
    (!genderFilter || productGender === genderFilter.toLowerCase())
  );
});



  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="shop-page">
      {/* LEFT FILTER SIDEBAR */}
      <aside className="filters">
        <FilterSidebar
          price={price}
          setPrice={setPrice}
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
        />
      </aside>

      {/* RIGHT PRODUCTS */}
      <section className="products">
        <h2 className="shop-title">
          {genderFromUrl ? genderFromUrl.toUpperCase() : "ALL"}{" "}
          {categoryFromUrl ? categoryFromUrl.toUpperCase() : "PRODUCTS"}
        </h2>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              key={product._id} // ✅ MongoDB ID
              className="product-card"
              onClick={() => navigate(`/product/${product._id}`)} // ✅ MongoDB ID
            >
              <div className="shop-product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="shop-product-info">
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
