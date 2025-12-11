import React, { useEffect, useMemo, useState } from "react";

/* -----------------------------
   32 IMAGES (Bangladeshi দর্শনীয় স্থান — Unsplash dynamic sources)
   Note: these use source.unsplash.com search endpoints for easy preview.
   For production, replace with permanent URLs from Unsplash/Pexels or local assets.
   ----------------------------- */
const IMAGES = [
  { id: 1, url: "/image/patenga-chittagong.jpg", title: "পতেঙ্গা সমুদ্র সৈকত", category: "Beach" },
  { id: 2, url: "/image/Saint_Martins_Island_with_boats_in_foreground.jpg", title: "সেন্ট মার্টিনস", category: "Beach" },
  { id: 3, url: "/image/Sunset_at_the_Inani_sea_beach_Cox's_bazar.jpg", title: "ইনানী বিচ - সূর্যাস্ত", category: "Beach" },
  { id: 4, url: "/image/coxbazar-1024x535.webp", title: "কক্সবাজার", category: "Beach" },
  { id: 5, url: "/image/258976_cox.jpg", title: "কক্স দৃশ্য", category: "Beach" },

  { id: 6, url: "/image/Zero_Point_at_Zuflong.jpg", title: "জাফলং (Zero Point)", category: "Famous Landmark" },
  { id: 7, url: "/image/Bisnakandi-6.jpg", title: "বিছানাকান্দি", category: "Mountain" },
  { id: 8, url: "/image/Nijhum_Dwip.jpg", title: "নিজহুম দ্বীপ", category: "Beach" },
  { id: 9, url: "/image/Kaptai_Lake_05.jpg", title: "কাপ্তাই লেক", category: "Mountain" },
  { id: 10, url: "/image/Nilgiri-How-To-Go.jpg.webp", title: "নিলগিরি", category: "Mountain" },

  { id: 11, url: "/image/Paharpur_Buddhist_Bihar.jpg", title: "পাহারপুর (সোমপুর মহাবিহার)", category: "Cultural Streets" },
  { id: 12, url: "/image/BD_Mahasthangarh1_without_people.jpg", title: "মহাস্থানগড়", category: "Cultural Streets" },

  { id: 13, url: "/image/Sundarban-Kotka-Sanctuary.jpg", title: "সুন্দরবন কটকা", category: "Famous Landmark" },
  { id: 14, url: "/image/পানিতে_নিমজ্জিত_রাতারগুল_জলাবনের_গাছ.jpg", title: "রাতারগুল জলাবন", category: "Famous Landmark" },

  { id: 15, url: "/image/ahsan-monjil.jpg", title: "আহসান মঞ্জিল", category: "City" },
  { id: 16, url: "/image/national-parliament-house.jpg", title: "জাতীয় সংসদ ভবন", category: "City" },
  { id: 17, url: "/image/national-memmorial-front.jpg", title: "জাতীয় স্মৃতিসৌধ", category: "City" },

  { id: 18, url: "/image/im-inneren-des-palastes.jpg", title: "ইতিহাসিক স্থাপনা", category: "Cultural Streets" },

  { id: 19, url: "/image/OIP.jpeg", title: "সাধারণ দৃশ্য", category: "Other" },

  {
    id: 20,
    url: "/image/7-vKqQdd8tMTp8mYxVHg-mlTwhJEKG5S9Bkmz1QafZfUwfN6-1e8718kWyxO8Glx6TWVbHXaL_Uba66vjEUl0lxBJ6HUZaVAgnE3RwDMCHSsIMyfoOvzarROK7qUvdOCM-DrahsEIfUGyKY-CNj3rw.jpeg",
    title: "Random Landscape",
    category: "Other",
  },
];

/* বাংলা লেবল (অপশনাল) */
const CATEGORY_BN = {
  All: "সব",
  City: "শহর",
  Mountain: "পর্বত",
  Beach: "সমুদ্রতট",
  "Cultural Streets": "ঐতিহ্য/সংস্কৃতি",
  "Famous Landmark": "প্রসিদ্ধ স্থান",
  Other: "অন্যান্য",
};

