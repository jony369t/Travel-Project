import React from "react";

const Register = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>রেজিস্টার</h2>

      <input style={styles.input} type="text" placeholder="নাম" />
      <input style={styles.input} type="email" placeholder="ইমেইল" />
      <input style={styles.input} type="password" placeholder="পাসওয়ার্ড" />

      <button style={styles.button}>রেজিস্টার করুন</button>

      <p style={styles.text}>
        একাউন্ট আছে? <a href="/login" style={styles.link}>লগইন করুন</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: "320px",
    margin: "60px auto",
    padding: "25px",
    borderRadius: "12px",
    background: "#ffffff",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Noto Sans Bengali, sans-serif"
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    background: "#00a4bb",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  text: {
    marginTop: "12px",
    fontSize: "14px"
  },
  link: {
    color: "#007bff",
    textDecoration: "none"
  }
};

export default Register;
