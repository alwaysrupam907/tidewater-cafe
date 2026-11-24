import { useState } from "react";

export default function Reserve() {
  const [f, setF] = useState({ name: "", date: "", guests: "2" });
  const [err, setErr] = useState("");
  const [ok, setOk] = useState(false);
  const submit = e => {
    e.preventDefault();
    if (f.name.trim().length < 2) return setErr("Enter your name.");
    if (!f.date) return setErr("Pick a date.");
    setErr(""); setOk(true);
  };
  return (
    <div className="res" id="reserve">
      <div><h2>Book a table</h2><p style={{ color: "var(--mint)" }}>Window seats fill up on weekends. Reserve ahead and we’ll hold your table for 15 minutes.</p></div>
      {ok ? <p className="ok">Thanks, {f.name}. Table for {f.guests} on {f.date} is booked.</p> : (
        <form className="fields" onSubmit={submit} noValidate>
          <input placeholder="Your name" aria-label="Your name" value={f.name} onChange={e => setF({ ...f, name: e.target.value })} />
          <input type="date" aria-label="Date" value={f.date} onChange={e => setF({ ...f, date: e.target.value })} />
          <select aria-label="Guests" value={f.guests} onChange={e => setF({ ...f, guests: e.target.value })}>
            {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}
          </select>
          <div className="err" role="alert">{err}</div>
          <button className="btn">Reserve table</button>
        </form>)}
    </div>
  );
}
