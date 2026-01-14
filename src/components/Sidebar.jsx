import React from "react";

export default function Sidebar({ setActive }) {
  return (
    <div style={styles.sidebar}>
      <div style={styles.item} onClick={() => setActive("cari")}>
        Cari
      </div>
      <div style={styles.item} onClick={() => setActive("rapor")}>
        Raporlar
      </div>
      <div style={styles.item} onClick={() => setActive("ayar")}>
        Ayarlar
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    background: "#020617",
    color: "#fff",
    padding: "16px",
  },
  item: {
    padding: "10px",
    cursor: "pointer",
  },
};