/* inline styles (same as আপনার কোড থেকে) */
const styles = {
  page: {
    fontFamily: "'Noto Sans Bengali', Arial, sans-serif",
    padding: 0,
    maxWidth: "1200px",
    margin: "0 auto",
    color: "#111",
  },
  /* Hero/banner (like screenshot) */
  hero: {
    background: "linear-gradient(90deg, #0b6b73 0%, #0f9aa6 100%)",
    color: "#fff",
    padding: "54px 20px",
    textAlign: "center",
    borderRadius: "0 0 12px 12px",
    marginBottom: 28,
  },
  heroTitle: {
    fontSize: "36px",
    fontWeight: 800,
    margin: 0,
    lineHeight: 1.05,
    letterSpacing: "0.5px",
  },
  heroSubtitle: {
    fontSize: "16px",
    marginTop: 10,
    opacity: 0.92,
  },

  /* gallery header area under hero */
  contentWrap: {
    padding: "22px",
    background: "#f6fffd", // gentle off-white for content area
    borderRadius: 12,
    marginBottom: 28,
  },

  title: { fontSize: 26, marginBottom: 6 },
  subtitle: { fontSize: 14, marginBottom: 18, color: "#666" },

  /* centered category bar */
  catBar: {
    marginBottom: 18,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  },

  catBtn: {
    padding: "8px 14px",
    marginRight: 10,
    marginBottom: 10,
    border: "1px solid #ccc",
    background: "#fff",
    borderRadius: 30,
    cursor: "pointer",
    fontSize: 14,
    transition: "0.2s",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  catBtnActive: {
    background: "rgb(2,98,119)",
    color: "#fff",
    borderColor: "rgb(2,98,119)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: 18,
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: 8,
    overflow: "hidden",
    background: "#fff",
    transition: "transform 180ms ease, box-shadow 180ms ease",
  },
  cardHover: {
    transform: "scale(1.03)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
  },
  img: { width: "100%", height: 220, objectFit: "cover", display: "block" },
  textBox: { padding: 10, fontSize: 14 },
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  lightboxInner: {
    maxWidth: "90%",
    maxHeight: "90%",
    padding: 12,
    borderRadius: 8,
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  lightboxImg: {
    maxWidth: "100%",
    maxHeight: "80vh",
    objectFit: "contain",
    borderRadius: 8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  },
  closeBtn: {
    marginTop: 12,
    padding: "6px 12px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    background: "#fff",
  },
};

export default function SimpleGalleryBn() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const categories = useMemo(
    () => ["All", ...new Set(IMAGES.map((i) => i.category))],
    []
  );

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    return category === "All"
      ? IMAGES
      : IMAGES.filter((img) => img.category === category);
  }, [category]);

  function openImage(img) {
    setSelected(img);
  }
  function closeImage() {
    setSelected(null);
  }

  return (
    <div style={styles.page}>
      {/* HERO / BANNER */}
      <div className="bg-gradient-to-r from-[#007c94] to-[#005a6d] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold mb-4">বাংলাদেশের ভ্রমণ প্যাকেজ</h1>
                    <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                        বাংলাদেশের সবচেয়ে সুন্দর গন্তব্যে ভ্রমণ করুন আমাদের বাছাইকৃত প্যাকেজের সাথে
                    </p>
                </div>
            </div>

      {/* CONTENT WRAP (holds gallery header + filters + grid) */}
      <div style={styles.contentWrap}>
        {/* Centered Filter Buttons */}
        <div style={styles.catBar}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                setCategory === category.id
                                    ? 'bg-[#007c94] cursor-pointer text-white shadow-lg transform scale-105'
                                    : 'bg-white text-gray-700 cursor-pointer hover:bg-gray-100 shadow-md'
                            }`}
              aria-pressed={c === category}
            >
              {CATEGORY_BN[c] || c}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div style={styles.grid}>
          {filtered.map((img) => {
            const isHover = hoveredId === img.id;
            return (
              <div
                key={img.id}
                style={
                  isHover ? { ...styles.card, ...styles.cardHover } : styles.card
                }
                onMouseEnter={() => setHoveredId(img.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <button
                  onClick={() => openImage(img)}
                  style={{
                    border: "none",
                    padding: 0,
                    display: "block",
                    background: "transparent",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  aria-label={`বড় করে দেখুন: ${img.title}`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    style={styles.img}
                    loading="lazy"
                    draggable={false}
                  />
                  <div style={styles.textBox}>
                    <strong>{img.title}</strong>
                    <div style={{ marginTop: 6, color: "#666" }}>
                      {CATEGORY_BN[img.category] || img.category}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 18, color: "#555" }}>মোট ছবি: {filtered.length}</div>
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          style={styles.overlay}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeImage();
          }}
        >
          <div style={styles.lightboxInner}>
            <img
              src={selected.url}
              alt={selected.title}
              style={styles.lightboxImg}
            />
            <div style={{ marginTop: 8, color: "#fff", textAlign: "center" }}>
              <div style={{ fontWeight: 600 }}>{selected.title}</div>
              <div style={{ marginTop: 6 }}>
                {CATEGORY_BN[selected.category] || selected.category}
              </div>
            </div>
            <button
              style={styles.closeBtn}
              onClick={closeImage}
              aria-label="বন্ধ করুন"
            >
              বন্ধ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
