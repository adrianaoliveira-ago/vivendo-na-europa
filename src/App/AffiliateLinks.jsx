import AffiliateCard from "./AffiliateCard";
import Title from "./Title";
import "./AffiliateCard.css";
import "./AffiliateLinks.css";
import Footer from "./Footer";
import Header from "./Header";

// import OrangeTag from "./affiliatelinkTag.svg";

const AffiliateLinks = () => {
  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <Title name="Affiliate Links" />
      <div className="affiliate">
        <AffiliateCard
          tagIcon="orange"
          title="Flight Knight Lightweight 4 Wheel"
          comments="“Perfect to travel with restriction size. I never had problem with this luggage.”"
          boxColor="#C976EE"
          borderColor="3px solid #A53AFA"
          cardBox="#DABEFE"
          cardBoxName="gimbal"
        />
        <AffiliateCard
          tagIcon="pink"
          title="Flight Knight Lightweight 4 Wheel"
          comments="“Perfect to travel with restriction size. I never had problem with this luggage.”"
          boxColor="#F175E1"
          borderColor="3px solid #D34EC2"
          cardBox="#FFC7F9"
          cardBoxName="gimbal"
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
