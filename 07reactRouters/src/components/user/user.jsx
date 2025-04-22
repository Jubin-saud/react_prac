import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();

  return (
    <div className="flex justify-center items-center bg-gray-700 text-white text-3xl p-4">
      user: {userId}
    </div>
  );
}

export default User;