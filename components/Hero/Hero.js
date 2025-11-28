import CarouselSection from "../Carousel/Carousel";
import "./styles.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-inner">
        <div className="about-text">
          <h1>Patikimas grožio salonas jūsų kasdieniam įvaizdžiui</h1>
          <p>
            Mūsų meistrai kuria šiuolaikinius kirpimus, spalvų transformacijas ir stiliaus detales,
            kad kiekvienas apsilankymas būtų mažas atsinaujinimas.
          </p>
          <p>
            Dirbame su profesionaliomis priemonėmis, konsultuojame ir siūlome individualius sprendimus – nuo
            kasdienio stiliaus iki šventinių įvaizdžių.
          </p>
        </div>
        <CarouselSection />
      </div>
    </div>
  );
};
export default About;
