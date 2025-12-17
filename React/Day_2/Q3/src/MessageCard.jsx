function MessageCard({ title, message }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
