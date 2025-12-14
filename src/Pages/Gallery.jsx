import { useState } from "react";

const images = [
  {
    id: 1,
    url: "/src/assets/image/patenga-chittagong.jpg",
    title: "পতেঙ্গা সমুদ্র সৈকত",
    category: "Beach",
  },
  {
    id: 2,
    url: "/src/assets/image/Saint_Martins_Island_with_boats_in_foreground.jpg",
    title: "সেন্ট মার্টিনস",
    category: "Beach",
  },
  {
    id: 3,
    url: "/src/assets/image/Sunset_at_the_Inani_sea_beach_Cox's_bazar.jpg",
    title: "ইনানী বিচ - সূর্যাস্ত",
    category: "Beach",
  },
  {
    id: 4,
    url: "/src/assets/image/coxbazar-1024x535.webp",
    title: "কক্সবাজার",
    category: "Beach",
  },
  {
    id: 5,
    url: "/src/assets/image/258976_cox.jpg",
    title: "কক্স দৃশ্য",
    category: "Beach",
  },

  {
    id: 6,
    url: "/src/assets/image/Zero_Point_at_Zuflong.jpg",
    title: "জাফলং (Zero Point)",
    category: "Famous",
  },
  {
    id: 7,
    url: "/src/assets/image/Bisnakandi-6.jpg",
    title: "বিছানাকান্দি",
    category: "Mountain",
  },
  {
    id: 8,
    url: "/src/assets/image/Nijhum_Dwip.jpg",
    title: "নিজহুম দ্বীপ",
    category: "Beach",
  },
  {
    id: 9,
    url: "/src/assets/image/Kaptai_Lake_05.jpg",
    title: "কাপ্তাই লেক",
    category: "Mountain",
  },
  {
    id: 10,
    url: "/src/assets/image/Nilgiri-How-To-Go.jpg.webp",
    title: "নিলগিরি",
    category: "Mountain",
  },

  {
    id: 11,
    url: "/src/assets/image/Paharpur_Buddhist_Bihar.jpg",
    title: "পাহারপুর (সোমপুর মহাবিহার)",
    category: "Cultural",
  },
  {
    id: 12,
    url: "/src/assets/image/BD_Mahasthangarh1_without_people.jpg",
    title: "মহাস্থানগড়",
    category: "Cultural",
  },

  {
    id: 13,
    url: "/src/assets/image/Sundarban-Kotka-Sanctuary.jpg",
    title: "সুন্দরবন কটকা",
    category: "Famous",
  },
  {
    id: 14,
    url: "/src/assets/image/পানিতে_নিমজ্জিত_রাতারগুল_জলাবনের_গাছ.jpg",
    title: "রাতারগুল জলাবন",
    category: "Famous",
  },

  {
    id: 15,
    url: "/src/assets/image/ahsan-monjil.jpg",
    title: "আহসান মঞ্জিল",
    category: "City",
  },
  {
    id: 16,
    url: "/src/assets/image/national-parliament-house.jpg",
    title: "জাতীয় সংসদ ভবন",
    category: "City",
  },
  {
    id: 17,
    url: "/src/assets/image/national-memmorial-front.jpg",
    title: "জাতীয় স্মৃতিসৌধ",
    category: "City",
  },

  {
    id: 18,
    url: "/src/assets/image/im-inneren-des-palastes.jpg",
    title: "ইতিহাসিক স্থাপনা",
    category: "Cultural",
  },
  { id: 19, url: "/image/OIP.jpeg", title: "সাধারণ দৃশ্য", category: "Other" },

  {
    id: 20,
    url: "/src/assets/image/7-vKqQdd8tMTp8mYxVHg-mlTwhJEKG5S9Bkmz1QafZfUwfN6-1e8718kWyxO8Glx6TWVbHXaL_Uba66vjEUl0lxBJ6HUZaVAgnE3RwDMCHSsIMyfoOvzarROK7qUvdOCM-DrahsEIfUGyKY-CNj3rw.jpeg",
    title: "Random Landscape",
    category: "Other",
  },
];

const categories = [
  { key: "All", label: "সব" },
  { key: "Beach", label: "সমুদ্রতট" },
  { key: "Mountain", label: "পর্বত" },
  { key: "City", label: "শহর" },
  { key: "Cultural", label: "ঐতিহ্য / সংস্কৃতি" },
  { key: "Famous", label: "প্রসিদ্ধ স্থান" },
  { key: "Other", label: "অন্যান্য" },
];

export default function SimpleGallery() {
  const [category, setCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    category === "All"
      ? images
      : images.filter((img) => img.category === category);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-[#007c94] to-[#005a6d] text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-3">বাংলাদেশের দর্শনীয় স্থান</h1>
        <p className="text-cyan-100 text-xl">সব সুন্দর জায়গার ছবি এক জায়গায়</p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center flex-wrap gap-3 my-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            className={`px-6 py-2 rounded-full border transition
              ${category === cat.key
                ? "bg-[#007c94] text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* GALLERY */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="bg-white rounded-lg overflow-hidden shadow hover:scale-105 transition cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-3 font-semibold">{img.title}</div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white p-4 rounded max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-h-[70vh] rounded"
            />
            <p className="mt-3 text-center font-bold">{selectedImage.title}</p>
            <button
              className="mt-4 w-full bg-gray-800 text-white py-2 rounded"
              onClick={() => setSelectedImage(null)}
            >
              বন্ধ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
