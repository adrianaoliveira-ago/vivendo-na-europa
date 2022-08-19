import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import "./CheatPage.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/**
 * List of available styles
 *  https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD
 */
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CheatPage = () => {
  const codeStringOnClick = `
    const functionToBeInvoked = () => {
        // this will be executed when img is clicked
    }
    // or
    function functionToBeInvoked() {
        // this will be executed when img is clicked
    }

    return(
        ...
        <img onClick={functionToBeInvoked} />
        ...
    )
  `;
  const codeStringNewComponent = `
    // if you need CSS, 
    import "./MyComponent.css";
    // create a new a file MyComponent.jsx with this content
    const MyCompoment = () => { 
      return (
        <div>Hello World</div>
      )
    } 

    export default MyComponent;
    `;
  return (
    <div>
      <Header />
      <div className="padding-footer">
        <Title name="Cheat Sheet"></Title>

        <h1>How to add onClick to an html Element</h1>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeStringOnClick}
        </SyntaxHighlighter>

        <h1>How to create a new react component </h1>
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {codeStringNewComponent}
        </SyntaxHighlighter>
      </div>
      <Footer />
    </div>
  );
};

export default CheatPage;
