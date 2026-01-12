import "../Styles/Filter.css";

export default function FilterSidebar({
  price,
  setPrice,
  genderFilter,
  setGenderFilter,
}) {
  return (
    <aside className="filters">
      <h3>Filters</h3>

      {/* CATEGORY */}
      <div className="filter-group">
        <h4>Category</h4>
        <p>Football Boots</p>
        <p>Training Shoes</p>
        <p>Running Shoes</p>
      </div>

      {/* AVAILABILITY */}
      <div className="filter-group">
        <h4>Availability</h4>
        <label>
          <input type="checkbox" /> In stock
        </label>
      </div>

      {/* PRICE SLIDER */}
      <div className="filter-group">
        <h4>Price</h4>

        <input
          type="range"
          min="0"
          max="5000"
          step="100"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <div className="price-values">
          <span>₹0</span>
          <span>₹{price}</span>
        </div>
      </div>

      {/* GENDER */}
      <div className="filter-group">
        <h4>Gender</h4>

        <label>
          <input
            type="checkbox"
            checked={genderFilter === "men"}
            onChange={() =>
              setGenderFilter(genderFilter === "men" ? "" : "men")
            }
          />
          Men
        </label>
      </div>

      {/* SIZE */}
      <div className="filter-group">
        <h4>Size</h4>
        <label><input type="checkbox" /> 6</label>
        <label><input type="checkbox" /> 7</label>
        <label><input type="checkbox" /> 8</label>
        <label><input type="checkbox" /> 9</label>
        <label><input type="checkbox" /> 10</label>
      </div>
    </aside>
  );
}
