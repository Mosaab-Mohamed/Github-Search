import React from "react";

const GitContext = React.createContext();

function ContextProvider({ children }) {
  const [userName, setUserName] = React.useState("john-smilga");
  const [profile, setProfile] = React.useState({});
  const [followers, setFollowers] = React.useState([]);
  const [repos, setRepos] = React.useState([]);
  const [limit, setLimit] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchUser = async function () {
      try {
        setLoading(true);
        const responseArray = await Promise.all([
          fetch(`https://api.github.com/users/${userName}`),
          fetch(`https://api.github.com/users/${userName}/followers`),
          fetch(`https://api.github.com/users/${userName}/repos`),
          fetch("https://api.github.com/rate_limit"),
        ]);

        responseArray.forEach((res) => {
          if (!res.ok) {
            throw new Error("Something went wrong, please try again.");
          }
        });

        const data = await Promise.all(responseArray.map((res) => res.json()));
        const [data_profile, data_followers, data_repos, data_limit] = data;

        setProfile(data_profile);
        setFollowers(data_followers);
        setRepos(data_repos);
        setLoading(false);
        setLimit(data_limit);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchUser();
  }, [userName]);

  return (
    <GitContext.Provider
      value={{ profile, followers, repos, limit, setUserName, loading, error }}
    >
      {children}
    </GitContext.Provider>
  );
}

export { ContextProvider, GitContext };
