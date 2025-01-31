import React from "react";
import "./About.css";
import logo from "../../assets/logo.png";
import software from "../../assets/software.png";
import web from "../../assets/webDesign.png";
import Graphic from "../../assets/Graphic.png";
import digitalMarketing from "../../assets/Digitalmarketing.png";

export default function About() {
  return (
    <>
      <h1 className="Main">A BIT About Us</h1>
      <h2 className="subhed">Who We Are?</h2>
      <br />
      <div className="col">
        <div className="brand">
          <img src={logo} alt="" srcSet="" />
        </div>
      </div>
      <div className="contentBox" id="about">
        <p>
          At AH Online, we help businesses grow their online presence with
          top-notch website development and digital marketing. Our experienced
          team specializes in creating modern, responsive, and high-performing
          websites that not only look great but also drive results. Whether you
          need a custom website, e-commerce store, or front-end development, we
          use the latest technologies to ensure your site meets industry
          standards. We also offer Shopify and WordPress development, delivering
          tailored solutions for online stores and content-driven websites. Our
          SEO expertise helps businesses rank higher, attract organic traffic,
          and boost visibility, while our social media marketing ensures your
          brand reaches the right audience with engaging content and strategic
          ad campaigns. At AH Online, we believe a strong digital presence is
          key to success. That’s why we focus on custom solutions that align
          with your business goals while ensuring a smooth user experience.
        </p>
      </div>
      <div className="featureCard">
        <div className="cardOne">
          <img src={software} alt="" srcSet="" />
        </div>
        <div className="cardTwo">
          <img src={web} alt="" srcSet="" />
        </div>
        <div className="cardThree">
          <img src={Graphic} alt="" srcSet="" />
        </div>
        <div className="cardFour">
          <img src={digitalMarketing} alt="" srcSet="" />
        </div>
      </div>
    </>
  );
}
