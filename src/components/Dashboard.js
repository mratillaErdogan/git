import React, { useState, useEffect } from "react";
import axios from "axios";
import CariSearch from "./CariSearch";
import CariTable from "./CariTable";
import LoadingError from "./LoadingError";
import FirmaInfo from "./FirmaInfo";
import { container, header } from "../styles/dashboard";

export default function Dashboard({ user, firmaListesi }) {
  const [firmaNo] = useState(
    firmaListesi.find((f) => f.ad === user.company)?.no || ""
  );
  const [arama, setArama] = useState("");
  const [cariler, setCariler] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cariGetir = async () => {
  if (!firmaNo) return;

  setLoading(true);
  setError("");

  try {
    let url = `https://localhost:7212/api/cari/${firmaNo}`;
    if (arama.trim()) {
      url += `?q=${encodeURIComponent(arama)}`;
    }

    console.log("API URL:", url); // 👈 DEBUG

    const response = await axios.get(url);
    setCariler(response.data);
  } catch (err) {
    console.error(err);
    setError("API çağrısı başarısız");
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    cariGetir();
  }, []);

  return (
    <div style={container}>
      <h2 style={header}>Cari Listesi</h2>
      <FirmaInfo company={user.company} />
      <CariSearch
        arama={arama}
        onChange={(e) => setArama(e.target.value)}
        onClick={cariGetir}
      />
      <LoadingError loading={loading} error={error} />
      <CariTable cariler={cariler} />
    </div>
  );
}
