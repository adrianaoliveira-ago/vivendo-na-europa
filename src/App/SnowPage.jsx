import "./SnowPage.css";
import Header from "./Header";
import Footer from "./Footer";

const SnowPage = () => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const monthToShow = 12;

  console.log(month);

  return (
    <div>
      <Header />
      {month === monthToShow && (
        <div class="snowflakes" aria-hidden="true">
          {/* <div class="intro">
          {" "}
          Find 250+ Ready to use demo at{" "}
          <a href="https://codeconvey.com">Codeconvey.com</a>
        </div> */}
          <div class="snowflake">❅</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SnowPage;
