import "./styles.scss";
import { useState, useEffect } from "react";
import { cakeImg, decorImg, flowerImg, potImg } from "../../assets/images";

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const services = [
    {
      id: 1,
      name: "Salon Decor 1",
      image: cakeImg,
    },
    {
      id: 2,
      name: "Salon Decor 2",
      image: decorImg,
    },
    {
      id: 3,
      name: "Salon Decor 3",
      image: flowerImg,
    },
    {
      id: 4,
      name: "Salon Decor 4",
      image: potImg,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setFade(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-section">
      <div className="carousel-text">
        <h2>Aukštos Kokybės Paslaugos</h2>
        <p>
          Mes suteikiame geriausias grožio paslaugas, naudodami modernias
          technologijas ir profesionalias technikas. Jūsų pasitikėjimas yra mūsų
          prioritetas.
        </p>
      </div>
      <div className="carousel-container">
        <img
          src={services[currentIndex].image}
          alt={services[currentIndex].name}
          className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
        />
        <h3 className={fade ? "fade-in" : "fade-out"}>
          {services[currentIndex].name}
        </h3>
      </div>
    </div>
  );
};

export default CarouselSection;
