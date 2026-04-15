type UserProps = {
  name: string;
  age: number;
  email: string;
};

const UserCard = ({ name, age, email }: UserProps) => {

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
    
  );
};

export default UserCard;
