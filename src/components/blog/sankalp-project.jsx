import React, { useEffect, useRef, useState } from "react";

export default function SankalpProject() {
  // State for comments and commenter info
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [success, setSuccess] = useState(false);

  const LOCAL_STORAGE_KEY = "sankalpProjectComments";
  const COMMENTER_INFO_KEY = "sankalpProjectCommenterInfo";
  const commentInputRef = useRef(null);

  // Load comments and commenter info on mount
  useEffect(() => {
    // Load comments
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch {
        setComments([]);
      }
    }
    // Load commenter info
    const savedInfo = localStorage.getItem(COMMENTER_INFO_KEY);
    if (savedInfo) {
      try {
        const info = JSON.parse(savedInfo);
        setName(info.name || "");
        setEmail(info.email || "");
        setWebsite(info.website || "");
        setSaveInfo(true);
      } catch {
        // ignore
      }
    }
  }, []);

  // Save comments to localStorage when changed
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(comments));
  }, [comments]);

  // Save commenter info if saveInfo is checked
  useEffect(() => {
    if (saveInfo) {
      localStorage.setItem(
        COMMENTER_INFO_KEY,
        JSON.stringify({ name, email, website })
      );
    }
  }, [saveInfo, name, email, website]);

  // Escape HTML to prevent XSS
  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    if (!comment.trim() || !name.trim()) {
      alert("Please fill in the required fields (Comment and Name).");
      return;
    }
    const newComment = {
      name: name.trim(),
      date: new Date().toLocaleString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      text: comment.trim(),
    };
    setComments((prev) => [...prev, newComment]);
    if (saveInfo) {
      localStorage.setItem(
        COMMENTER_INFO_KEY,
        JSON.stringify({ name, email, website })
      );
    } else {
      localStorage.removeItem(COMMENTER_INFO_KEY);
    }
    setComment("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Header Section */}
      <header className="py-6 text-center" style={{ backgroundColor: "#11616f" }}>
        <h1 className="text-4xl font-bold text-white">
          SANKALP PROJECT
        </h1>
      </header>

      {/* Content Section */}
      <main className="max-w-5xl mx-auto p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#11616f" }}>
            Sankalp Project:
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The Sankalp project was launched across India for skill development. Recently the ministry of skill development and Entrepreneurship has called for{" "}
              <span style={{ color: "#11616f" }}>SANKALP Scheme</span> to focus on district - level skilling ecosystem through convergence and coordination.
            </li>
            <li>
              Skill Acquisition and Knowledge Awareness for Livelihood Promotion (SANKALP) is a program launched by the ministry of skill development in 2018.
            </li>
            <li>
              <span style={{ color: "#11616f" }}>SANKALP</span> is an outcome-oriented program of ministry of development{" "}
              <span style={{ color: "#11616f" }}>(MSDE)</span> with a special focus on decentralised planning and quality improvement.
            </li>
            <li>
              It is a Centrally Sponsored Scheme which is collaboration with the world bank.
            </li>
            <li>
              It aims to implement the mandate of improving the quality and market relevance of skill development programs.
            </li>
          </ul>
        </section>

        {/* Comments Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4" style={{ color: "#11616f" }}>
            Comments
          </h3>

          {/* Comment Form */}
          <form className="space-y-4 mb-6" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Comment *
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                required
                ref={commentInputRef}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Share your thoughts about the Sankalp Project..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="https://yourwebsite.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                className="h-4 w-4 text-[#11616f] focus:ring-orange-500 border-gray-300 rounded"
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
              />
              <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
                Save my name, email, and website for next time
              </label>
            </div>

            <button
              type="submit"
              className={`bg-[#11616f] text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200 font-medium ${
                success ? "bg-green-500" : ""
              }`}
              disabled={success}
            >
              {success ? "Comment Posted!" : "Post Comment"}
            </button>
          </form>

          {/* Comments Display */}
          <div className="space-y-4">
            {comments.length === 0 ? (
              <div className="text-gray-500 text-center py-8">
                No comments yet. Be the first to share your thoughts!
              </div>
            ) : (
              comments.map((c, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-orange-500 pl-4 py-3 bg-gray-50 rounded-r-md"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">
                      {escapeHtml(c.name)}
                    </h4>
                    <span className="text-sm text-gray-500">{c.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {escapeHtml(c.text)}
                  </p>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
