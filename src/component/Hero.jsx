import { useEffect, useState } from "react";
import "./hero.css";

const stones = [
  { color: "#a855f7", x: "-40vw", y: "-30vh" },
  { color: "#ef4444", x: "-35vw", y: "25vh" },
  { color: "#22c55e", x: "40vw", y: "-20vh" },
  { color: "#3b82f6", x: "30vw", y: "-5vh" },
  { color: "#facc15", x: "5vw", y: "30vh" },
  { color: "#f59e0b", x: "35vw", y: "25vh" },
];

export default function Hero() {
  const [stage, setStage] = useState(0);
  const [posterIndex, setPosterIndex] = useState(0);

  useEffect(() => {
  const t1 = setTimeout(() => setStage(1), 5000);  // converge
  const t2 = setTimeout(() => setStage(2), 9000);  // shrink
  const t3 = setTimeout(() => setStage(3), 10500); // show homepage

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
  };
  }, []);
  useEffect(() => {
  if (stage >= 3) {
    const interval = setInterval(() => {
      setPosterIndex(prev => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }
  }, [stage]);
  return (
    <section className="hero">
      <div className="background"></div>

      <div className="stones-container">
  {stones.map((stone, index) => (
    <div
  key={index}
  className={`stone 
  ${stage >= 1 ? "converge" : ""} 
  ${stage >= 2 ? "shrink" : ""}
  `}
  style={{
    color: stone.color,
    "--x": stone.x,
    "--y": stone.y,
    animationDelay: `${index * 0.6}s`
  }}
/>
  ))}
</div>
  <div className={`main-page ${stage >= 3 ? "show" : ""}`}>
  <div className="left">
    <h1>Marvel Universe</h1>
    <p>From Endgame to the Multiverse Saga.</p>
  </div>

  <div className="right">
  <img
    src="/end_1.jpeg"
    className={posterIndex === 0 ? "active" : ""}
  />
  <img
    src="/2026_1.jpeg"
    className={posterIndex === 1 ? "active" : ""}
  />
  <img
    src="/2026_2.jpg"
    className={posterIndex === 2 ? "active" : ""}
  />
  <img
    src="/2026_3.jpg"
    className={posterIndex === 3 ? "active" : ""}
  />
</div>
</div>
    </section>
  );
}