import Component2 from "./Component2";

function Component1() {
  const a = "A value";
  const b = "B value";
  const c = "C value";
  const d = "D value";
  const e = "E value";
  const f = "F value";

  return (
    <div>
      <h3>Component 1</h3>
      <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />
    </div>
  );
}

export default Component1;
