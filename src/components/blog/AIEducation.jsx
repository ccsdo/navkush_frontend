import React, { useEffect, useRef, useState } from "react";

export default function Blog1AIEducation() {
  // State for comments and commenter info
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [success, setSuccess] = useState(false);

  const LOCAL_STORAGE_KEY = "aiEducationBlogComments";
  const COMMENTER_INFO_KEY = "aiEducationBlogCommenterInfo";
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
          Why India Needs to Catch Up in AI Education
        </h1>
      </header>

      {/* Content Section */}
      <main className="max-w-5xl mx-auto p-6 space-y-8">
        <section>
          <p className="text-lg mb-4">
            In today’s world, <span className="font-bold">Artificial Intelligence (AI)</span> is no longer just a buzzword—it’s a necessity. Countries around the globe are embracing AI education at the school level to prepare children for the future.
          </p>
          <p className="text-lg mb-4">
            <span className="font-bold">But where does India stand in this race?</span> Sadly, we’re still far behind.
          </p>
        </section>

        <section>
          <div className="border-l-4 border-[#11616f] pl-4 py-2 mb-4 bg-gray-50 rounded-r">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
              How Other Countries Are Preparing Their Students
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-bold">China</span> has made AI a compulsory subject in schools. Students don’t just learn theory; they actually work on coding projects, robotics labs, and AI-based experiments from a very young age.
              </li>
              <li>
                In the <span className="font-bold">United States</span>, children use AI tools like ChatGPT, Python models, and robotics kits as part of their classroom learning.
              </li>
              <li>
                <span className="font-bold">Singapore</span> has declared AI as a national skill, ensuring every child learns its basics to stay globally competitive.
              </li>
            </ul>
            <p className="mt-3">
              These countries are not just teaching AI—they are building a future-ready generation.
            </p>
          </div>
        </section>

        <section>
          <div className="border-l-4 border-[#11616f] pl-4 py-2 mb-4 bg-gray-50 rounded-r">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
              The Situation in India
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span role="img" aria-label="point">👉</span> AI has been introduced in some schools, but <span className="font-bold">less than 50%</span> have actually adopted it in their curriculum.
              </li>
              <li>
                <span role="img" aria-label="point">👉</span> Even in those schools, AI is often taught as theory from books, with little or no practical exposure.
              </li>
              <li>
                <span role="img" aria-label="point">👉</span> Many schools have computer labs, but they are only for show. Students don’t get the chance to truly experiment with AI tools.
              </li>
            </ul>
            <p className="mt-3">
              In short, while the world is moving towards hands-on learning, India is still stuck in rote learning and textbook teaching.
            </p>
          </div>
        </section>

        <section>
          <div className="border-l-4 border-[#11616f] pl-4 py-2 mb-4 bg-gray-50 rounded-r">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
              The Challenges India Faces
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <span className="font-bold">Lack of Infrastructure</span> – Many government schools don’t even have functioning computer labs.
              </li>
              <li>
                <span className="font-bold">Untrained Teachers</span> – Most teachers themselves are not familiar with AI or modern digital tools.
              </li>
              <li>
                <span className="font-bold">Exam-Oriented System</span> – Our education system still focuses more on grades and theory than real-world application.
              </li>
            </ol>
          </div>
        </section>

        <section>
          <div className="border-l-4 border-[#11616f] pl-4 py-2 mb-4 bg-gray-50 rounded-r">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
              Why AI Education Matters
            </h2>
            <p>
              AI is not just for computer engineers. It is already transforming every field:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <span className="font-bold">Doctors</span> use AI for faster diagnosis.
              </li>
              <li>
                <span className="font-bold">Farmers</span> rely on AI to monitor crops and predict weather.
              </li>
              <li>
                <span className="font-bold">Startups and businesses</span> use AI for marketing, customer engagement, and data analysis.
              </li>
            </ul>
            <p className="mt-3">
              This means the jobs of the future will require AI knowledge—whether your child wants to be a doctor, farmer, entrepreneur, or scientist.
            </p>
            <p className="mt-2">
              If Indian students only read about AI while children in other countries are building AI-powered solutions, we risk falling far behind in the global competition.
            </p>
          </div>
        </section>

        <section>
          <div className="border-l-4 border-[#11616f] pl-4 py-2 mb-4 bg-gray-50 rounded-r">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
              The Way Forward
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Establish AI labs and coding classes in every school.
              </li>
              <li>
                Provide training programs for teachers so they can guide students effectively.
              </li>
              <li>
                Shift focus from theory to hands-on projects and problem-solving.
              </li>
              <li>
                Build public-private partnerships to bring AI education to rural schools.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="border-l-4 border-[#11616f] pl-4 py-2 mb-4 bg-gray-50 rounded-r">
            <h2 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
              Conclusion
            </h2>
            <p>
              AI is no longer the future—it is the present. The countries that equip their children with AI skills today will lead the world tomorrow.
            </p>
            <p className="mt-2">
              India has immense talent and potential, but without practical AI education, our children may be left behind while the rest of the world moves ahead.
            </p>
            <p className="mt-2 font-bold">
              It’s time we ask ourselves:
            </p>
            <p className="mt-1">
              <span role="img" aria-label="point">👉</span> Will our children be AI-ready when they compete on the global stage?
            </p>
            <p className="mt-1">
              The answer depends on how quickly we transform our education system today.
            </p>
          </div>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Share your thoughts about AI education in India..."
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
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
                  className="border-l-4 border-yellow-500 pl-4 py-3 bg-gray-50 rounded-r-md"
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
