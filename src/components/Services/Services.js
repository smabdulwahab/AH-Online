import React from "react";
import "./Services.css";
export default function Services() {
  return (
    <>
      <div className="ParentCol">
        <h1>WHAT WE DO</h1>
        <p className="container">
          At AH Online, we help businesses grow by providing smart and effective
          digital marketing solutions. Our team knows what it takes to build a
          strong online presence, and we tailor our strategies to meet the
          unique needs of each business. We specialize in Web Development, PPC
          Advertising, Social Media Marketing & Management, and Graphic Design,
          working with businesses across different industries. No matter your
          size or sector, we have the right marketing solution to help you stand
          out and succeed in the digital world.
        </p>
        <div className="servicesCard">
          <div className="Firstcard container">
            <h2>01</h2>
            <h3>Search Engine Optimization</h3>
            <p className="container">
              Search Engine Optimization is one of the most integral parts of a
              website that helps you rank higher on web pages and get more
              conversion rates...{" "}
            </p>
          </div>
          <div className="Secondcard">
            <h2>02</h2>
            <h3>Paid Marketin </h3>
            <p className="container">
              Social media has changed the way we live and the way we do
              business. Every social platform serves an audience with
              diversified interests...
            </p>
          </div>
          <div className="Thirdcard">
            <h2>03</h2>
            <h3>Social Media Marketing </h3>
            <p className="container">
              Social media Marketing is one of the most essential digital
              marketing strategies which can maximize your brand’s visibility
              on...
            </p>
          </div>
          <div className="Fourthcard">
            <h2>04</h2>
            <h3>Ecommerce Development</h3>
            <p className="container">
              Your website should not just look great; it’s crucial to set the
              right impression and provide accurate information to your future
              customers...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
