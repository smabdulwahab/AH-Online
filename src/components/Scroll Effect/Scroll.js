import React, { useEffect } from "react";
import "./Scroll.css";

import developmentImg from "../../assets/web development.png";
import marketingImg from "../../assets/digital marketing.png";
import designingImg from "../../assets/graphic design.png";

const Scroll = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const isCardVisible = () => {
      cards.forEach((card) => {
        if (isElementInViewport(card)) {
          card.classList.add("isVisible");
        } else {
          card.classList.remove("isVisible");
        }
      });
    };

    document.addEventListener("scroll", isCardVisible);
    window.addEventListener("resize", isCardVisible);
    isCardVisible();

    return () => {
      document.removeEventListener("scroll", isCardVisible);
      window.removeEventListener("resize", isCardVisible);
    };
  }, []);

  const services = [
    { name: "Development", img: developmentImg },
    { name: "Digital Marketing", img: marketingImg },
    { name: "Graphic Designing", img: designingImg },
  ];

  return (
    <div className="wrapper">
      {services.map((service, index) => (
        <div className="card" key={index}>
          <img src={service.img} alt={service.name} />
          <h2 className="card-title">{service.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Scroll;
