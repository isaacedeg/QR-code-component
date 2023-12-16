import "./App.css";
import qrcode from "./images/image-qr-code.png";

const App = () => {
  return (
    <div className="container">
      <img src={qrcode} alt="QR-code" className="img" />
      <span className="Text">
        Improve your front-end <br />
        skills by building projects
      </span>
      <p className="sub-Text">
        Scan the QR code to visit Frontend
        <br /> Mentor and take your coding skills to
        <br /> the next level
      </p>
    </div>
  );
};

export default App;
