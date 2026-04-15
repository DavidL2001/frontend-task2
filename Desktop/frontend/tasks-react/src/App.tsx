import { useState } from "react";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";

function App() {
  const [showUser, setShowUser] = useState<boolean>(true);

  const toggleUserCard = () => {
    
    setShowUser(!showUser);
  };

  return (
    <div>
      <h1>My App</h1>

      <button onClick={toggleUserCard}>
        {showUser ? "Hide User" : "Show User"}

      </button>

      {showUser && (
        <UserCard
          name="David"
          age={24}
          email="david@example.com"
        />
      )}

      <Counter />
    </div>
  );
}

export default App;
