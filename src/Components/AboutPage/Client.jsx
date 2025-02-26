import React, { useState, useEffect, useRef } from "react";
import p1 from "../../assets/img1.jpeg";

const BoardMembers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const boardMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chairman",
      image: p1,
      qualification: "Ph.D. in Labor Economics",
      experience: "25+ years in Cooperative Sector"
    },
    {
      name: "Smt. Priya Sharma",
      position: "Vice Chairman",
      image: p1,
      qualification: "MBA in HR Management",
      experience: "20+ years in Labor Welfare"
    },
    {
      name: "Shri Amit Patel",
      position: "Secretary",
      image: p1,
      qualification: "Master's in Social Work",
      experience: "18+ years in Cooperative Management"
    },
    {
      name: "Dr. Meera Singh",
      position: "Joint Secretary",
      image: p1,
      qualification: "Ph.D. in Public Policy",
      experience: "15+ years in Policy Making"
    },
    {
      name: "Shri Suresh Verma",
      position: "Treasurer",
      image: p1,
      qualification: "CA, Financial Expert",
      experience: "22+ years in Financial Management"
    },
    {
      name: "Smt. Anjali Desai",
      position: "Executive Member",
      image: p1,
      qualification: "MSc in Agriculture",
      experience: "17+ years in Rural Development"
    },
    {
      name: "Dr. Mohammed Khan",
      position: "Executive Member",
      image: p1,
      qualification: "Ph.D. in Industrial Relations",
      experience: "19+ years in Labor Relations"
    },
    {
      name: "Smt. Lakshmi Rao",
      position: "Executive Member",
      image: p1,
      qualification: "LLB, Labor Law Expert",
      experience: "16+ years in Legal Affairs"
    },
    {
      name: "Shri Dinesh Gupta",
      position: "Executive Member",
      image: p1,
      qualification: "M.Tech in Agricultural Engineering",
      experience: "14+ years in Technology Implementation"
    }
  ];

  // Duplicate the board members array for infinite scroll effect
  const extendedMembers = [...boardMembers, ...boardMembers];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("board-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Auto scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollInterval;
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isDragging) {
          carousel.scrollLeft += 1;
          if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth) / 2) {
            carousel.scrollLeft = 0;
          }
        }
      }, 30);
    };

    startAutoScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleNavigation = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = 350; // Width of each card
    const scrollDistance = cardWidth + 32; // Card width + gap (gap-8 = 32px)
    const currentScroll = carousel.scrollLeft;
    
    if (direction === 'left') {
      carousel.scrollTo({
        left: currentScroll - scrollDistance,
        behavior: 'smooth'
      });
    } else {
      carousel.scrollTo({
        left: currentScroll + scrollDistance,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="board-section" className="bg-gradient-to-b from-white to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Board Members
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden px-4">
          {/* Navigation Arrows */}
          <button 
            className="absolute left-0 top-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all transform -translate-y-1/2"
            onClick={() => handleNavigation('left')}
          >
            ❮
          </button>
          <button 
            className="absolute right-0 top-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all transform -translate-y-1/2"
            onClick={() => handleNavigation('right')}
          >
            ❯
          </button>

          {/* Board Members Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-hidden scroll-smooth"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {extendedMembers.map((member, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[350px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 mb-4 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index % boardMembers.length) * 100}ms` }}
              >
                {/* Member Image */}
                <div className="relative h-72">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-orange-300 font-medium">{member.position}</p>
                  </div>
                </div>

                {/* Member Details */}
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <p className="text-gray-700">{member.qualification}</p>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-gray-700">{member.experience}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;