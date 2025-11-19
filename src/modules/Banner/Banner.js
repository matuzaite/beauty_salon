import "./styles.scss";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__text">
        <h1>Ekspertų rūpestis tavo įvaizdžiui.</h1>
        <p>
          Kirpimas, dažymas, plaukų atstatymas ir grožio procedūros –
          <br />
          viskas vienoje vietoje.
        </p>
      </div>

      <Button
        className="btn btn--secondary"
        label="Rezervuoti laiką"
        onClick={() => alert("Button clicked!")}
      />
    </div>
  );
};

export default Banner;
