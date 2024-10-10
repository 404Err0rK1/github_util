import React from "react";
import CommandPalette from "../components/CommandPalette";
import axios from "axios";
import Head from "next/head";
// import moment from "moment";
import data from "../repos";
export default function Home() {
  const [repos, setRepos] = React.useState([]);
  React.useEffect(() => {
    const repos = localStorage.getItem("repos");
    if (repos) {
      setRepos(JSON.parse(repos));
    }
    const fetchRepos = async () => {
      const response = await axios.get(
        " https://api.github.com/user/repos?per_page=100",
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );
      localStorage.setItem("repos", JSON.stringify(response.data));
      setRepos(response.data);
    };
    fetchRepos();
  }, []);
  repos.sort((a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at);
  });
  return (
    <>
      <Head>
        <title>Elliott&apos;s GitHub</title>
      </Head>
      <CommandPalette repos={repos} />
      {/* <UpdateTiming setRepos={setRepos} /> */}
    </>
  );
}
