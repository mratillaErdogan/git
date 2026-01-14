import React, { useState } from "react";

export default function LoginForm({ onLogin, firmaListesi }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "demo" && password === "1234" && company) {
      onLogin({ username, company });
    } else {
      alert("Kullanıcı adı, şifre veya firma yanlış!");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Giriş Yap</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            style={styles.select}
          >
            <option value="">Firma Seçin</option>
            {firmaListesi.map((f) => (
              <option key={f.no} value={f.ad}>
                {f.ad}
              </option>
            ))}
          </select>
          <button type="submit" style={styles.button}>
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
    fontFamily: "Arial, sans-serif",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "30px",
    color: "#333",
    fontSize: "24px",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "0.3s",
  },
  select: {
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
    outline: "none",
    transition: "0.3s",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#6B73FF",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  },
};
