import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout, user } = useAuth0();
  return (
    <section className="section navbar">
      <div className="container">
        <div className="navbar__content">
          <div className="navbar__left">
            <div className="profile__info">
              <img src={user?.picture} alt="profile-img" />
              <div>
                Welcome <strong>{user?.given_name}</strong>
              </div>
            </div>
          </div>
          <div className="navbar__right">
            <button
              className="logout"
              type="button"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
