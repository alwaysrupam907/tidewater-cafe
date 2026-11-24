import { useState, useEffect, useRef } from "react";

/* Hero scenes */
const Window = () => (
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs><linearGradient id="w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1B5A50"/><stop offset="1" stopColor="#0A2723"/></linearGradient></defs>
    <rect width="800" height="450" fill="url(#w)"/>
    <path d="M480 340V190a120 120 0 0 1 240 0v150z" fill="#FCE7A6"/>
    <path d="M600 70v270M480 210h240M480 280h240" stroke="#12403A" strokeWidth="8"/>
    <path d="M480 340V190a120 120 0 0 1 240 0v150z" fill="none" stroke="#12403A" strokeWidth="12"/>
    {[120, 230, 340].map((x, i) => <g key={x}><path d={`M${x} 0v${90 + i * 18}`} stroke="#EAF6EF" strokeWidth="3"/><circle cx={x} cy={110 + i * 18} r="30" fill="#F2B632"/><circle cx={x} cy={110 + i * 18} r="50" fill="#F2B632" opacity=".18"/></g>)}
    <rect y="340" width="800" height="110" fill="#5A3A2E"/><rect y="332" width="800" height="16" fill="#8A5B3F"/>
    {[90, 200, 310].map(x => <g key={x}><path d={`M${x} 332l6-40h36l6 40z`} fill="#fff"/><rect x={x + 6} y="296" width="36" height="6" fill="#B9784A"/></g>)}
  </svg>
);
const Latte = () => (
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="800" height="450" fill="#8A5B3F"/>
    {[0, 90, 180, 270, 360].map(y => <rect key={y} y={y} width="800" height="4" fill="#6E452E"/>)}
    <circle cx="560" cy="225" r="170" fill="#F3EEE6"/><circle cx="560" cy="225" r="120" fill="#fff"/><circle cx="560" cy="225" r="100" fill="#B9784A"/>
    <path d="M560 285c-46-34-58-58-34-74 16-11 32-3 34 12 2-15 18-23 34-12 24 16 12 40-34 74z" fill="#F6E7D2"/>
    {[[640, 90], [700, 340], [430, 380], [690, 190], [380, 60]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx="16" ry="22" fill="#3B2A20" transform={`rotate(${i * 40} ${x} ${y})`}/>)}
  </svg>
);
const Pastry = () => (
  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="800" height="450" fill="#2A1F1A"/>
    {[100, 260, 420, 580, 740].map(x => <circle key={x} cx={x} cy="30" r="22" fill="#F2B632" opacity=".85"/>)}
    <rect y="200" width="800" height="12" fill="#8A5B3F"/><rect y="350" width="800" height="12" fill="#8A5B3F"/>
    {[430, 520, 610, 700].map(x => <ellipse key={x} cx={x} cy="182" rx="44" ry="20" fill="#E3B66B" stroke="#B98A3E" strokeWidth="4"/>)}
    {[440, 560, 680].map(x => <path key={x} d={`M${x - 36} 346c-4-34 18-48 36-48s40 14 36 48z`} fill="#7A86C9"/>)}
    {[470, 600].map(x => <circle key={x} cx={x} cy="150" r="0"/>)}
  </svg>
);
const SLIDES = [
  { Scene: Window, h: "Coffee, made the way you like it.", p: "A neighbourhood café with slow mornings and a menu you can shape." },
  { Scene: Latte, h: "Pour, sip, repeat.", p: "Every flat white is finished with a hand-poured pattern." },
  { Scene: Pastry, h: "Baked before you wake up.", p: "Croissants and muffins come out of the oven at 6:30 am." },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const x0 = useRef(null);
  const go = d => setI(v => (v + d + SLIDES.length) % SLIDES.length);
  useEffect(() => { if (paused) return; const t = setInterval(() => go(1), 5000); return () => clearInterval(t); }, [paused]);
  return (
    <div className="slider" aria-roledescription="carousel" aria-label="Café highlights"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onTouchStart={e => x0.current = e.touches[0].clientX}
      onTouchEnd={e => { const dx = e.changedTouches[0].clientX - x0.current; if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); }}>
      <div className="track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {SLIDES.map(({ Scene, img, h, p }, k) => (
          <div className="slide" key={h} aria-hidden={k !== i}>
            {img ? <img src={img} alt="" /> : <Scene />}
            <div className="wrap"><div className="txt">
              <h1>{h}</h1><p>{p}</p>
              <div className="ctas"><a className="btn" href="#build">Build your cup</a><a className="btn ghost" href="#menu">See the menu</a></div>
            </div></div>
          </div>))}
      </div>
      <button className="arrow l" aria-label="Previous slide" onClick={() => go(-1)}>‹</button>
      <button className="arrow r" aria-label="Next slide" onClick={() => go(1)}>›</button>
      <div className="dots">{SLIDES.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />)}</div>
    </div>
  );
}
