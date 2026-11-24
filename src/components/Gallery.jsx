import { useState } from "react";
import { Drawing, Art } from "./Drawing";

const SHOTS = [
  { art: "mug", color: "#C9A27A", t: "Latte art", cap: "Every flat white is finished with a hand-poured pattern.", big: true },
  { art: "beans", color: "#5A3A2E", t: "Fresh beans", cap: "Roasted weekly by a small farm partner in Coorg." },
  { art: "pastry", color: "#E3B66B", t: "Morning bakes", cap: "Croissants and muffins come out of the oven at 6:30 am." },
  { art: "plant", color: "#8DB36B", t: "Window seats", cap: "Sunlight, plants and the best seats for slow mornings." },
  { art: "grinder", color: "#7A86C9", t: "The grinder", cap: "Dialled in every morning before the first order." },
  { art: "cake", color: "#E58FA3", t: "Weekend specials", cap: "A new cake every Saturday, gone by Sunday." },
];

export default function Gallery() {
  const [sel, setSel] = useState(null);
  const go = d => setSel(s => (s + d + SHOTS.length) % SHOTS.length);
  const s = sel === null ? null : SHOTS[sel];
  const key = e => { if (e.key === "Escape") setSel(null); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
  return (
    <>
      <h2>Inside the café</h2>
      <p className="sub">Tap any tile to take a closer look.</p>
      <div className="gal">{SHOTS.map((x, i) => (
        <button key={x.t} className={"tile" + (x.big ? " big" : "")} style={{ background: `linear-gradient(135deg, ${x.color}99, ${x.color}33)` }} onClick={() => setSel(i)} aria-label={"Open " + x.t}>
          <div className="art" style={{ background: "none" }}>{x.img ? <img src={x.img} alt="" /> : <Drawing kind={x.art} color={x.color} />}</div><small>{x.t}</small>
        </button>))}</div>
      {s && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={s.t} tabIndex={-1} ref={el => el && el.focus()} onKeyDown={key} onClick={() => setSel(null)}>
          <div className="lbcard" onClick={e => e.stopPropagation()}>
            <Art item={{ ...s, name: s.t }} />
            <div className="lbbody"><h3>{s.t}</h3><p>{s.cap}</p>
              <div className="lbnav"><button className="add" onClick={() => go(-1)}>Previous</button><button className="add" onClick={() => go(1)}>Next</button><button className="add" onClick={() => setSel(null)}>Close</button></div>
            </div>
          </div>
        </div>)}
    </>
  );
}
