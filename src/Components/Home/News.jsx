import React from "react";
import { motion } from "framer-motion";

const newsData = [
  {
    id: 1,
    title: "Over 54.5 crore JanDhan accounts opened till January 15; 57% women a/c holders: Nirmala Sitharaman",
    description:
      "Finance Minister Nirmala Sitharaman announced that over 54.5 crore JanDhan accounts have been opened as of January 15, 2025, with 56% belonging to women. The Pradhan Mantri Jan Dhan Yojana, initiated in 2014, aims to provide universal banking services. Social security enrolments also show significant numbers, with millions of women benefitting.",
    image: "https://img.etimg.com/photo/msid-118121417,imgsize-125898.cms",
    link: "https://economictimes.indiatimes.com/news/economy/policy/over-54-5-crore-jandhan-accounts-opened-till-january-15-57-women-a/c-holders-nirmala-sitharaman/articleshow/118121417.cms",
  },
  {
    id: 2,
    title: "Aam aadmi wants smaller biscuit packs, but brighter jewellery",
    description:
      "India’s middle class is balancing rising costs and aspirations by choosing smaller packs for daily essentials while using EMIs for premium products. Easy financing is powering purchases of high-end appliances and jewellery, as households manage their budgets amid inflation and changing consumption patterns.",
    image: "https://img.etimg.com/photo/msid-118117704,imgsize-2535448.cms",
    link: "https://economictimes.indiatimes.com/news/economy/policy/aam-aadmi-wants-smaller-biscuit-packs-but-brighter-jewellery/articleshow/118117704.cms",
  },
];

const LatestNews = () => {
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, 
        duration: 0.6, 
        ease: "easeInOut", 
      },
    }),
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Latest News
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card enters
      >
        {newsData.map((news, index) => (
          <motion.div
            key={news.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
            custom={index} // Staggered entry based on index
            variants={cardVariants}
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <motion.img
                src={news.image}
                alt={news.title}
                className="w-full h-80 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                {news.description}
              </p>
              <a target="_blank"
                href={news.link}
                className="inline-block text-sm md:text-base font-medium text-blue-600 hover:underline"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default LatestNews;
