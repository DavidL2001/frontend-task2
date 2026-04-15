import { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import Temperature from "./components/Temperature";

function App() {
  const [showProfile, setShowProfile] = useState<boolean>(true);

  useEffect(() => {
    console.log("App has loaded!");
  }, []);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div>
      <h1>My Profile App</h1>

      <button onClick={toggleProfile}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <ProfileCard
          name="Sara Nilsson"
          occupation="FrontendDeveloper"
          city="Malmö"
        />
      )}

      <Temperature />
    </div>
  );
}

export default App;
