import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate(); // react-router hook

  const handleEnter = () => {
    navigate("/multiverse"); // go to multiverse page
  };

  return (
    <div className="hero">
      <div className="portal">
        <div className="shield">
          <div className="shield-ring outer"></div>
          <div className="shield-ring middle"></div>
          <div className="shield-ring inner"></div>
          <div className="shield-core"></div>
        </div>
      </div>

      <div className="content">
        <h1>The Multiverse Is Fracturing</h1>
        <p>Every timeline has a story.</p>
        <button onClick={handleEnter}>Enter the Universe</button>
      </div>
    </div>
  );
}