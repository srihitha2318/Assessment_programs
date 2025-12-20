import { AppContext } from "./AppContext";
import Component2 from "./Component2";

function Component1() {
  const values = {
    a: "A value",
    b: "B value",
    c: "C value",
    d: "D value",
    e: "E value",
    f: "F value"
  };

  return (
    <AppContext.Provider value={values}>
      <h3>Component 1</h3>
      <Component2 />
    </AppContext.Provider>
  );
}

export default Component1;
