import { useState } from "react";
import { inr } from "../data";

export default function Cart({ open, items, setItems, onClose }) {
  const [done, setDone] = useState(false);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const change = (id, d) => setItems(items.map(i => i.id === id ? { ...i, qty: i.qty + d } : i).filter(i => i.qty > 0));
  return (
    <>
      {open && <div className="scrim" onClick={onClose} />}
      <aside className={"drawer" + (open ? " open" : "")} aria-label="Your order" aria-hidden={!open}>
        <div className="row"><h3>Your order</h3><button className="add" onClick={onClose}>Close</button></div>
        <div className="lines">
          {done ? <p className="ok">Order placed. We’ll call your name in about 10 minutes.</p>
            : items.length === 0 ? <p className="empty">Nothing here yet. Add a drink from the menu.</p>
            : items.map(i => (
              <div className="line" key={i.id}>
                <div>{i.name}<br /><span className="price">{inr(i.price * i.qty)}</span></div>
                <div className="qty"><button aria-label="Remove one" onClick={() => change(i.id, -1)}>−</button> {i.qty} <button aria-label="Add one" onClick={() => change(i.id, 1)}>+</button></div>
              </div>))}
        </div>
        <div className="row"><strong>Total</strong><strong>{inr(total)}</strong></div>
        <button className="btn" disabled={!items.length} onClick={() => { setDone(true); setItems([]); setTimeout(() => setDone(false), 4000); }}>Place order</button>
      </aside>
    </>
  );
}
