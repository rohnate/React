export default function ToogleBulbState({ setLightOn }) {
  function toggle() {
    setLightOn((c) => !c);
  }

  return (
    <div>
      <button onClick={toggle}>Toogle Bulb</button>
    </div>
  );
}
