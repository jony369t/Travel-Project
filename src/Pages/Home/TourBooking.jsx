import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaPhone, FaEnvelope, FaUser, FaCreditCard, FaCheckCircle, FaStar } from 'react-icons/fa';
import { MdOutlineTravelExplore, MdDateRange } from 'react-icons/md';
import { IoAirplaneSharp } from 'react-icons/io5';
import { BiSolidOffer } from 'react-icons/bi';

const TourBooking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    adults: 1,
    children: 0,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const destinations = [
    { name: 'কক্সবাজার', price: '১৫,০০০', duration: '৩ দিন ২ রাত', rating: 4.8 },
    { name: 'সুন্দরবন', price: '১২,০০০', duration: '২ দিন ১ রাত', rating: 4.6 },
    { name: 'সিলেট', price: '১৮,০০০', duration: '৪ দিন ৩ রাত', rating: 4.9 },
    { name: 'বান্দরবান', price: '২০,০০০', duration: '৩ দিন ২ রাত', rating: 4.7 },
    { name: 'সেন্ট মার্টিন', price: '২৫,০০০', duration: '৪ দিন ৩ রাত', rating: 4.9 },
    { name: 'রাঙামাটি', price: '১৬,০০০', duration: '৩ দিন ২ রাত', rating: 4.5 }
  ];

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#00A4BB] text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <IoAirplaneSharp className="text-9xl rotate-45" />
        </div>
        <div className="absolute bottom-0 left-0 opacity-10">
          <MdOutlineTravelExplore className="text-9xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              আপনার স্বপ্নের ভ্রমণ বুক করুন
            </h1>
            <p className="text-lg text-white/90 mb-8">
              সহজ ৩টি ধাপে সম্পন্ন করুন আপনার ট্যুর বুকিং
            </p>

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-white' : 'text-white/50'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-white text-[#00A4BB]' : 'bg-white/20'}`}>
                  1
                </div>
                <span className="hidden md:inline font-semibold">গন্তব্য নির্বাচন</span>
              </div>
              <div className="w-12 h-1 bg-white/30"></div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-white' : 'text-white/50'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-white text-[#00A4BB]' : 'bg-white/20'}`}>
                  2
                </div>
                <span className="hidden md:inline font-semibold">তথ্য প্রদান</span>
              </div>
              <div className="w-12 h-1 bg-white/30"></div>
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-white' : 'text-white/50'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-white text-[#00A4BB]' : 'bg-white/20'}`}>
                  3
                </div>
                <span className="hidden md:inline font-semibold">পেমেন্ট</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Side - Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
              
              {/* Step 1: Destination Selection */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[#00A4BB]" />
                    গন্তব্য ও তারিখ নির্বাচন করুন
                  </h2>

                  {/* Destination Cards */}
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-3">গন্তব্য নির্বাচন করুন</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {destinations.map((dest, index) => (
                        <div
                          key={index}
                          onClick={() => setFormData({...formData, destination: dest.name})}
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                            formData.destination === dest.name 
                              ? 'border-[#00A4BB] bg-[#00A4BB]/5' 
                              : 'border-gray-200 hover:border-[#00A4BB]'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-800">{dest.name}</h3>
                            <div className="flex items-center gap-1 text-yellow-500">
                              <FaStar className="text-sm" />
                              <span className="text-sm font-semibold text-gray-700">{dest.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{dest.duration}</p>
                          <p className="text-xl font-bold text-[#00A4BB]">৳{dest.price}</p>
                          <p className="text-xs text-gray-500">প্রতি ব্যক্তি</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FaCalendarAlt className="inline mr-2 text-[#00A4BB]" />
                        যাত্রার তারিখ
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A4BB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FaCalendarAlt className="inline mr-2 text-[#00A4BB]" />
                        ফেরার তারিখ
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A4BB] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Travelers */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FaUsers className="inline mr-2 text-[#00A4BB]" />
                        প্রাপ্তবয়স্ক
                      </label>
                      <input
                        type="number"
                        name="adults"
                        min="1"
                        value={formData.adults}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A4BB] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FaUsers className="inline mr-2 text-[#00A4BB]" />
                        শিশু
                      </label>
                      <input
                        type="number"
                        name="children"
                        min="0"
                        value={formData.children}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A4BB] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <FaUser className="text-[#00A4BB]" />
                    ব্যক্তিগত তথ্য প্রদান করুন
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FaUser className="inline mr-2 text-[#00A4BB]" />
                        পূর্ণ নাম
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="আপনার পূর্ণ নাম লিখুন"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A4BB] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FaEnvelope className="inline mr-2 text-[#00A4BB]" />
                        ইমেইল
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A4BB] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        <FaPhone className="inline mr-2 text-[#00A4BB]" />
                        ফোন নম্বর
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="০১৭XX-XXXXXX"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A4BB] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        বিশেষ অনুরোধ (ঐচ্ছিক)
                      </label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="আপনার কোনো বিশেষ চাহিদা থাকলে এখানে লিখুন..."
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#00A4BB] focus:outline-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div>
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaCheckCircle className="text-5xl text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      বুকিং সফল হয়েছে!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      আপনার বুকিং নিশ্চিত হয়েছে। শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।
                    </p>
                    <div className="bg-[#00A4BB]/10 border-2 border-[#00A4BB]/30 rounded-xl p-6 max-w-md mx-auto">
                      <p className="text-sm text-gray-600 mb-2">বুকিং আইডি</p>
                      <p className="text-2xl font-bold text-[#00A4BB]">#TH{Math.floor(Math.random() * 100000)}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                {step > 1 && step < 3 && (
                  <button
                    onClick={handlePrevStep}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-[#00A4BB] hover:text-[#00A4BB] transition-all duration-300"
                  >
                    পূর্ববর্তী
                  </button>
                )}
                {step < 3 && (
                  <button
                    onClick={handleNextStep}
                    className="ml-auto px-8 py-3 bg-[#00A4BB] text-white rounded-xl font-semibold hover:bg-[#008a9e] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {step === 2 ? 'পেমেন্ট করুন' : 'পরবর্তী'}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <BiSolidOffer className="text-[#00A4BB]" />
                বুকিং সারাংশ
              </h3>

              <div className="space-y-4 mb-6">
                {formData.destination && (
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">গন্তব্য:</span>
                    <span className="font-semibold text-gray-800">{formData.destination}</span>
                  </div>
                )}
                {formData.startDate && (
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">যাত্রা:</span>
                    <span className="font-semibold text-gray-800">{formData.startDate}</span>
                  </div>
                )}
                {formData.endDate && (
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">ফেরত:</span>
                    <span className="font-semibold text-gray-800">{formData.endDate}</span>
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <span className="text-gray-600">ভ্রমণকারী:</span>
                  <span className="font-semibold text-gray-800">
                    {formData.adults} প্রাপ্তবয়স্ক, {formData.children} শিশু
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">মূল্য:</span>
                  <span className="font-semibold text-gray-800">৳১৫,০০০</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">ছাড় (১০%):</span>
                  <span className="font-semibold text-green-600">-৳১,৫০০</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold pt-2 border-t border-gray-200">
                  <span className="text-gray-800">মোট:</span>
                  <span className="text-[#00A4BB]">৳১৩,৫০০</span>
                </div>
              </div>

              <div className="bg-[#00A4BB]/10 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <FaCheckCircle className="text-[#00A4BB] mt-1 flex-shrink-0" />
                  <span>বিনামূল্যে বাতিলকরণ যাত্রার ৪৮ ঘণ্টা আগে পর্যন্ত</span>
                </p>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#00A4BB]" />
                  ২৪/৭ কাস্টমার সাপোর্ট
                </p>
                <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#00A4BB]" />
                  সর্বোত্তম মূল্য গ্যারান্টি
                </p>
                <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#00A4BB]" />
                  নিরাপদ পেমেন্ট
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBooking;