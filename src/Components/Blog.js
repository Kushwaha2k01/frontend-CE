import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Rise of Esports in India",
      date: "December 15, 2024",
      excerpt: "Exploring how competitive gaming has transformed from a niche hobby to a mainstream phenomenon in India...",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building a Gaming Community: Our Journey",
      date: "December 10, 2024",
      excerpt: "From a small group of passionate gamers to a thriving esports organization - our story of growth...",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=500&h=300&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Essential Gaming Equipment for Competitive Players",
      date: "December 5, 2024",
      excerpt: "A comprehensive guide to the gear that can give you the competitive edge in tournaments...",
      image: "https://images.unsplash.com/photo-1593305841991-05c0ba60a237?w=500&h=300&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Mental Health in Gaming: Finding Balance",
      date: "November 28, 2024",
      excerpt: "How to maintain mental wellness while pursuing competitive gaming at the highest level...",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="blog-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Blog</h2>
          <p>Stay updated with the latest in gaming, esports, and our community</p>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
