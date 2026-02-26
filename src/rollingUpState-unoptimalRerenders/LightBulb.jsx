import { useState } from "react";
import BulbState from "./bulbState";
import ToogleBulbState from "./toggleBulbState";

export default function LightBulb() {
  const [lightOn, setLightOn] = useState(true);
  return (
    <div style={{ padding: 50 }}>
      This is lightBulb component
      <BulbState lightOn={lightOn} />
      <ToogleBulbState setLightOn={setLightOn} />  {/* react will send props as an object. have to destructure this as {} */}
    </div>
  );
}
