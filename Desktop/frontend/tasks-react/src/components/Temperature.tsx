import { useState } from "react";

const Temperature = () => {
  const [temperature, setTemperature] = useState<number>(20);

  return (
    <div>
      <h2>Temperature: {temperature}°C</h2>

      <button onClick={() => setTemperature(temperature + 1)}>
        Increase
      </button>

      <button onClick={() => setTemperature(temperature - 1)}>
        Decrease
      </button>
        {temperature > 25 && <p>getting hot! </p>}
        
      {temperature < 10 && <p>getting cold! </p>}
    </div>
  );
};

export default Temperature;
