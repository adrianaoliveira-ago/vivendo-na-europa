import AffiliateCard from "./AffiliateCard";
import Title from "./Title";
import "./AffiliateCard.css";
import "./AffiliateLinks.css";
import Footer from "./Footer";
import Header from "./Header";

// prop hideHeader: boolean
const AffiliateLinks = ({ hideHeader = false }) => {
  const arrayAffiliate = [
    {
      tagIcon: "purple",
      title: "Flight Knight Lightweight 4 Wheel",
      comments:
        "“Perfect to travel with restriction size. I never had problem with this luggage.”",
      boxColor: "#C976EE",
      borderColor: "3px solid #A53AFA",
      cardBox: "#DABEFE",
      cardBoxName: "Luggage",
      href: "https://www.amazon.de/Flight-Knight-ABS-Handgepack-zugelassen-Fluggesellschaften/dp/B09ZQN5KJY?_encoding=UTF8&pd_rd_w=hVKad&content-id=amzn1.sym.0b0b934e-1f89-4d8b-9a61-672a3b20f8d0&pf_rd_p=0b0b934e-1f89-4d8b-9a61-672a3b20f8d0&pf_rd_r=XBR0C9Q0DMQNXEXS8T8S&pd_rd_wg=kkadJ&pd_rd_r=b86531fc-02db-4085-963f-9955b805b66d&linkCode=li2&tag=vivendonaeu09-21&linkId=1a020354a2368d9c6390248a4a3f6baf&language=de_DE&ref_=as_li_ss_il",
      imgSrc:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09ZQN5KJY&Format=_SL160_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=vivendonaeu09-21&language=de_DE",
      imgSrcTracking:
        "https://ir-de.amazon-adsystem.com/e/ir?t=vivendonaeu09-21&language=de_DE&l=li2&o=3&a=B09ZQN5KJY",
    },
    {
      tagIcon: "pink",
      title: "OSMO Mobile SE Smartphone Gimbal",
      comments:
        "“Very efficient for you who have or not experience with this type of technology. Very simple to use, I highly recommend it.”",
      boxColor: "#F175E1",
      borderColor: "3px solid #D34EC2",
      cardBox: "#FFC7F9",
      cardBoxName: "gimbal",
      href: "https://www.amazon.de/-/en/Smartphone-Stabilization-ShotGuides-ActiveTrack-Stabilizer/dp/B0B7XCG225?crid=XVEQOM73UUB7&keywords=gimbal&qid=1678987899&sprefix=gimbal%2Caps%2C92&sr=8-5&linkCode=li2&tag=vivendonaeu09-21&linkId=b7c2044c2e17eef77e18ba462b4d5d79&language=en_GB&ref_=as_li_ss_il",
      imgSrc:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B7XCG225&Format=_SL160_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=vivendonaeu09-21&language=en_GB",
      imgSrcTracking:
        "https://ir-de.amazon-adsystem.com/e/ir?t=vivendonaeu09-21&language=en_GB&l=li2&o=3&a=B0B7XCG225",
    },
    {
      tagIcon: "dark orange",
      title: "Baggage scale",
      comments:
        "“Perfect to take on any trip when you have that doubt about weight”",
      boxColor: "#F6AE65",
      borderColor: "3px solid #C38C00",
      cardBox: "#FFD77C",
      cardBoxName: "Travel Tips",
      href: "https://www.amazon.de/FREETOO-Gep%C3%A4ckwaage-Hintergrundbeleuchtung-Tara-Funktion-Familienleben/dp/B07XDW4TD3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2XZLRPPPBXHEJ&isTryState=0&keywords=baggage%2Bscale&nodeID=14772479031&psd=1&qid=1679052752&s=prime-wardrobe&sprefix=baggage%2Bscale%2Cprime-wardrobe%2C67&sr=1-1&th=1&linkCode=li2&tag=vivendonaeu09-21&linkId=6beab865fafc7872305432587f9ed9b2&language=de_DE&ref_=as_li_ss_il",
      imgSrc:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07XDW4TD3&Format=_SL160_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=vivendonaeu09-21&language=de_DE",
      imgSrcTracking:
        "https://ir-de.amazon-adsystem.com/e/ir?t=vivendonaeu09-21&language=de_DE&l=li2&o=3&a=B07XDW4TD3",
    },
    {
      tagIcon: "orange",
      title: "Camera Tripod with Bag 16.5-50 inch",
      comments:
        "“It is not heavy and is super flexible for use with cameras or phones.”",
      boxColor: "#FFEBBE",
      borderColor: "3px solid #FFD773",
      cardBox: "#FECF57",
      cardBoxName: "Travel Tips",
      href: "https://www.amazon.de/AmazonBasics-Dreibein-Stativ-leicht-3-Wege/dp/B00XI87KV8?content-id=amzn1.sym.8240d8cc-1e81-4349-984a-30534038ba7e%3Aamzn1.sym.8240d8cc-1e81-4349-984a-30534038ba7e&cv_ct_cx=tripod&keywords=tripod&pd_rd_i=B00XI87KV8&pd_rd_r=ab1341c8-903d-4197-8b98-e75ee7a3a239&pd_rd_w=pUrZR&pd_rd_wg=f8BPt&pf_rd_p=8240d8cc-1e81-4349-984a-30534038ba7e&pf_rd_r=2CPF87AF584535V339KM&qid=1679058070&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=tripo%2Caps%2C111&sr=1-1-cc7a04fe-cc55-42ad-b883-1b910070c86a&linkCode=li2&tag=vivendonaeu09-21&linkId=71d43dc519575a929824772a0415d5e4&language=de_DE&ref_=as_li_ss_il",
      imgSrc:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00XI87KV8&Format=_SL160_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=vivendonaeu09-21&language=de_DE",
      imgSrcTracking:
        "https://ir-de.amazon-adsystem.com/e/ir?t=vivendonaeu09-21&language=de_DE&l=li2&o=3&a=B00XI87KV8",
    },
    {
      tagIcon: "blue",
      title: "Rode VideoMicro Compact On Camera Microphone",
      comments:
        "“Perfect for vlogs because it cancels out noise well. Super recommend, worth the investment.”",
      boxColor: "#6CBFD3",
      borderColor: "3px solid #057994",
      cardBox: "#9AD9E8",
      cardBoxName: "Travel Tips",
      href: "https://www.amazon.de/-/en/Rode-VideoMicro-Compact-Camera-Microphone/dp/B015R0IQGW?crid=2NV72DDJAMQ4C&keywords=rode+phone&qid=1679066751&s=ce-de&sprefix=phone+rode%2Celectronics%2C82&sr=1-6&linkCode=li2&tag=vivendonaeu09-21&linkId=8cb8461fb2d5a821a49fbf48080ca7d8&language=en_GB&ref_=as_li_ss_il",
      imgSrc:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015R0IQGW&Format=_SL160_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=vivendonaeu09-21&language=en_GB",
      imgSrcTracking:
        "https://ir-de.amazon-adsystem.com/e/ir?t=vivendonaeu09-21&language=en_GB&l=li2&o=3&a=B015R0IQGW",
    },
    {
      tagIcon: "purple",
      title: "Vacuum Bags for Clothes",
      comments:
        "“A great option for trips that allow only small on-board luggage.”",
      boxColor: "#C976EE",
      borderColor: "3px solid #A53AFA",
      cardBox: "#DABEFE",
      cardBoxName: "Travel Tips",
      href: "https://www.amazon.de/-/en/Clothes-Leak-Proof-Reusable-Rolling-Backpack/dp/B0B93X4T24?keywords=reise&qid=1679068383&sr=8-30&linkCode=li2&tag=vivendonaeu09-21&linkId=a01cf78b35f303752fcf89d80031a5b2&language=en_GB&ref_=as_li_ss_il",
      imgSrc:
        "//ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0B93X4T24&Format=_SL160_&ID=AsinImage&MarketPlace=DE&ServiceVersion=20070822&WS=1&tag=vivendonaeu09-21&language=en_GB",
      imgSrcTracking:
        "https://ir-de.amazon-adsystem.com/e/ir?t=vivendonaeu09-21&language=en_GB&l=li2&o=3&a=B0B93X4T24",
    },
  ];

  return (
    <div className="affiliate-div">
      {hideHeader === false && (
        <div className="header">
          <Header />
        </div>
      )}

      <Title name="Affiliate Links" />
      <div className="affiliate">
        {arrayAffiliate.map((item) => {
          return (
            <AffiliateCard
              tagIcon={item.tagIcon}
              title={item.title}
              comments={item.comments}
              boxColor={item.boxColor}
              borderColor={item.borderColor}
              cardBox={item.cardBox}
              cardBoxName={item.cardBoxName}
              href={item.href}
              imgSrc={item.imgSrc}
              tracking={item.imgSrcTracking}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AffiliateLinks;
