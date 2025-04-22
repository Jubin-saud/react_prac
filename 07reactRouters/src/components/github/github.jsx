import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Jubin-saud")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="text-center m-4 bg-gray-500 text-white">
      github followers: {data.followers}
      <img src={data.avatar_url} alt="github" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Jubin-saud");
  return response.json();
};
