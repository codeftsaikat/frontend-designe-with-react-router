import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return <div className="p-3 bg-green-600 text-black font-extrabold text-2xl rounded-md">User:{userId}</div>;
}

export default User;
