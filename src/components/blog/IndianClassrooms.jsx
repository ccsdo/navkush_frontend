import React, { useEffect, useRef, useState } from "react";

export default function IndianClassrooms() {
  // State for comments and commenter info
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [success, setSuccess] = useState(false);

  const LOCAL_STORAGE_KEY = "indianClassroomsComments";
  const COMMENTER_INFO_KEY = "indianClassroomsCommenterInfo";
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
          Why Indian Students Score High But Struggle in Real Life
        </h1>
      </header>

      {/* Content Section */}
      <main className="max-w-5xl mx-auto p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#11616f" }}>
            The Marks Trap: Why High Scores Don’t Guarantee Real Learning
          </h2>
          <p>
            In India, a child’s entire identity is often decided by marks on a report card. From relatives asking <span className="italic">“Beta, kitne marks laaye?”</span> to parents proudly announcing <span className="italic">“Mere bachche ne 95% score kiya hai”</span>, our education culture has reduced learning to a number.
          </p>
          <p className="mt-3">
            But what happens after exams? Most children memorize answers, write them, and forget them within days. Ask the same student a month later, and they won’t remember the concept. Yet, they are celebrated as “toppers.”
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            The Harsh Truth of Our Classrooms
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              A student who scores 90% in English might still struggle to speak confidently in an interview.
            </li>
            <li>
              A commerce student learns about “banking systems” in theory but often doesn’t know how to fill a cheque or open a bank account.
            </li>
            <li>
              Children spend years learning “computer science” but in many schools, they never actually touch a real computer because labs are either outdated or used only once a year.
            </li>
            <li>
              We teach “environment” in EVS books but never take children for a nature visit or real-life awareness drive.
            </li>
          </ul>
          <p className="mt-3">
            This is the truth of our education system: we glorify marks, not skills.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            The Global Contrast
          </h3>
          <p>
            In countries like Finland or Singapore, students are encouraged to experiment, work in teams, and solve real-world problems. They learn through projects—like building small robots, creating apps, or managing mock businesses—skills that make them confident for the future.
          </p>
          <p className="mt-3">
            But in India, even a 95% scorer might not know how to write a professional email, manage personal finances, or speak in public.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            Why This Must Change
          </h3>
          <p>
            Our children need to learn things that actually matter in life:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>How to communicate effectively in front of people.</li>
            <li>How to manage money and understand savings, loans, and investments.</li>
            <li>How to use digital tools beyond social media—Excel, presentations, coding, or AI.</li>
            <li>How to think critically and solve problems rather than just repeat memorized answers.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            Conclusion
          </h3>
          <p>
            Marks may get a child applause at family gatherings, but skills will decide their future. If India truly wants its youth to succeed on a global stage, education must move beyond textbooks and rote learning.
          </p>
          <p className="mt-3">
            Because tomorrow, when our children face the real world, nobody will ask, “How many marks did you get in Class 10?” They will only ask, “What can you do?”
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Share your thoughts about Indian education..."
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
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
                  className="border-l-4 border-red-500 pl-4 py-3 bg-gray-50 rounded-r-md"
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
