import "./SaleBelt.css"
export default function SaleBelt() {
  return (
    <div className="sale-belt">
      <div className="sale-track">
        {/* Repeat text multiple times for smooth loop */}
        <span>SALE!</span>
        <span>SALE!</span>
        <span>SALE!</span>
        <span>SALE!</span>
        <span>SALE!</span>
        <span>SALE!</span>
        <span>SALE!</span>
      </div>
    </div>
  );
}
