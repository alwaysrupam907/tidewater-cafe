import { useState } from "react";
import { MENU, SIZES, MILKS, inr } from "../data";

function Cup({ color, fill }) {
  const h = 110 * fill;
  return (
    <svg viewBox="0 0 130 150" width="150" role="img" aria-label="Your cup, filled to match the size you picked">
      <g className="steam" stroke="#BFE3D0" strokeWidth="3" strokeLinecap="round" fill="none"><path d="M48 24c-6-8 6-12 0-20"/><path d="M68 24c-6-8 6-12 0-20"/></g>
      <clipPath id="c"><path d="M20 34h80l-8 96a10 10 0 0 1-10 9H38a10 10 0 0 1-10-9z"/></clipPath>
      <path d="M20 34h80l-8 96a10 10 0 0 1-10 9H38a10 10 0 0 1-10-9z" fill="#E9EFEA" stroke="#EAF6EF" strokeWidth="4"/>
      <rect x="0" y={139 - h} width="130" height={h} fill={color} clipPath="url(#c)" style={{ transition: "all .5s" }}/>
      <path d="M100 52c26-2 26 40-4 40" fill="none" stroke="#EAF6EF" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

export default function Builder({ onAdd }) {
  const drinks = MENU.filter(m => m.cat !== "Bites");
  const [d, setD] = useState(drinks[0]);
  const [size, setSize] = useState("Regular");
  const [milk, setMilk] = useState("Whole milk");
  const price = d.price + SIZES[size][1] + MILKS[milk];
  const pick = (n, title, node) => <div className="step"><span className="n">{n}</span><div><h3>{title}</h3>{node}</div></div>;
  return (
    <div className="bgrid">
      <div className="preview">
        <div className="stage"><Cup color={d.color} fill={SIZES[size][0]} /></div>
        <h3>{d.name}</h3>
        <p>{size} · {milk}</p>
        <div className="tot">{inr(price)}</div>
        <button className="btn" onClick={() => onAdd({ id: `${d.id}-${size}-${milk}`, name: `${d.name} (${size}, ${milk})`, price })}>Add to order</button>
      </div>
      <div className="steps">
        {pick(1, "Choose your drink", <div className="chips">{drinks.map(x => <button key={x.id} className="chip" aria-pressed={x.id === d.id} onClick={() => setD(x)}>{x.name}</button>)}</div>)}
        {pick(2, "Pick a size", <div className="chips">{Object.entries(SIZES).map(([s, v]) => <button key={s} className="chip" aria-pressed={s === size} onClick={() => setSize(s)}>{s}{v[1] > 0 && <small>+{inr(v[1])}</small>}</button>)}</div>)}
        {pick(3, "Select your milk", <div className="chips">{Object.entries(MILKS).map(([m, v]) => <button key={m} className="chip" aria-pressed={m === milk} onClick={() => setMilk(m)}>{m}{v > 0 && <small>+{inr(v)}</small>}</button>)}</div>)}
      </div>
    </div>
  );
}
