import React from "react";
import { GitContext } from "../context/Context";
import { BsBuilding } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FiLink2 } from "react-icons/fi";
import { CgBatteryEmpty } from "react-icons/cg";

const Profile = () => {
  const { profile, followers } = React.useContext(GitContext);

  return (
    <section className="section profile">
      <div className="container">
        <div className="profile__content">
          <div className="profile__user">
            <div className="profile__header">
              <img
                src={profile.avatar_url}
                alt="profile-img"
                className="profile__img"
              />
              <div>
                <h3>{profile.name}</h3>
                <p>{profile.email || `@${profile.login}`}</p>
              </div>
            </div>
            <div className="profile__bio">{profile.bio}</div>
            <div className="profile__bottom">
              <div>
                <BsBuilding />
                {profile.company || "No company"}
              </div>
              <div>
                <MdLocationOn />
                {profile.location || "No location"}
              </div>
              <div>
                <FiLink2 />
                {profile.blog || "No blog"}
              </div>
            </div>
          </div>

          <div className="profile__followers-warpper">
            <div className="profile__followers">
              {followers.length === 0 ? (
                <div className="profile__followers-empty">
                  <CgBatteryEmpty /> No followers
                </div>
              ) : (
                followers.map((follower) => {
                  return (
                    <div className="profile__follower" key={follower.id}>
                      <img
                        className="follower__img"
                        src={follower.avatar_url}
                        alt="follower-img"
                      />
                      <div>
                        <h3>{follower.login}</h3>
                        <a
                          className="follower__link"
                          href={follower.html_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {follower.html_url}
                        </a>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
