"use client";

import React, { useState } from "react";

type Brand = "aqua" | "violet" | "gold";
type Accent = "yellow" | "pink" | "lime";
type Theme = "dark" | "light";

export default function ThemePanel() {
  const [open, setOpen] = useState(false);

  const setBrand = (v: Brand) =>
    document.documentElement.setAttribute("data-brand", v);
  const setAccent = (v: Accent) =>
    document.documentElement.setAttribute("data-accent", v);
  const setTheme = (v: Theme) =>
    document.documentElement.setAttribute("data-theme", v);

  return (
    <>
      <button className="fab" aria-expanded={open} onClick={() => setOpen(s => !s)}>
        Theme
      </button>

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
