// src/pages/TestFeed.js
import { useEffect, useState } from "react";
import Post from "./pages/Post";              
import CreatePost from "./pages/CreatePost";   
import "./pages/Feed.css";                   
import { FaHeart, FaClone } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlineAddBox } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import unigramLogo from "./assets/masterlogo.png";

export default function TestFeed() {
  const [feedData, setFeedData] = useState([]);
  const [showPostMenu, setShowPostMenu] = useState(false);       // + button menu
  const [showCreatePost, setShowCreatePost] = useState(false);   // full page CreatePost

  useEffect(() => {
    // dummy posts for UI testing
    setFeedData([
      {
        id: 1,
        username: "Kevin Hayrle",
        profileImageUrl: "https://i.postimg.cc/JnSSbMLc/2-BBDF52-F-97-E3-4788-979-B-31-BBA836-AF39.jpg",
        imageUrl: "https://i.postimg.cc/JnSSbMLc/2-BBDF52-F-97-E3-4788-979-B-31-BBA836-AF39.jpg",
        caption: "Testing UniSnap 🚀",
      },
      {
        id: 2,
        username: "zoha",
        profileImageUrl: "https://i.postimg.cc/JnSSbMLc/2-BBDF52-F-97-E3-4788-979-B-31-BBA836-AF39.jpg",
        imageUrl: "https://i.postimg.cc/JnSSbMLc/2-BBDF52-F-97-E3-4788-979-B-31-BBA836-AF39.jpg",
        caption: "Dummy post ✨",
      },
    ]);
  }, []);

  // Add new post at top of feed
  const handlePostCreated = (newPost) => {
    setFeedData([newPost, ...feedData]);
    setShowCreatePost(false); // close full page after posting
  };

  return (
    <div className="feed">
      {/* ---------- HEADER ---------- */}
      <div className="feed-header">
        <img src={unigramLogo} alt="Unigram" className="feed-logo" />
        <div className="header-icons">
          <FaHeart className="icon" />
        </div>
      </div>

      {/* ---------- CONDITIONAL FULL PAGE CREATE POST ---------- */}
      {showCreatePost && (
        <div className="create-post-fullpage">
          <CreatePost onPostCreated={handlePostCreated} />
        </div>
      )}

      {/* ---------- STORIES ---------- */}
      <div className="stories">
        <div className="stories-row">
          {["you", "rutba", "zoha", "shaash"].map((name, idx) => (
            <div className="story" key={idx}>
              <img src={`https://i.pravatar.cc/150?img=${idx + 10}`} alt={name} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- POSTS ---------- */}
      <div className="posts">
        {feedData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      {/* ---------- FOOTER ---------- */}
      <div className="feed-footer">
        <MdOutlineHome className="footer-icon" />
        <MdOutlineSearch className="footer-icon" />
        <MdOutlineAddBox
          className="footer-icon" 
          onClick={() => setShowPostMenu(!showPostMenu)} 
        />
        <IoChatbubbleEllipsesOutline className="footer-icon" />
        <MdOutlinePerson className="footer-icon" />
      </div>

      {/* ---------- POST MENU OVERLAY ---------- */}
      {showPostMenu && (
        <div className="post-menu-overlay">
          <div className="post-menu">
            <button 
              onClick={() => {
                setShowCreatePost(true);
                setShowPostMenu(false);
              }}
            >
              UniPost
            </button>
            <button 
              onClick={() => {
                alert("UniSnap clicked"); // placeholder
                setShowPostMenu(false);
              }}
            >
              UniSnap
            </button>
            <button className="close-btn" onClick={() => setShowPostMenu(false)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}