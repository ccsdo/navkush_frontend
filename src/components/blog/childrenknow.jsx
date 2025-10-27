import React, { useEffect, useRef, useState } from "react";

export default function ChildrenKnowBlog() {
  // State for comments and commenter info
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [success, setSuccess] = useState(false);

  const LOCAL_STORAGE_KEY = "childrenKnowBlogComments";
  const COMMENTER_INFO_KEY = "childrenKnowBlogCommenterInfo";
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
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          The Race Begins at Pre-Nursery – Are We Stealing Childhood?
        </h1>
      </header>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        <section>
          <p className="text-lg mb-4">
            In India, the rat race doesn’t start after school or college—it starts at <span className="font-semibold">Pre-Nursery</span>.
            <br />
            A child barely 2.5–3 years old is handed a school bag almost bigger than them, expected to recite ABCD, 123, rhymes, and yes—even given homework.
          </p>
          <div className="mb-4">
            <span className="block font-semibold text-gray-700 mb-1">Parents proudly say:</span>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="italic">“Mera beta 3 saal ka hai aur likhna shuru kar diya hai.”</span>
              </li>
              <li>
                <span className="italic">“Hamari beti nursery mai hi tables yaad kar rahi hai.”</span>
              </li>
            </ul>
          </div>
          <p className="mb-4">
            But the reality is heartbreaking. At an age when kids should be playing in the mud, coloring walls with crayons, or singing silly songs, they’re trapped in a classroom trying to memorize alphabets.
          </p>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            Compare this with countries like Finland, Sweden, or Japan:
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              In <span className="font-semibold">Finland</span>, formal schooling starts at 7 years old. Till then, children learn through play, storytelling, singing, and exploring nature.
            </li>
            <li>
              In <span className="font-semibold">Japan</span>, kindergarten kids spend their time learning teamwork by cleaning classrooms together and playing games, not by rote memorization.
            </li>
            <li>
              <span className="font-semibold">Research</span> shows that play-based learning builds creativity, social skills, and emotional strength—which are far more important for success than writing A to Z at age 3.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            Now think about India:
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              A 3-year-old carrying a bag heavier than them.
            </li>
            <li>
              A 4-year-old sitting for “interviews” in schools where they’re judged on how well they can recite rhymes.
            </li>
            <li>
              Parents comparing: <span className="italic">“Sharma ji ka beta counting 100 tak bol leta hai, tumhara kyu nahi?”</span>
            </li>
          </ul>
          <p className="mb-4">
            This culture of comparison and competition at such a tender age is silently crushing childhood.
          </p>
          <div className="mb-4">
            <span className="block">
              👉 No wonder by the time kids reach 10th or 12th, they’re already stressed, anxious, and burned out.
            </span>
            <span className="block">
              👉 We’re producing toppers, but not thinkers. Students with marks, but not confidence.
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            The truth:
          </h3>
          <p className="mb-4">
            We need to stop this early academic pressure. Education at pre-nursery should mean stories, art, music, play, and fun, not homework and exams. Childhood is not a race to be won—it’s a time to be lived.
          </p>
          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700 mb-2">
            Because at the end, no one remembers how early you learned to write A, B, C… but the creativity, confidence, and happiness you build at that age lasts a lifetime.
          </blockquote>
        </section>

        {/* Comment Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4" style={{ color: "#11616f" }}>
            Share your thoughts
          </h2>
          <form
            className="space-y-4 bg-white p-4 rounded-md shadow"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                Comment <span className="text-orange-600">*</span>
              </label>
              <textarea
                id="comment"
                ref={commentInputRef}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                disabled={success}
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name <span className="text-orange-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={success}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={success}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                  Website
                </label>
                <input
                  id="website"
                  type="url"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  disabled={success}
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                id="saveInfo"
                type="checkbox"
                className="h-4 w-4 text-[#11616f] focus:ring-orange-500 border-gray-300 rounded"
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
                disabled={success}
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
          <div className="space-y-4 mt-6">
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
