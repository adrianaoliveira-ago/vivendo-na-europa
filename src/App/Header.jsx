import logoImg from "./logo.png";
import "./Header.css";
import DarkMode from "./DarkMode";
import "./DarkMode.css";

function goToHomePage() {
  location.href = "/";
}

function Header() {
  const headerlinks = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/vivendo_na_europa__/?hl=de",
    },

    {
      name: "Facebook",
      link: "https://www.facebook.com/Vivendo.na.Europa.ve",
    },

    {
      name: "Blog",
      link: "/blog",
    },
  ];

  return (
    <header id="page-header">
      <nav className="nav">
        <img
          className="page-header-animation"
          src={logoImg}
          width="250px"
          onClick={goToHomePage}
        />

        <ul className="nav-items">
          {headerlinks.map((item) => {
            return (
              <li className="nav-items">
                <a href={item.link} target="_blank">
                  <span class="underline-on-hover">{item.name}</span>
                </a>
              </li>
            );
          })}
          <DarkMode />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
