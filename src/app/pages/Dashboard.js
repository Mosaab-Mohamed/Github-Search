import React from "react";
import { GitContext } from "../context/Context";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Info from "../components/Info";
import Profile from "../components/Profile";
import Charts from "../components/charts/Charts";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Dashboard = () => {
  const { loading, error } = React.useContext(GitContext);

  return (
    <>
      <Navbar />
      <Search />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Info />
          <Profile />
          <Charts />
        </>
      )}
    </>
  );
};

export default Dashboard;
