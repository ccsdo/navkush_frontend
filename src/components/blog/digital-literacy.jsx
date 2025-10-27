import React, { useEffect, useRef, useState } from "react";

export default function DigitalLiteracy() {
  // State for comments and commenter info
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [success, setSuccess] = useState(false);

  const LOCAL_STORAGE_KEY = "digitalLiteracyComments";
  const COMMENTER_INFO_KEY = "digitalLiteracyCommenterInfo";
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
          Digital Literacy Awareness Program
        </h1>
      </header>

      {/* Content Section */}
      <main className="max-w-5xl mx-auto p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "#11616f" }}>
            What is Digital Literacy?
          </h2>
          <p>
            <span className="font-bold">Digital Literacy</span> is a key to the entire
            problems like, evaluation and communication of information using
            technologies of media platforms. It is a combination of both
            technical and cognitive abilities, which is useful for communication
            and create technologies. In this modern world population of a country
            growing too fast and the result of such kinds of high technologies
            platforms like: Instagram, YouTube, Google, etc.
          </p>
        </section>

        <section>
          <p>
            <span className="font-bold">
              Digital Literacy Awareness program from the Delhi Government
            </span>{" "}
            and we had completed 137+ awareness programs in government schools
            for class 9th–12th, North East Delhi. Hence conducting help pub to
            understand Digital literacy. These types of curriculum guarantees to
            be lean and understand children. These programs help the low cower
            wide range of socioeconomic backgrounds.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#11616f" }}>
            Key Points of Digital Literacy awareness program in those authorities consist of–
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">Curriculum Integration:</span> Digital Literacy modules are integrated into the prevailing curriculum for instructions digitally with students. These modules help in broad range of topics.
            </li>
            <li>
              <span className="font-bold">Teacher Training:</span> The efficiency of high knowledge teacher deliver students and college students to <span className="text-pink-600">Digital literacy</span> through medium of virtual literacy, in training period students and teacher also know why digital literacy is important.
            </li>
            <li>
              <span className="font-bold">Interactive learning:</span> Digital literacy education is introduced through collective and really interesting techniques inclusive of pair-on activities, multimedia and collaborative tasks.
            </li>
            <li>
              <span className="font-bold">Access to Technology:</span> The access of technology it helps to know, finalize data on ground which include computer labs and technology in lab with each other.
            </li>
            <li>
              <span className="font-bold">Continuous Assessment and Support:</span> Regular update and checks of mechanisms are carried out to reveal student’s development and help to solve query and learn.
            </li>
            <li>
              <span className="font-bold">Student Empowerment:</span> The curriculum improves student’s academic standard and future opportunities by sprucing up them with basic digital skills.
            </li>
            <li>
              <span className="font-bold">Closing the digital divide:</span> The curriculum demands to close the gap in digital opportunities and capabilities by assuring equal access to digital literacy education for children from disadvantaged backgrounds.
            </li>
            <li>
              <span className="font-bold">Encourage innovation and creativity:</span> Digital literacy encourages students to use <span className="text-pink-600">digital media</span> so that they can imagine and create new ideas.
            </li>
            <li>
              <span className="font-bold">Future Workforce Preparation:</span> The curriculum trained student with the vital abilities in the kinds of profession choices and aid the growth of virtual financial system.
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Share your thoughts about Digital Literacy..."
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
