import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import Footer from "./src/components/Footer/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      {/* <Footer /> */}
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(jsxHEading)
// this is how we render a component in react it is a bit diffrent then rendring a element in react
