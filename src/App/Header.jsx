import logoImg from "./Icons/logo.png";
import IconMenu from "./Icons/IconMenu.png";
import "./Header.css";
import DarkMode from "./DarkMode";
import "./DarkMode.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import "./Chakra.css";
import "animate.css";
import Title from "./Title";
import IconSplitter from "./IconSplitter";

const NavLinks = () => {
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
    {
      name: "Affiliate Links",
      link: "https://vivendonaeuropa.netlify.app/affiliate-links",
    },
  ];

  return (
    <div className="nav-map-links ">
      {headerlinks.map((item) => {
        return (
          <li className="nav-items ">
            <a href={item.link} target="_blank">
              <span class="underline-on-hover ">{item.name}</span>
            </a>
          </li>
        );
      })}
      {/* <DarkMode /> */}
    </div>
  );
};

function goToHomePage() {
  location.href = "/";
}

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
          <img
            src={IconMenu}
            className="nav-icon-menu"
            ref={btnRef}
            onClick={onOpen}
          />
          <>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                {/* <DrawerCloseButton /> */}
                <DrawerHeader>
                  <Title name="MENU" />
                </DrawerHeader>
                <DrawerBody>
                  <IconSplitter className="nav-icon-splitter" />
                  {/* <Input placeholder="Type here..." /> */}
                  <NavLinks />
                </DrawerBody>

                <DrawerFooter>
                  <DarkMode />
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
          <div className="nav-links-desktop-wrapper">
            <NavLinks />
            <DarkMode />
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
