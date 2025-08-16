"use client";
export default function ThemePanel() { ... }

  const [open, setOpen] = useState(false);

  const setBrand = (v: "aqua" | "violet" | "gold") =>
    document.documentElement.setAttribute("data-brand", v);
  const setAccent = (v: "yellow" | "pink" | "lime") =>
    document.documentElement.setAttribute("data-accent", v);
  const setTheme = (v: "dark" | "light") =>
    document.documentElement.setAttribute("data-theme", v);

  return (
    <>
      <button className="fab" onClick={() => setOpen((s) => !s)}>Theme</button>

      {open && (
        <div className="panel">
          <div className="panel-row">
            <strong>Theme</strong>
            <div className="row-items">
              <button className="chip" onClick={() => setTheme("dark")}>Dark</button>
              <button className="chip" onClick={() => setTheme("light")}>Light</button>
            </div>
          </div>

          <div className="panel-row">
            <strong>Brand</strong>
            <div className="row-items">
              <button className="chip" onClick={() => setBrand("aqua")}>Aqua</button>
              <button className="chip" onClick={() => setBrand("violet")}>Violet</button>
              <button className="chip" onClick={() => setBrand("gold")}>Gold</button>
            </div>
          </div>

          <div className="panel-row">
            <strong>Accent</strong>
            <div className="row-items">
              <button className="chip" onClick={() => setAccent("yellow")}>Yellow</button>
              <button className="chip" onClick={() => setAccent("pink")}>Pink</button>
              <button className="chip" onClick={() => setAccent("lime")}>Lime</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
