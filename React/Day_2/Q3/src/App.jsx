import MessageCard from "./MessageCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <MessageCard
        title="Welcome"
        message="This is a reusable message card component."
      />

      <MessageCard
        title="React Props"
        message="Props help pass data from parent to child components."
      />

      <MessageCard
        title="Reusable UI"
        message="Same component, different data each time."
      />

      <MessageCard
        title="Vite + React"
        message="Fast development with modern tooling."
      />
    </div>
  );
}

export default App;
