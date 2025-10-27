import React, { useEffect, useRef, useState } from "react";

export default function IndianClassroomsBlog3() {
  // State for comments and commenter info
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [success, setSuccess] = useState(false);

  const LOCAL_STORAGE_KEY = "indianClassroomsBlog3Comments";
  const COMMENTER_INFO_KEY = "indianClassroomsBlog3CommenterInfo";
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
        Why Practical Learning is Missing in Indian Classrooms
        </h1>
      </header>

      {/* Content Section */}
      <main className="max-w-5xl mx-auto p-6 space-y-8">
        <section>
          <p className="text-lg mb-4">
            In India, our children spend years reading thick textbooks, memorizing answers, and writing long exams. But when it comes to real-life situations, they often feel lost. This is the biggest gap in our education system—we teach theory, but not application.
          </p>
          <hr className="my-6" />
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            The Reality of “Theory-Only” Education
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Children study Electricity in Physics chapters for years, but most of them don’t know how to change a fuse or fix a simple bulb at home.
            </li>
            <li>
              Students learn Banking and Economics in detail, but ask them to fill a deposit slip or open a bank account, and they hesitate.
            </li>
            <li>
              Schools preach about Health &amp; Hygiene, yet many government schools don’t even provide clean washrooms or safe drinking water.
            </li>
            <li>
              Students memorize chapters on Environment but have never planted a tree or joined a clean-up drive in their area.
            </li>
            <li>
              Even in Computer Science, children write code in exams without ever touching a working computer because labs are outdated or locked.
            </li>
          </ul>
          <hr className="my-6" />
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            The Cultural Truth of Indian Education
          </h3>
          <p className="mb-2">
            In most Indian homes, parents proudly say:
          </p>
          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700 mb-2">
            “Mera beta 95% laaya hai!”
          </blockquote>
          <p className="mb-2">
            But nobody asks, <span className="font-semibold">“Kya mera beta apna kaam khud kar paata hai? Kya usme confidence hai? Kya vo future ke liye ready hai?”</span>
          </p>
          <p className="mb-2">
            This marks obsession has made schools focus only on results and rankings, not on real-world learning. Children become exam-ready, not life-ready.
          </p>
          <hr className="my-6" />
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            What’s Missing in Our Classrooms
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Financial Literacy</span> – how to save, invest, or manage money.
            </li>
            <li>
              <span className="font-semibold">Digital Learning</span> – how to use Excel, PowerPoint, coding, or AI tools.
            </li>
            <li>
              <span className="font-semibold">Life Skills</span> – basic cooking, fixing things, writing professional emails, or public speaking.
            </li>
            <li>
              <span className="font-semibold">Mental Health Awareness</span> – how to handle stress, peer pressure, or failures.
            </li>
          </ul>
          <hr className="my-6" />
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            Why Practical Learning is the Need of the Hour
          </h3>
          <p className="mb-2">
            Because in the real world, no one will ask your marks in Class 10 or 12.
          </p>
          <p className="mb-2">
            They will ask:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Can you solve a problem?</li>
            <li>Can you lead a team?</li>
            <li>Can you adapt to new technology?</li>
            <li>Do you have confidence to face challenges?</li>
          </ul>
          <hr className="my-6" />
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            Conclusion
          </h3>
          <p>
            India has some of the brightest young minds, but until schools shift from rote learning to practical learning, our students will continue to struggle in real-life situations.
            <br />
            <span className="font-semibold">
              Education should not just be about scoring high—it should be about living smart, being confident, and becoming future-ready.
            </span>
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
                placeholder="Share your thoughts about practical learning in Indian classrooms..."
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
