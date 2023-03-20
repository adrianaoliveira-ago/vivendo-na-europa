import "./AffiliateCard.css";
import OrangeTag from "./Icons/affiliateLinkTag.svg";
import PinkTag from "./Icons/IconPinkTag.svg";
import BlueTag from "./Icons/IconBlueTag.svg";
import DarkOrangeTag from "./Icons/IconDarkOrangeTag.svg";
import PurpleTag from "./Icons/IconPurpleTag.svg";

const AffiliateCard = ({
  tagIcon,
  title,
  comments,
  cardBoxName,
  href,
  imgSrc,
  imgSrcTracking,
  cardBox,
  boxColor,
  borderColor,
  theme, // yellow , pink
}) => {
  // const themes = {
  //   'yellow': {
  //     cardBox: "",
  //     boxColor: "",
  //     borderColor: ""
  //   },
  //   'pink': {
  //     cardBox: "",
  //     boxColor: "",
  //     borderColor: ""
  //   }
  // }

  // const getTheme = () => {
  //   return themes[theme]
  // }

  const getTag = () => {
    if (tagIcon === "orange") {
      return OrangeTag;
    } else if (tagIcon === "pink") {
      return PinkTag;
    } else if (tagIcon === "blue") {
      return BlueTag;
    } else if (tagIcon === "dark orange") {
      return DarkOrangeTag;
    } else if (tagIcon === "purple") {
      return PurpleTag;
    }
  };
  return (
    <div className="box">
      <div className="box--div">
        <img src={getTag()} className="box--img" />

        <div className="box--first">
          <a href={href} target="_blank">
            <img src={imgSrc} />
          </a>
          <img
            src={imgSrcTracking}
            width="1"
            height="1"
            border="0"
            alt=""
            // style="border:none !important; margin:0px !important;"
          />
        </div>
      </div>

      <div
        className="box--second"
        style={{
          backgroundColor: boxColor, // getTheme().boxColor
          border: borderColor,
        }}
      >
        <h1 className="box--title">{title}</h1>
        <h4 className="box--comments">{comments}</h4>
        <div className="box--div-cadrBox">
          <div
            className="box--cardBox"
            style={{
              backgroundColor: cardBox,
            }}
          >
            <h1 className="box--card--name">{cardBoxName}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateCard;
