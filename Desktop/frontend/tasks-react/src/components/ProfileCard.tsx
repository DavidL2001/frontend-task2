type ProfileProps = {
  name: string;
  occupation: string;
  city: string;
};

const ProfileCard = ({ name, occupation, city }: ProfileProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Occupation: {occupation}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default ProfileCard;
