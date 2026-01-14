import React from "react";
import { infoBox } from "../styles/firma";

export default function FirmaInfo({ company }) {
  return <div style={infoBox}>Firma: {company}</div>;
}
