type StatCardProps = {
  title: string;
  value: string;
  color: string;
};

function StatCard({ title, value, color }: StatCardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <p style={{ color, fontSize: "2rem", fontWeight: "bold" }}>
        {value}
      </p>
    </div>
  );
}

export default StatCard;