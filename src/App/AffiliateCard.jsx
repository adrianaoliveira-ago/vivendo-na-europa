// import Header from "./Header";
// import Footer from "./Footer";
import "./AffiliateCard.css";

const AffiliateCard = ({
  tagIcon,
  title,
  comments,
  cardBox,
  boxColor,
  borderColor,
  href,
  imgSrc,
  imgSrcTracking,
}) => {
  return (
    <div className="box">
      {/* <Header /> */}
      <div className="box--div">
        <img src={tagIcon} className="box--img" />

        <div className="box--first">
          {/* <a href={purchaseLink} /> */}
          <a
            className="box--href"
            href="https://www.amazon.de/-/en/Smartphone-Stabilization-ShotGuides-ActiveTrack-Stabilizer/dp/B0B7XCG225?crid=2HF94YRGNU5E2&keywords=gimbal&qid=1677619891&sprefix=gim%2Caps%2C95&sr=8-4&linkCode=li2&tag=vivendonaeu00-21&linkId=e55f9ad7a0c59155555af24b67a80a39&language=en_GB&ref_=as_li_ss_il"
            target="_blank"
          >
            <img
              className="box--img2"
              border="0"
              src="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B7XCG225&Format=_SL160_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=vivendonaeu00-21&language=en_GB"
            />
          </a>
          <img
            src="https://ir-de.amazon-adsystem.com/e/ir?t=vivendonaeu00-21&language=en_GB&l=li2&o=3&a=B0B7XCG225"
            width="1"
            height="1"
            border="0"
            alt=""
            // style="border:none !important; margin:0px !important;"
          />
        </div>
      </div>

      <div className="box--second">
        <h1 className="box--title">{title}</h1>
        <h4 className="box--comments">{comments}</h4>
        <div>{cardBox}</div>
        <div style={{ backgroundColor: boxColor }}></div>
        <div style={{ backgroundColor: borderColor }}></div>
        <div className="box--div-cadrBox">
          <div className="box--cardBox">
            <h1 className="box--card--name">Hello</h1>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AffiliateCard;
