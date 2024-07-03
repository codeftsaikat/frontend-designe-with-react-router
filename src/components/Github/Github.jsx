import React from "react";
import { useLoaderData } from "react-router-dom";
// import { useState, useEffect } from "react";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/codeftsaikat")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center flex flex-col justify-center items-center bg-gray-700 m-3 p-3 text-white text-2xl">
      Github Followers:{data.followers}
      <img
        className="w-40 rounded-full p-3"
        src={data.avatar_url}
        alt="Github"
      />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/codeftsaikat");
  return res.json();
};
