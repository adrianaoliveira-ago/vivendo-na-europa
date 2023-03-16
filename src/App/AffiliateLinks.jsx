import AffiliateCard from "./AffiliateCard";
import Title from "./Title";
import "./AffiliateCard.css";
import "./AffiliateLinks.css";
import Footer from "./Footer";
import Header from "./Header";

// import OrangeTag from "./affiliatelinkTag.svg";

const AffiliateLinks = () => {
  return (
    <div className="affiliate-div">
      <div className="header">
        <Header></Header>
      </div>
      <Title name="Affiliate Links" />
      <div className="affiliate">
        <AffiliateCard
          tagIcon="purple"
          title="Flight Knight Lightweight 4 Wheel"
          comments="“Perfect to travel with restriction size. I never had problem with this luggage.”"
          boxColor="#C976EE"
          borderColor="3px solid #A53AFA"
          cardBox="#DABEFE"
          cardBoxName="Luggage"
          href="https://www.amazon.de/Flight-Knight-ABS-Handgepack-zugelassen-Fluggesellschaften/dp/B09ZQN5KJY?_encoding=UTF8&pd_rd_w=hVKad&content-id=amzn1.sym.0b0b934e-1f89-4d8b-9a61-672a3b20f8d0&pf_rd_p=0b0b934e-1f89-4d8b-9a61-672a3b20f8d0&pf_rd_r=XBR0C9Q0DMQNXEXS8T8S&pd_rd_wg=kkadJ&pd_rd_r=b86531fc-02db-4085-963f-9955b805b66d&linkCode=li2&tag=vivendonaeu09-21&linkId=1a020354a2368d9c6390248a4a3f6baf&language=de_DE&ref_=as_li_ss_il"
          imgSrc="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09ZQN5KJY&Format=_SL160_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=vivendonaeu09-21&language=de_DE"
          imgSrcTracking="https://ir-de.amazon-adsystem.com/e/ir?t=vivendonaeu09-21&language=de_DE&l=li2&o=3&a=B09ZQN5KJY"
        />
        <AffiliateCard
          tagIcon="pink"
          title="OSMO Mobile SE Smartphone Gimbal"
          comments="“Very efficient for you who have or not experience with this type of technology. Very simple to use, I highly recommend it.”"
          boxColor="#F175E1"
          borderColor="3px solid #D34EC2"
          cardBox="#FFC7F9"
          cardBoxName="gimbal"
          href="https://www.amazon.de/-/en/Smartphone-Stabilization-ShotGuides-ActiveTrack-Stabilizer/dp/B0B7XCG225?crid=XVEQOM73UUB7&keywords=gimbal&qid=1678987899&sprefix=gimbal%2Caps%2C92&sr=8-5&linkCode=li2&tag=vivendonaeu09-21&linkId=b7c2044c2e17eef77e18ba462b4d5d79&language=en_GB&ref_=as_li_ss_il"
          imgSrc="//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B7XCG225&Format=_SL160_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=vivendonaeu09-21&language=en_GB"
          imgSrcTracking="https://ir-de.amazon-adsystem.com/e/ir?t=vivendonaeu09-21&language=en_GB&l=li2&o=3&a=B0B7XCG225"
        />
        <AffiliateCard
          tagIcon="dark orange"
          title="Flight Knight Lightweight 4 Wheel"
          comments="“Perfect to travel with restriction size. I never had problem with this luggage.”"
          boxColor="#F6AE65"
          borderColor="3px solid #C38C00"
          cardBox="#FFD77C"
          cardBoxName="Travel Tips"
        />
        <AffiliateCard
          tagIcon="orange"
          title="Flight Knight Lightweight 4 Wheel"
          comments="“Perfect to travel with restriction size. I never had problem with this luggage.”"
          boxColor="#FFEBBE"
          borderColor="3px solid #FFD773"
          cardBox="#FECF57"
          cardBoxName="Travel Tips"
        />
        <AffiliateCard
          tagIcon="blue"
          title="Flight Knight Lightweight 4 Wheel"
          comments="“Perfect to travel with restriction size. I never had problem with this luggage.”"
          boxColor="#6CBFD3"
          borderColor="3px solid #057994"
          cardBox="#9AD9E8"
          cardBoxName="Travel Tips"
        />
      </div>
    </div>
  );
};

export default AffiliateLinks;
