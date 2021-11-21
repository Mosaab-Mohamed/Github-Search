import React from "react";
import { GitContext } from "../../context/Context";
import DoughnutChart from "./DoughnutChart";
import PieChart from "./PieChart";
import Column2DChart from "./Column2DChart";
import Bar2DChart from "./Bar2DChart";
import "./Charts.scss";

const Charts = () => {
  const { repos } = React.useContext(GitContext);

  const languages = repos.reduce((total, repo) => {
    const { language, stargazers_count } = repo;

    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }

    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const stars = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((language) => {
      return { ...language, value: language.stars };
    });

  const mostPopular = repos
    .map((repo) => {
      const { name, stargazers_count } = repo;

      return {
        label: name,
        value: stargazers_count,
      };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const mostForked = repos
    .map((repo) => {
      const { name, forks_count } = repo;

      return {
        label: name,
        value: forks_count,
      };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <section className="charts">
      <div className="container">
        <div className="charts__grid">
          <PieChart data={mostUsed} />
          <Column2DChart data={mostPopular} />
          <DoughnutChart data={stars} />
          <Bar2DChart data={mostForked} />
        </div>
      </div>
    </section>
  );
};

export default Charts;
