import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeTab, setActiveTab] = useState('history');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const section = document.getElementById("about-us-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const stats = [
    { number: "30+", label: "Years of Excellence" },
    { number: "50+", label: "Certified Drones" },
    { number: "1000+", label: "Skilled Workers" },
    { number: "100+", label: "Projects Completed" },
  ];

  return (
    <div
      id="about-us-section"
      className="min-h-[800px] bg-gradient-to-b from-white to-orange-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-600">ILCS</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-700 hover:scale-105 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-3xl font-bold text-orange-600">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200">
            {[
              { id: 'history', label: 'Our History' },
              { id: 'services', label: 'Services' },
              { id: 'achievements', label: 'Achievements' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 px-6 text-sm font-medium transition-all
                  ${activeTab === tab.id 
                    ? 'text-orange-600 border-b-2 border-orange-600' 
                    : 'text-gray-500 hover:text-orange-500'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8">
            {activeTab === 'history' && (
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Established in 1994, Indian Labour Cooperative Society Ltd. (ILCS) operates under the Ministry of Cooperation, Government of India. With three decades of dedicated service, we have consistently provided top-tier manpower solutions for Government, Semi-Government, and Private sector projects.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our expertise spans various domains, having collaborated with entities such as the Income Tax Department, Ministry of Petroleum & Natural Gas, MSME, and the Quality Council of India.
                </p>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  ILCS specializes in Smart Agriculture Drone Solutions, revolutionizing farming efficiency by enabling precise and automated spraying of fertilizers, pesticides, and insecticides. Our innovations help reduce labor efforts, improve crop yields, and minimize health risks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    "Skilled Manpower Deployment",
                    "Agricultural Drone Services",
                    "DGCA-Approved Training",
                    "Project Management",
                    "Warehousing Solutions",
                    "Technical Consulting"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Between 2002 and 2008, ILCS played a crucial role in supporting Indian Potash Limited (IPL) by managing its rake handling and warehousing in the challenging terrain of Jammu & Kashmir. More recently, we have empowered IPL with cutting-edge agricultural drones and trained their personnel as DGCA-certified drone pilots.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With over 50 Type Certified Agriculture Spray Drones and RPC-certified pilots deployed nationwide, we are actively fostering employment and driving technological advancements in the agricultural sector. ILCS is proud to be MSME registered and ISO 9001:2015 certified.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Certification Badge */}
        <div className={`mt-8 text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-block bg-white px-6 py-3 rounded-full shadow-md">
            <p className="text-sm font-medium text-gray-600">
              ISO 9001:2015 Certified | MSME Registered
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
