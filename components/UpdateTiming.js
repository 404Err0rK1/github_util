import React from "react";
import axios from "axios";
import { updateRepos } from "../repos";

function UpdateTiming({ setRepos }) {
  const fetchRepos = async () => {
    const response = await axios.get(
      "https://api.github.com/users/elliott-chong/repos?per_page=100",
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      }
    );
    setRepos(response.data);
    updateRepos(response.data);
  };
  console.log(process.env.NEXT_PUBLIC_GITHUB_TOKEN);
  return (
    <div className="fixed bottom-[1rem] text-white flex items-center gap-2 z-[50] right-[1rem]">
      <button
        className="px-2 py-1 font-bold bg-orange-400 rounded-full"
        onClick={() => {
          fetchRepos();
        }}
      >
        update now
      </button>
      <p>updated yesterday</p>
    </div>
  );
}

export default UpdateTiming;
