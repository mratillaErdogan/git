import React from "react";
import {
  table,
  th,
  td,
  headRow,
  rowEven,
  rowOdd,
} from "../styles/table";
import { SiAmazoncognito } from "react-icons/si";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidBarcode } from "react-icons/bi";

export default function CariTable({ cariler }) {
  return (
    <table style={table}>
      <thead>
        <tr style={headRow}>
          <th style={th}>
            <SiAmazoncognito color="#000000ff" size={16} style={{ marginRight: 6 }} />
            Kod
          </th>
          <th style={th}>
            <IoPersonSharp color="#000000ff" size={16} style={{ marginRight: 6 }} />
            Ünvan</th>
          <th style={th}>
            <BiSolidBarcode color="#000000ff" size={16} style={{ marginRight: 6 }} />
            Özel Kod</th>
        </tr>
      </thead>
      <tbody>
        {cariler.map((cari, index) => (
          <tr
            key={cari.logicalRef}
            style={index % 2 === 0 ? rowEven : rowOdd}
          >
            <td style={td}>{cari.code}</td>
            <td style={td}>{cari.definition}</td>
            <td style={td}>{cari.specode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
