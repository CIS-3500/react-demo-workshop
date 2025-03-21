import React from "react";

// Define the props type for the Hello component
type HelloProps = {
  person: string;
};

// Functional component Hello with person prop
const Hello: React.FC<HelloProps> = ({ person }) => {
  return (
    <h1 className="text-3xl font-bold text-blue-600">Hello {person}</h1>
  );
};

export default Hello;
