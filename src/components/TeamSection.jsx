import "./TeamSection.css";
const teams = [
  { name: "Barcelona", logo: "/teams/barcelona.jpg" },
  { name: "Bayern", logo: "/teams/bayern.png" },
  { name: "Juventus", logo: "/teams/juventus.png" },
  { name: "Liverpool", logo: "/teams/liverpool.png" },
  { name: "Manchester", logo: "/teams/manchester.png" },
  { name: "Real Madrid", logo: "/teams/realmadrid.png" },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2>Shop by Teams</h2>
      </div>

      <div className="team-circles">
        {teams.map((team, index) => (
          <div className="team-circle" key={index}>
            <img src={team.logo} alt={team.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
