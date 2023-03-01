import AffiliateCard from "./AffiliateCard";
import "./AffiliateCard.css";

import OrangeTag from "./affiliatelinkTag.svg";

const AffiliateLinks = () => {
  return (
    <div className="affiliate">
      <AffiliateCard
        tagIcon={OrangeTag}
        title="Flight Knight Lightweight 4 Wheel"
        comments="“Perfect to travel with restriction size. I never had problem with this luggage.”"
      />
      {/* <AffiliateCard
        tagIcon={OrangeTag}
        title="Flight Knight Lightweight 4 Wheel"
        comments="“Perfect to travel with restriction size. I never had problem with this luggage.”"
      /> */}
    </div>
  );
};

export default AffiliateLinks;
