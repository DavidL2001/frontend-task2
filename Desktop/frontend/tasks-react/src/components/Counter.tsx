import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("testar");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
       <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      {count > 5 && <p>Counter is more than 5</p>}

    </div>
  );
};

export default Counter;
