import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("useeffect timer");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Location : vedaranyam</h2>
        <h3>Count: {count}</h3>
      </div>
    </>
  );
};

export default User;
