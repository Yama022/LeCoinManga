import { Link } from "react-router-dom";

import { BiSearchAlt, BiCart, BiLogIn } from "react-icons/bi";
import { GiStarsStack } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

export default function Header({ isLoggedIn, logOut }) {
  const navigationsLink = [
    {
      name: "Profil",
      link: "/profile",
      icon: <CgProfile />,
      needToBeLoggedIn: true,
    },
    {
      name: "Favoris",
      link: "/favorites",
      icon: <GiStarsStack />,
      needToBeLoggedIn: true,
    },
    {
      name: "Panier",
      link: "/cart",
      icon: <BiCart />,
      needToBeLoggedIn: true,
    },
    {
      name: "Connexion",
      link: "/auth",
      icon: <BiLogIn />,
      needToBeLoggedIn: false,
    },
  ];

  const filteredNavigationsLink = navigationsLink.filter(
    (navigation) => navigation.needToBeLoggedIn === isLoggedIn
  );

  return (
    <header className="Header">
      <h1 className="Header__title">
        <Link to="/">LeCoinManga</Link>
      </h1>

      <div className="Header__search">
        <input type="text" placeholder="Rechercher un manga..." />
        <div className="Header__search__button">
          <BiSearchAlt />
        </div>
      </div>

      <nav className="Header__nav">
        <ul className="Header__nav__list">
          {filteredNavigationsLink.map((link, index) => (
            <li key={index} className="Header__nav__list__item">
              <Link className="Header__nav__list__item__link" to={link.link}>
                <span className="Header__nav__list__item__link__icon">
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
          {isLoggedIn && (
            <li className="Header__nav__list__item" onClick={logOut}>
              <div className="Header__nav__list__item__link">
                <span className="Header__nav__list__item__link__icon">
                  <BiLogIn />
                </span>
                <span>Déconnexion</span>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
