import Header from "./Header";
import Footer from "./Footer";
import BlogPost from "./BlogPost";
import "./BlogPage.css";
import BlogPostGreece from "./BlogPostGreece.jpg";
import BlogPostLondon from "./BlogPostLondon.jpg";
import BlogPostLondon2 from "./BlogPostLondon2.jpg";
import BlogPostGreece2 from "./BlogPostGreece2.jpg";
import BlogPostBerlin from "./BlogPostBerlin.jpg";
import BlogPostBerlin2 from "./BlogPostBerlin2.jpg";
import Title from "./Title";

// function BlogPage() {
const BlogPage = () => {
  return (
    <div className="Blog-page-padding">
      <Header></Header>
      <div className="Blog-page-padding2">
        <Title name="Vivendo na Europa Travel Blog"></Title>
        <div className="blog-post-padding">
          <BlogPost
            subtitle="Viagem para Atenas"
            url="https://www.youtube.com/embed/gGT_X3bRk4c"
            image={BlogPostGreece}
            text1="The tour was great, the guide was friendly and we had a nice time!
          The tour was great, the guide was friendly and we had a nice time! The
          tour was great, the guide was friendly and we had a nice time!"
            image2={BlogPostGreece2}
            text2="Greece (Greek: Ελλάδα, romanized: Elláda, [elaða]), officially the Hellenic Republic,[a] is a country in Southeast Europe. It is situated on the southern tip of the Balkans, and is located at the crossroads of Europe, Asia, and Africa. Greece shares land borders with Albania to the northwest, North Macedonia and Bulgaria to the north, and Turkey to the northeast. The Aegean Sea lies to the east of the mainland, the Ionian Sea to the west, and the Sea of Crete and the Mediterranean Sea to the south. Greece has the longest coastline on the Mediterranean Basin, featuring thousands of islands. The country consists of nine traditional geographic regions, and has a population of approximately 10.7 million. Athens is the nation's capital and largest city, followed by Thessaloniki."
            hashtagName="Atenas"
            hashtagLink="https://www.instagram.com/explore/tags/athens/?hl=de"
          />

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
            image2={BlogPostLondon2}
            text2="It was originally established in 1972 by Steve Ross as Warner Communications, and Time Warner was created in 1990, following a merger between Time Inc."
            hashtagName="Londres"
            hashtagLink="https://www.instagram.com/explore/tags/london/?hl=de"
          ></BlogPost>

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
