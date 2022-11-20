import Header from "./Header";
import Footer from "./Footer";
import BlogPost from "./BlogPost";
import "./BlogPage.css";
import BlogPostGreece from "./BlogPostGreece.jpg";
import BlogPostLondon from "./BlogPostLondon.jpg";
import BlogPostBerlin from "./BlogPostBerlin.jpg";
import BlogPostBerlin2 from "./BlogPostBerlin2.jpg";
import Title from "./Title";
import SocialIcons from "./SocialIcons";
import Snow from "./Snow";

// function BlogPage() {
const BlogPage = () => {
  const hashtagListAtenas = [
    {
      name: "travel",
      color: "pink",
      url: "https://www.instagram.com/explore/tags/travel/?hl=de",
    },

    {
      name: "Atenas",
      color: "#FFC9BC",
      url: "https://www.instagram.com/explore/tags/athens/?hl=de",
    },
  ];

  const galleryAthenas = [
    {
      description: "Sounion | Greece ",
      year: 2022,
      src: "/images/greece/photo7.jpg",
    },
    {
      description: "Sounio-Temple of Poseidon | Greece-Sounion",
      year: 2022,
      src: "/images/greece/photo8.jpg",
    },
    {
      description: "Library of Hadrian | Greece-Athens",
      year: 2022,
      src: "/images/greece/photo9.jpg",
    },
    {
      description: "Areopagus | Greece-Athens",
      year: 2022,
      src: "/images/greece/photo10.jpg",
    },
    {
      description: "Greece-Athens",
      year: 2022,
      src: "/images/greece/photo12.jpg",
    },
    {
      description: "Herod Atticus Odeon | Greece-Athens",
      year: 2022,
      src: "/images/greece/photo13.jpg",
    },
    {
      description: "Herod Atticus Odeon | Greece-Athens",
      year: 2022,
      src: "/images/greece/photo14.jpg",
    },
    {
      description: "Arch of Hadrian | Greece-Athens",
      year: 2022,
      src: "/images/greece/photo16.jpg",
    },
    {
      description: "Panathenaic Stadium | Greece-Athens",
      year: 2022,
      src: "/images/greece/photo17.jpg",
    },
    {
      description: "Panathenaic Stadium | Greece-Athens",
      year: 2022,
      src: "/images/greece/photo18.jpg",
    },
  ];

  return (
    <div className="Blog-page-padding">
      <Header></Header>
      <Snow />
      <div className="Blog-page-padding2">
        <Title name="Vivendo na Europa Travel Blog"></Title>
        <SocialIcons />
        <div className="blog-post-padding">
          {/* BlogPost Greece */}

          <BlogPost
            subtitle="Viagem para Atenas"
            urlList={[
              "https://www.youtube.com/embed/gGT_X3bRk4c",
              "https://www.youtube.com/embed/vw1tTJViS3Y",
            ]}
            image={BlogPostGreece}
            text1="The tour was great, the guide was friendly and we had a nice time!
          The tour was great, the guide was friendly and we had a nice time! The
          tour was great, the guide was friendly and we had a nice time!"
            text2="Greece (Greek: Ελλάδα, romanized: Elláda, [elaða]), officially the Hellenic Republic,[a] is a country in Southeast Europe. It is situated on the southern tip of the Balkans, and is located at the crossroads of Europe, Asia, and Africa. Greece shares land borders with Albania to the northwest, North Macedonia and Bulgaria to the north, and Turkey to the northeast. The Aegean Sea lies to the east of the mainland, the Ionian Sea to the west, and the Sea of Crete and the Mediterranean Sea to the south. Greece has the longest coastline on the Mediterranean Basin, featuring thousands of islands. The country consists of nine traditional geographic regions, and has a population of approximately 10.7 million. Athens is the nation's capital and largest city, followed by Thessaloniki."
            hashtagList={hashtagListAtenas}
            // image2={BlogPostGreece2}
            galleryList={galleryAthenas}
          />

          {/* BlogPost UK */}
          <BlogPost
            subtitle="Viagem para Londres"
            url="https://www.youtube.com/embed/fk1ZmM486nA"
            image={BlogPostLondon}
            text1="
          Maceió is the commercial centre of the state. The city’s economy is
          basically industrial and includes textile mills; sugar refineries;
          steel, iron, and zinc foundries; distilleries; and chemical,
          cellulose, and cigarette factories. Oil is extracted from nearby
          offshore platforms, and sugar, cotton, and rum are exported.
         "
            // image2={BlogPostLondon2}
            text2="It was originally established in 1972 by Steve Ross as Warner Communications, and Time Warner was created in 1990, following a merger between Time Inc."
            hashtagName="Londres"
            hashtagLink="https://www.instagram.com/explore/tags/london/?hl=de"
          ></BlogPost>

          {/* BlogPost Berlin */}
          <BlogPost
            subtitle={"Viagem para Berlim"}
            url="https://www.youtube.com/embed/-hUqzspclRc"
            image={BlogPostBerlin}
            text1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            image2={BlogPostBerlin2}
            text2="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. "
            hashtagName="Berlin"
            hashtagLink="https://www.instagram.com/explore/tags/berlin/?hl=de"
          ></BlogPost>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default BlogPage;
