function StatCard({ title, value, description }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <strong>{value}</strong>
           <p>{description}</p>
        </div>
    )
}
export default StatCard;