import React from "react";
import { FiLogOut } from "react-icons/fi";
import {
  page,
  content,
  footer,
} from "../styles/layout";
import {
  headerWrapper,
  left,
  logo,
  center,
  right,
} from "../styles/header";
import Logo from "../assets/MD_YAZILIM.png"; 


export default function Layout({ children, onLogout }) {
  return (
    <div style={page}>
      {/* HEADER */}
      <header style={headerWrapper}>
        {/* SOL */}
        <div style={left}>
          <img
  src={Logo}
  alt="Mudbey Yazılım"
  style={logo}
/>

        </div>

        {/* ORTA */}
        <div style={center}>
          Mudbey Yazılım
        </div>

        {/* SAĞ */}
        <div style={right} onClick={onLogout} title="Çıkış Yap">
          <FiLogOut size={22} />
        </div>
      </header>

      {/* CONTENT */}
      <main style={content}>{children}</main>

      {/* FOOTER */}
      <footer style={footer}>
        © {new Date().getFullYear()} Mudbey Yazılım
      </footer>
    </div>
  );
}
