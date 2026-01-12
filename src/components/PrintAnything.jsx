import "./PrintAnything.css"
export default function PrintAnything() {
  return (
    <section className="print-section">
      <div className="print-content">
        <h2>We Print Anything On Anything</h2>

        <p>
          We came into existence with an idea bringing Urban Art into
          mainstream and empowering consumers to customise anything.
          We are a germination of ink-dipped brains with expertise in
          print, design and merchandising.
        </p>
      </div>

      <div className="print-image">
        {/* Replace image src later */}
        <img src="/any.jpg" alt="Custom Printed Product" />
      </div>
    </section>
  );
}
