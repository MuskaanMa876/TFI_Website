import React, { useEffect, useState, useCallback } from "react";
import { newsItems } from "../data/news";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchNews = useCallback(async (index = currentIndex) => {
    setLoading(true);
    try {
      const response = await fetch(newsItems[index].url);
      const data = await response.json();
      if (data.status === "ok") {
        setNews(data.articles || []);
      } else {
        setNews([]);
        console.error("API returned error:", data);
      }
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  }, [currentIndex]);

  useEffect(() => {
    // Fetch news immediately
    fetchNews();

    // Rotate every 30 minutes
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = (prev + 1) % newsItems.length;
        fetchNews(nextIndex);
        return nextIndex;
      });
    }, 1800000);

    return () => clearInterval(interval);
  }, [fetchNews]);

  return (
    <main>
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-black capitalize">
            {newsItems[currentIndex].name} News
          </h1>
          <p className="text-slate-700 text-lg max-w-3xl mt-4 leading-relaxed">
            Stay updated with the latest {newsItems[currentIndex].name} news.
          </p>

          {loading && <p className="mt-6 text-slate-500">Loading news...</p>}

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.length > 0 ? (
              news.map((item, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {item.urlToImage && (
                    <img
                      src={item.urlToImage}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-4">{item.description}</p>
                    <p className="text-xs text-slate-500 mb-2">
                      Source: {item.source.name} |{" "}
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-gradient-to-r from-black via-red-600 to-black text-white text-sm font-semibold rounded-lg hover:opacity-90 transition"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-500 mt-6">No news available at the moment.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
