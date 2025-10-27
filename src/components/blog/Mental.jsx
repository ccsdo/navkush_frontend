import React, { useEffect, useRef, useState } from "react";

export default function Blog4MentalHealth() {
  // State for comments and commenter info
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [success, setSuccess] = useState(false);

  const LOCAL_STORAGE_KEY = "mentalHealthBlogComments";
  const COMMENTER_INFO_KEY = "mentalHealthBlogCommenterInfo";
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
          Mental Health: The Most Ignored Part of Indian Education
        </h1>
      </header>

      {/* Content Section */}
      <main className="max-w-5xl mx-auto p-6 space-y-8">
        <section>
          <p className="text-lg mb-4">
            In India, when we talk about education, the first questions parents and relatives ask are:
          </p>
          <ul className="mb-4 space-y-1">
            <li>👉 <span className="font-semibold">“Kitne marks aaye?”</span></li>
            <li>👉 <span className="font-semibold">“Top kiya counsel?”</span></li>
          </ul>
          <p className="text-lg mb-4">
            But nobody asks:
          </p>
          <ul className="mb-4 space-y-1">
            <li>👉 <span className="font-semibold">“Are you happy?”</span></li>
            <li>👉 <span className="font-semibold">“Are you stressed?”</span></li>
          </ul>
          <p className="text-lg mb-4">
            This is the sad truth of our system. Mental health is rarely discussed, yet it is the biggest challenge students face today.
          </p>
        </section>

        <section>
          <div className="border-l-4 border-[#11616f] pl-4 py-2 mb-4 bg-gray-50 rounded-r">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
              The Pressure Cooker of Exams
            </h2>
            <p className="mb-2">
              Every year, lakhs of students prepare for Board Exams, NEET, and JEE under extreme pressure. Coaching institutes advertise “Topper batches”, parents push children to study 12–14 hours a day, and schools only focus on results.
            </p>
            <p className="mb-2 font-semibold">The result?</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Children face anxiety, depression, and burnout.</li>
              <li>News headlines are filled with tragic stories of student suicides in Kota and other coaching hubs.</li>
              <li>Even small failures—like scoring 70% instead of 90%—make students feel like “losers” because our culture ties a child’s worth to marks.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            Real-Life Contradictions
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Schools teach chapters on “Health & Hygiene” but rarely have trained counsellors or psychologists for students under stress.
            </li>
            <li>
              Parents say “Don’t worry, just study hard”, but ignore the fact that the child is unable to sleep, eat, or handle the pressure.
            </li>
            <li>
              Teachers prepare students for exams but not for handling failure or rejection.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            Why Mental Health Matters in Education
          </h2>
          <p className="mb-2">
            A child who is stressed and anxious cannot truly learn. Confidence, creativity, and curiosity die when fear takes over.
          </p>
          <p>
            Education should not just prepare children for exams; it should prepare them for life, failures, and challenges.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            What Needs to Change
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Every school must have counsellors and wellness programs.</li>
            <li>Parents must stop comparing children with others—“Sharma ji ka beta 95% laya” has destroyed countless dreams.</li>
            <li>Teachers must talk openly about stress, pressure, and mental health just as they do about Maths and Science.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            Conclusion
          </h2>
          <p className="mb-2">
            If we continue to ignore mental health, India will keep producing “toppers” on paper but broken children in real life.
          </p>
          <p>
            <span className="font-bold">Marks are temporary, but a child’s mental well-being is permanent.</span><br />
            It’s time we stop asking only “How much did you score?” and start asking “How are you feeling?”
          </p>
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
                placeholder="Share your thoughts about mental health in education..."
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
                  placeholder="Your Name"
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
