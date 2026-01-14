import React from "react";
import { loadingText, errorText } from "../styles/common";

export default function LoadingError({ loading, error }) {
  return (
    <>
      {loading && <p style={loadingText}>Yükleniyor...</p>}
      {error && <p style={errorText}>{error}</p>}
    </>
  );
}
