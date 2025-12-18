import { useState } from "react";

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div
        style={{
          width: "200px",
          padding: "20px",
          marginBottom: "10px",
          color: "white",
          backgroundColor: isRed ? "red" : "blue",
          textAlign: "center",
        }}
      >
        Color Toggle Box
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
}

export default ColorToggle;
