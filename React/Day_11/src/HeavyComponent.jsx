import React from "react";

function HeavyComponent() {
  console.log("Heavy Component rendered");

  // Simulate heavy UI
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ marginTop: "20px", padding: "15px", border: "1px solid gray" }}>
      <h3>Heavy UI Section</h3>
      <p>This component is expensive to render.</p>
    </div>
  );
}

// React.memo prevents re-render if props don’t change
export default React.memo(HeavyComponent);
