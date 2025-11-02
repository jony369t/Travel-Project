import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaHeart, FaShare, FaCamera, FaQuoteLeft, FaUser, FaClock } from 'react-icons/fa';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoAirplaneSharp } from 'react-icons/io5';
import { BiSolidMap } from 'react-icons/bi';

const TourStory = () => {
  const [activeFilter, setActiveFilter] = useState('সব');
  const [likedStories, setLikedStories] = useState([]);

  const filters = ['সব', 'সমুদ্র সৈকত', 'পাহাড়', 'ঐতিহাসিক', 'অ্যাডভেঞ্চার'];

  const stories = [
    {
      id: 1,
      title: "কক্সবাজারের অপরূপ সূর্যাস্ত",
      author: "সারা আক্তার",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      date: "১৫ অক্টোবর, ২০২৪",
      location: "কক্সবাজার",
      category: "সমুদ্র সৈকত",
      image: "https://i.ibb.co.com/d0F3RKNM/coxbazar.jpg",
      excerpt: "পৃথিবীর দীর্ঘতম সমুদ্র সৈকতে অপরূপ সূর্যাস্তের মুহূর্তগুলো ছিল অবিশ্বাস্য সুন্দর। প্রকৃতির এই অপার সৌন্দর্য আমাকে মুগ্ধ করেছে।",
      duration: "৩ দিন",
      likes: 234,
      views: 1240
    },
    {
      id: 2,
      title: "বান্দরবানের পাহাড়ি পথে",
      author: "রাফি হোসেন",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      date: "১০ অক্টোবর, ২০২৪",
      location: "বান্দরবান",
      category: "পাহাড়",
      image: "https://i.ibb.co.com/HpRM3Lkk/bandarban.jpg",
      excerpt: "নীলগিরি থেকে মেঘের সাথে খেলা, নীলাচলের অপরূপ দৃশ্য এবং পাহাড়ি জনগোষ্ঠীর সাথে সময় কাটানো ছিল অসাধারণ অভিজ্ঞতা।",
      duration: "৪ দিন",
      likes: 189,
      views: 980
    },
    {
      id: 3,
      title: "সুন্দরবনের রহস্যময় সৌন্দর্য",
      author: "নাজমা বেগম",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      date: "৫ অক্টোবর, ২০২৪",
      location: "সুন্দরবন",
      category: "অ্যাডভেঞ্চার",
      image: "https://i.ibb.co.com/d0pDP1L7/sundorban.jpg",
      excerpt: "পৃথিবীর বৃহত্তম ম্যানগ্রোভ ফরেস্টে নৌকা ভ্রমণ এবং রয়েল বেঙ্গল টাইগারের খোঁজে থাকা ছিল রোমাঞ্চকর।",
      duration: "২ দিন",
      likes: 312,
      views: 1560
    },
    {
      id: 4,
      title: "সিলেটের চা বাগান ভ্রমণ",
      author: "তানভীর আহমেদ",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      date: "১ অক্টোবর, ২০২৪",
      location: "সিলেট",
      category: "পাহাড়",
      image: "https://i.ibb.co.com/DDQBpVrd/syllhet.jpg",
      excerpt: "সবুজে ঘেরা চা বাগান, জাফলং এর স্বচ্ছ পানি এবং রাতারগুলের প্রাকৃতিক সৌন্দর্য ছিল মনমুগ্ধকর।",
      duration: "৩ দিন",
      likes: 267,
      views: 1120
    },
    {
      id: 5,
      title: "পুরাতন ঢাকার ঐতিহ্য",
      author: "মাহমুদা খাতুন",
      authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      date: "২৮ সেপ্টেম্বর, ২০২৪",
      location: "ঢাকা",
      category: "ঐতিহাসিক",
      image: "https://i.ibb.co.com/CKb9Cm1Q/dhaka.jpg",
      excerpt: "লালবাগ কেল্লা, আহসান মঞ্জিল এবং পুরাতন ঢাকার ঐতিহ্যবাহী খাবারের স্বাদ নেওয়া ছিল অনন্য।",
      duration: "১ দিন",
      likes: 145,
      views: 750
    },
    {
      id: 6,
      title: "সেন্ট মার্টিনের নীল জল",
      author: "রিয়াদ করিম",
      authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      date: "২৫ সেপ্টেম্বর, ২০২৪",
      location: "সেন্ট মার্টিন",
      category: "সমুদ্র সৈকত",
      image: "https://i.ibb.co.com/yFMTvqPz/saintmartin-Bluewater.jpg",
      excerpt: "বাংলাদেশের একমাত্র প্রবাল দ্বীপে স্ফটিক স্বচ্ছ পানি এবং রাতের তারাভরা আকাশ ছিল স্বর্গীয়।",
      duration: "২ দিন",
      likes: 398,
      views: 2100
    }
  ];

  const toggleLike = (storyId) => {
    if (likedStories.includes(storyId)) {
      setLikedStories(likedStories.filter(id => id !== storyId));
    } else {
      setLikedStories([...likedStories, storyId]);
    }
  };

  const filteredStories = activeFilter === 'সব' 
    ? stories 
    : stories.filter(story => story.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#00A4BB] text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <IoAirplaneSharp className="text-9xl rotate-45" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-10">
          <BiSolidMap className="text-9xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="bg-white/20 text-white text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full inline-flex items-center gap-2">
                <MdOutlineTravelExplore className="text-lg" />
                ভ্রমণ কাহিনী
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ভ্রমণকারীদের অভিজ্ঞতা
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              বাংলাদেশের সুন্দর সব গন্তব্যের বাস্তব অভিজ্ঞতা এবং ভ্রমণ কাহিনী পড়ুন
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#00A4BB] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 hover:border-[#00A4BB] transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00A4BB] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {story.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => toggleLike(story.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
                      likedStories.includes(story.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/90 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <FaHeart className="text-lg" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300">
                    <FaShare className="text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Location & Date */}
                <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-[#00A4BB]" />
                    <span>{story.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-[#00A4BB]" />
                    <span>{story.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#00A4BB] transition-colors duration-300">
                  {story.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {story.excerpt}
                </p>

                {/* Author & Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <img
                      src={story.authorImage}
                      alt={story.author}
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{story.author}</p>
                      <p className="text-xs text-gray-500">{story.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <FaHeart className="text-red-500" />
                      <span>{story.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCamera className="text-[#00A4BB]" />
                      <span>{story.views}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="w-full mt-4 py-3 bg-gray-50 hover:bg-[#00A4BB] text-gray-700 hover:text-white rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg">
                  সম্পূর্ণ পড়ুন
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#00A4BB] text-white rounded-xl font-semibold hover:bg-[#008a9e] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            <span>আরও দেখুন</span>
            <MdOutlineTravelExplore className="text-xl" />
          </button>
        </div>
      </div>

      {/* Featured Quote Section */}
      <div className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#00A4BB]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaQuoteLeft className="text-3xl text-[#00A4BB]" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
            "ভ্রমণ আমাদের শেখায় অনেক কিছু, যা কোনো বই বা স্কুল শেখাতে পারে না।"
          </blockquote>
          <p className="text-gray-600 text-lg">
            প্রতিটি ভ্রমণ একটি নতুন অভিজ্ঞতা, নতুন শিক্ষা এবং নতুন স্মৃতি তৈরি করে
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#00A4BB] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <IoAirplaneSharp className="text-8xl rotate-45" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                আপনার ভ্রমণ কাহিনী শেয়ার করুন
              </h2>
              <p className="text-lg text-white/90 mb-8">
                আপনার অভিজ্ঞতা শেয়ার করে অন্যদের অনুপ্রাণিত করুন
              </p>
              <button className="bg-white text-[#00A4BB] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                <FaCamera className="text-xl" />
                <span>গল্প লিখুন</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourStory;