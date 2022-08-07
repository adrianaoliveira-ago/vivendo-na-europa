import YouTubeIcon from "./Icons/YoutubeIcon.svg";
import InstagramIcon from "./Icons/instagramIcon.svg";
import FacebookIcon from "./Icons/FacebookIcon.svg";
import PintrestIcon from "./Icons/PinterestIcon.svg";
import TiktokIcon from "./Icons/TiktokIcon.svg";
import "./SocialIcons.css";

function SocialIcons() {
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="style-icon">
      <img
        src={YouTubeIcon}
        onClick={() =>
          openLink("https://www.youtube.com/channel/UCjEbLrPRXibHwF2gn2i3Y6g")
        }
      />
      <img
        src={InstagramIcon}
        onClick={() =>
          openLink("https://www.instagram.com/vivendo_na_europa__/?hl=de")
        }
      />
      <img
        src={FacebookIcon}
        onClick={() =>
          openLink("https://www.facebook.com/Vivendo.na.Europa.ve")
        }
      />
      <img
        src={PintrestIcon}
        onClick={() => openLink("https://www.pinterest.de/Gonzagaadriana/")}
      />
      <img
        src={TiktokIcon}
        onClick={() => openLink("https://www.tiktok.com/@gonzagaadriana")}
      />
    </div>
  );
}

export default SocialIcons;
