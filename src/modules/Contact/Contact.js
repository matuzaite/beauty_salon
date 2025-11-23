import React from "react";
import "./styles.scss";

const Contact = () => {
  const professionals = [
    {
      id: 1,
      name: "Ligita",
      position: "Kirpėja",
      phone: "+370 XXX XXX XX",
    },
    {
      id: 2,
      name: "Nijole",
      position: "Kirpėja",
      phone: "+370 XXX XXX XX",
    },
    {
      id: 3,
      name: "Daiva",
      position: "Kirpėja",
      phone: "+370 XXX XXX XX",
    },
    {
      id: 4,
      name: "Eglė",
      position: "Vizažistė",
      phone: "+370 XXX XXX XX",
    },
    {
      id: 5,
      name: "Dovilė",
      position: "Vyrų Kirpėja",
      phone: "+370 XXX XXX XX",
    },
  ];

  const renderList = () => (
    <table className="professionals-table" role="table">
      <thead>
        <tr></tr>
      </thead>

      <tbody>
        {professionals.map((professional) => (
          <tr key={professional.id} className="professional-row">
            <td className="name-position-cell" data-label="Name & Position">
              <div className="name-position">
                <span className="name">{professional.name}</span>
                <span className="position">{professional.position}</span>
              </div>
            </td>

            <td className="contact-cell" data-label="Contact">
              <a
                className="call-btn"
                href={`tel:${professional.phone}`}
                aria-label={`Skambinti ${professional.name}`}
              >
                <svg
                  className="call-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.91.36 1.8.7 2.64a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.34-1.34a2 2 0 0 1 2.11-.45c.84.34 1.73.58 2.64.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="call-text">Skambinti</span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div id="contact" className="contact-container">
      <h1>Kontaktai</h1>
      {renderList()}
    </div>
  );
};

export default Contact;
