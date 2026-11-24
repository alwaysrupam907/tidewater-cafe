import { useState, useMemo } from "react";
import { MENU, CATS, inr } from "./data";
import Hero from "./components/Hero";
import Builder from "./components/Builder";
import Gallery from "./components/Gallery";
import Cart from "./components/Cart";
import Reserve from "./components/Reserve";
import { Art } from "./components/Drawing";

export default function App() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const add = it => { setItems(p => p.find(x => x.id === it.id) ? p.map(x => x.id === it.id ? { ...x, qty: x.qty + 1 } : x) : [...p, { ...it, qty: 1 }]); setOpen(true); };
  const shown = useMemo(() => MENU.filter(m => (cat === "All" || m.cat === cat) && m.name.toLowerCase().includes(q.toLowerCase())), [cat, q]);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return (
    <>
      <header className="nav"><div className="wrap">
        <span className="logo">Tidewater</span>
        <nav><a href="#build">Build a cup</a><a href="#menu">Menu</a><a href="#reserve">Reserve</a></nav>
        <button className="cartbtn" onClick={() => setOpen(true)}>Order ({count})</button>
      </div></header>
      <Hero />
      <section className="block" id="build"><div className="wrap">
        <h2>Build your cup</h2>
        <p className="sub">Choose a drink, size and milk. The cup and price update as you go.</p>
        <Builder onAdd={add} />
      </div></section>
      <section className="block" id="menu" style={{ paddingTop: 0 }}><div className="wrap">
        <h2>The menu</h2>
        <p className="sub">Everything is made to order. Tap Add to send it to your order.</p>
        <div className="tools">
          <div className="chips">{CATS.map(c => <button key={c} className="chip" aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>)}</div>
          <input type="search" placeholder="Search the menu" aria-label="Search the menu" value={q} onChange={e => setQ(e.target.value)} />
        </div>
        {shown.length === 0 ? <p className="empty">No items match “{q}”. Try a different word.</p> :
          <div className="grid">{shown.map(m => (
            <article className="item" key={m.id}>
              <Art item={m} /><h3>{m.name}</h3><p>{m.desc}</p>
              <div className="row"><span className="price">{inr(m.price)}</span><button className="add" onClick={() => add({ id: String(m.id), name: m.name, price: m.price })}>Add</button></div>
            </article>))}</div>}
      </div></section>
      <section className="block" style={{ paddingTop: 0 }}><div className="wrap"><Gallery /></div></section>
      <section className="block" style={{ paddingTop: 0 }}><div className="wrap"><Reserve /></div></section>
      <footer><div className="wrap">Tidewater Coffee House is a sample project built with React. Open daily, 7 am to 10 pm.</div></footer>
      <Cart open={open} items={items} setItems={setItems} onClose={() => setOpen(false)} />
    </>
  );
}
