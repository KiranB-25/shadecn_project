import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    'https://picsum.photos/800/600?random=1',
    'https://picsum.photos/800/600?random=2',
    'https://picsum.photos/800/600?random=3',
    'https://picsum.photos/800/600?random=4',
    'https://picsum.photos/800/600?random=5',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                  Creative
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Passionate about creating beautiful, functional web experiences that make a
                  difference.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  View My Work
                </button>
                <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  Get In Touch
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { label: 'Projects', value: '50+' },
                  { label: 'Years', value: '3+' },
                  { label: 'Clients', value: '25+' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="text-center p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20"
                  >
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-gray-300 text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="flex justify-center lg:justify-end">
              <div className="max-w-lg w-full">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {images.map((src, index) => (
                      <img
                        key={index}
                        src={src}
                        alt={`Portfolio image ${index + 1}`}
                        className="w-full h-96 object-cover flex-shrink-0"
                        loading="lazy"
                      />
                    ))}
                  </div>

                  {/* Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    &#8249;
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    &#8250;
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://picsum.photos/600/700?random=10"
                alt="About me"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Hello! I'm a passionate developer</h3>
                <p className="text-gray-700 leading-relaxed">
                  With over 3 years of experience in web development, I specialize in creating modern,
                  responsive websites and applications. My journey started with curiosity about how
                  websites work, and it has evolved into a passion for crafting digital experiences that
                  users love.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I believe in clean code, beautiful design, and the power of technology to solve
                  real-world problems. When I'm not coding, you can find me exploring new technologies,
                  contributing to open source projects, or enjoying a good cup of coffee.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Technical Skills</h4>
                <div className="space-y-3">
                  {[
                    { name: 'React & JavaScript', percent: 95 },
                    { name: 'CSS & Design', percent: 90 },
                    { name: 'Node.js & Backend', percent: 85 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-purple-600 font-semibold">{skill.percent}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  Let's Work Together
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;