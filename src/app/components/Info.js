import React from "react";
import { GitContext } from "../context/Context";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsCodeSquare } from "react-icons/bs";

const Info = () => {
  const { profile } = React.useContext(GitContext);

  return (
    <section className="section info">
      <div className="container">
        <div className="info__content">
          <div className="info__card">
            <div className="info__icon">
              <RiGitRepositoryLine />
            </div>
            <div className="info__name">
              <h1>{profile.public_repos}</h1>
              <p>Repos</p>
            </div>
          </div>

          <div className="info__card">
            <div className="info__icon">
              <BsFillPeopleFill />
            </div>
            <div className="info__name">
              <h1>{profile.followers}</h1>
              <p>Followers</p>
            </div>
          </div>

          <div className="info__card">
            <div className="info__icon">
              <BsFillPersonPlusFill />
            </div>
            <div className="info__name">
              <h1>{profile.following}</h1>
              <p>Following</p>
            </div>
          </div>

          <div className="info__card">
            <div className="info__icon">
              <BsCodeSquare />
            </div>
            <div className="info__name">
              <h1>{profile.public_gists}</h1>
              <p>Gists</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
