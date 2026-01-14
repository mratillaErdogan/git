import React from "react";
import { searchWrapper } from "../styles/cari";
import { input, button } from "../styles/common";

export default function CariSearch({ arama, onChange, onClick }) {
  return (
    <div style={searchWrapper}>
      <input
        type="text"
        placeholder="Cari kod / ünvan ara"
        value={arama}
        onChange={onChange}
        style={{ ...input, flex: 1 }}
      />
      <button onClick={onClick} style={button}>
        Getir
      </button>
    </div>
  );
}
