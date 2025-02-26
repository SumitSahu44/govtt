import React, { useEffect, useState } from "react";
import Navbar from '../Home/Nav';
import axios from "axios";
import Footer from "../Home/Footer";
import DOMPurify from "dompurify"; // Install with: npm install dompurify
import { transform } from "framer-motion";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        const response = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=https://economictimes.indiatimes.com/news/economy/rssfeeds/1373380680.cms`
        );
        setArticles(response.data.items);
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
      }
    };

    fetchRSSFeed();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <br /><br /><br /><br /><br />
      <div className="bg-yellow-100 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Latest News</h1>
        <p className="text-lg text-gray-600 mt-4">Stay updated with the latest developments in the drone industry.</p>
      </div>
      {/* News Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.length > 0 ? (
          articles.map((article, index) => (
          <div className="news-card">
            <a href={article.link} target="_blank" rel="noopener noreferrer">
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={article.enclosure ? article.enclosure.link : "https://via.placeholder.com/300"}
                alt={article.title}
                className="w-full h-48 object-cover"
                />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 truncate">
                    {article.title}
                </h2>
                <p
                  className="text-sm text-gray-600 mt-2 truncate"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(article.description || ""),
                  }}
                />
                <p className="text-sm text-gray-500 mt-4">{new Date(article.pubDate).toLocaleDateString()}</p>
              </div>
            </div>
              </a>
          </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">Loading news...</p>
        )}
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NewsPage;