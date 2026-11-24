/* Small vector illustrations that stand in for photos */
export function Drawing({ kind, color }) {
  const s = "#12403A";
  const d = {
    mug: <><g className="steam" stroke="#9BB0A8" strokeWidth="3" strokeLinecap="round" fill="none"><path d="M45 22c-6-8 6-12 0-20"/><path d="M62 22c-6-8 6-12 0-20"/></g><path d="M25 30h58l-6 50a10 10 0 0 1-10 8H41a10 10 0 0 1-10-8z" fill={color} stroke={s} strokeWidth="3"/><path d="M82 40c20-2 20 30-4 30" fill="none" stroke={s} strokeWidth="5" strokeLinecap="round"/></>,
    glass: <><path d="M30 14h50l-6 76H36z" fill="#E9EFEA" stroke={s} strokeWidth="3"/><path d="M33 40h44l-4 50H37z" fill={color}/><rect x="42" y="46" width="14" height="14" rx="3" fill="#fff" opacity=".6"/><rect x="58" y="62" width="14" height="14" rx="3" fill="#fff" opacity=".6"/><path d="M62 4l8 40" stroke="#F2B632" strokeWidth="5" strokeLinecap="round"/></>,
    pastry: <><path d="M12 62c4-30 24-44 48-44s44 14 48 44c-12-8-20-6-30 0-10-8-26-8-36 0-10-6-18-8-30 0z" fill={color} stroke={s} strokeWidth="3"/><path d="M42 24l8 34M60 20v38M78 24l-8 34" stroke={s} strokeWidth="2.5" opacity=".5"/></>,
    plate: <><ellipse cx="60" cy="62" rx="52" ry="22" fill="#fff" stroke={s} strokeWidth="3"/><rect x="26" y="34" width="68" height="26" rx="6" fill={color} stroke={s} strokeWidth="3"/><path d="M34 44c10-8 18 6 28-2s18 4 24-2" stroke="#2F7A4F" strokeWidth="6" fill="none" strokeLinecap="round"/></>,
    muffin: <><path d="M30 52h60l-8 38H38z" fill="#E3C79A" stroke={s} strokeWidth="3"/><path d="M24 54c-4-30 20-42 36-42s40 12 36 42z" fill={color} stroke={s} strokeWidth="3"/><circle cx="48" cy="34" r="4" fill="#fff" opacity=".6"/><circle cx="70" cy="40" r="4" fill="#fff" opacity=".6"/><circle cx="60" cy="24" r="4" fill="#fff" opacity=".6"/></>,
    beans: <><g fill="#4A2F22" stroke={s} strokeWidth="2.5"><ellipse cx="38" cy="40" rx="22" ry="30" transform="rotate(-25 38 40)"/><ellipse cx="80" cy="46" rx="22" ry="30" transform="rotate(20 80 46)"/><ellipse cx="58" cy="76" rx="22" ry="14" transform="rotate(-8 58 76)"/></g><path d="M30 18c10 14 14 36 8 50M88 24c-10 12-14 32-8 46" stroke="#C9A27A" strokeWidth="3" fill="none"/></>,
    plant: <><path d="M38 62h44l-6 28H44z" fill="#C98B4B" stroke={s} strokeWidth="3"/><g fill="#4F9A63" stroke={s} strokeWidth="2.5"><ellipse cx="60" cy="30" rx="10" ry="26"/><ellipse cx="38" cy="44" rx="10" ry="22" transform="rotate(-40 38 44)"/><ellipse cx="82" cy="44" rx="10" ry="22" transform="rotate(40 82 44)"/></g></>,
    cake: <><rect x="22" y="56" width="76" height="30" rx="6" fill="#F4D9E0" stroke={s} strokeWidth="3"/><rect x="30" y="34" width="60" height="24" rx="6" fill={color} stroke={s} strokeWidth="3"/><circle cx="60" cy="24" r="8" fill="#D6455D" stroke={s} strokeWidth="2.5"/><path d="M60 16c0-6 6-8 8-8" stroke={s} strokeWidth="2.5" fill="none"/></>,
    grinder: <><rect x="34" y="8" width="52" height="34" rx="8" fill="#E9EFEA" stroke={s} strokeWidth="3"/><rect x="26" y="40" width="68" height="44" rx="8" fill={color} stroke={s} strokeWidth="3"/><circle cx="60" cy="62" r="12" fill="#fff" stroke={s} strokeWidth="3"/><path d="M60 54v8l6 4" stroke={s} strokeWidth="3" strokeLinecap="round" fill="none"/></>,
  };
  return <svg viewBox="0 0 120 96" role="img" aria-hidden="true">{d[kind]}</svg>;
}
export function Art({ item }) {
  return <div className="art" style={{ background: `linear-gradient(135deg, ${item.color}66, ${item.color}22)` }}>
    {item.img ? <img src={item.img} alt={item.name || item.t} /> : <Drawing kind={item.art} color={item.color} />}
  </div>;
}
