import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";

function App() {
  const [user, setUser] = useState(null);

  const firmaListesi = [
    { no: 10, ad: "LOGO EĞİTİM" },
    { no: 31, ad: "HİTİT MADEN" },
    { no: 61, ad: "BAKIRSAN GRUP" }
  ];

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Layout onLogout={() => setUser(null)}>
  {!user ? (
    <LoginForm onLogin={handleLogin} firmaListesi={firmaListesi} />
  ) : (
    <Dashboard user={user} firmaListesi={firmaListesi} />
  )}
</Layout>
  );
}

export default App;
