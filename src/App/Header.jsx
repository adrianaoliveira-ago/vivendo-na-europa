import logoImg from "./logo.png";
import "./Header.css";

function goToHomePage() {
  // console.log("Cliquei no logo");
  // console.log(GalleryList);
  location.href = "/";
}
function Header() {
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
          <li className="nav-items">
            <a
              href="https://www.instagram.com/vivendo_na_europa__/?hl=de"
              target="_blank"
            >
              <span class="underline-on-hover">{"Instagram "}</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/Vivendo.na.Europa.ve"
              target="_blank"
            >
              <span class="underline-on-hover">{"Facebook "}</span>
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/blog" target="_blank">
              <span class="underline-on-hover">{"Blog "}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
