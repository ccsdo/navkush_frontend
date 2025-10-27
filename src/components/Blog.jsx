import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Main App component
export default function App() {
  // Blog post data stored as an array of objects
  const blogPosts = [
    {
      id: '1',
      title: 'Why India Needs to Catch Up in AI Education',
      tagline: 'AI is shaping the world, but India is still stuck in rote learning.',
      description: 'In today’s world, Artificial Intelligence (AI) is no longer just a buzzword—it’s a necessity. Countries around the globe are embracing AI education at the school level to prepare children for the future.',
      svg: (
        <img
          src="/image/blog1.png"
          alt="blog1"
          className="w-full h-auto max-h-72 rounded-lg mx-auto"
          style={{ objectFit: 'contain', display: 'block' }}
        />
      ),
      link: '/blog/ai-education'
    },
    {
      id: '2',
      title: "Why Indian Students Score High But Struggle in Real Life",
      tagline: 'Marks open doors, but skills build futures.',
      description: "In India, a child’s entire identity is often decided by marks on a report card. From relatives asking “Beta, kitne marks laaye?” to parents proudly announcing “Mere bachche ne 95% score kiya hai”, our education culture has reduced learning to a number.",
      svg: (
        <img
          src="/image/blog2.png"
          alt="student score"
          className="w-full h-auto max-h-72 rounded-lg mx-auto"
          style={{ objectFit: 'contain', display: 'block' }}
        />
      ),
      link: '/blog/students-score' // corrected link
    },
    {
      id: '3',
      title: 'Why Practical Learning is Missing in Indian Classrooms',
      tagline: 'Our children know the theory but can’t apply it in real life.',
      description: 'In India, our children spend years reading thick textbooks, memorizing answers, and writing long exams. But when it comes to real-life situations, they often feel lost. This is the biggest gap in our education system—we teach theory, but not application.',
      svg: (
        <img
          src="/image/blog3.png"
          alt="indian classrooms"
          className="w-full h-auto max-h-72 rounded-lg mx-auto"
          style={{ objectFit: 'contain', display: 'block' }}
        />
      ),
      link: '/blog/indian-classroom'
    },
    // New Blog 4
    {
      id: '4',
      title: 'Mental Health: The Most Ignored Part of Indian Education',
      tagline: 'Marks are temporary, but mental well-being is permanent.',
      description: 'Exam pressure, competition, and cultural obsession with marks have created a mental health crisis in Indian education. Anxiety, stress, and even student suicides are rising. Schools, parents, and teachers must focus on counseling, wellness programs, and open conversations about stress. Education should nurture happiness and confidence, not just exam results.',
      svg: (
        <img
          src="/image/blog4.png"
          alt="Mental Health"
          className="w-full h-auto max-h-72 rounded-lg mx-auto"
          style={{ objectFit: 'contain', display: 'block' }}
        />
      ),
      link: '/blog/mental'
    },
    // New Blog 5
    {
      id: '5',
      title: 'The Race Begins at Pre-Nursery – Are We Stealing Childhood?',
      tagline: 'Childhood is not a race—it’s a time to be lived.',
      description: 'In India, academic pressure begins at age 3, with toddlers carrying heavy bags and preparing for school interviews. Unlike Finland or Japan, where play-based learning builds creativity and social skills, Indian children face comparison and competition too early. True education at this stage should mean play, art, music, and storytelling—not exams and homework.',
      svg: (
        <img
          src="/image/blog5.png"
          alt="Volunteer Impact"
          className="w-full h-auto max-h-72 rounded-lg mx-auto"
          style={{ objectFit: 'contain', display: 'block' }}
        />
      ),
      link: '/blog/childrenknow'
    },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <BlogList blogPosts={blogPosts} />
      </div>
    </>
  );
}

// Header component
const Header = () => {
  return (
    <header className="py-16 text-center bg-[#11616f] p-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1
          className="font-bold capitalize text-5xl mb-4 text-white"
        >
          Archives
        </h1>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Discover our journey of impact, community empowerment, and positive change through our blog stories
        </p>
      </div>
    </header>
  );
};

// Blog List component for the home page (NO CARD FORMAT)
const BlogList = ({ blogPosts }) => {
  return (
    <main className="max-w-4xl mx-auto p-6 py-16">
      {blogPosts.map((post, index) => (
        <section
          key={post.id}
          className="mb-16 border-b border-gray-200 pb-12 last:border-b-0 last:pb-0"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 w-full flex-shrink-0 mb-6 md:mb-0 flex items-center justify-center">
              <div className="w-full">
                {post.svg}
              </div>
            </div>
            <div className="md:w-2/3 w-full">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: '#ff6d4d' }}
              >
                {post.title}
              </h2>
              <p
                className="font-semibold mb-2"
                style={{ color: '#11616f' }}
              >
                {post.tagline}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">{post.description}</p>
              <Link
                to={post.link}
                className="font-semibold text-base md:text-lg hover:underline transition-colors cursor-pointer"
                style={{
                  color: '#ff6d4d',
                  transition: 'color 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.color = '#11616f')}
                onMouseOut={e => (e.currentTarget.style.color = '#ff6d4d')}
              >
                Read More →
              </Link>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

// Leave a Reply (Comment) component
const LeaveAReply = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      setComments([
        ...comments,
        {
          name: name.trim(),
          comment: comment.trim(),
          date: new Date().toLocaleString(),
        },
      ]);
      setName('');
      setComment('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  return (
    <div className="mt-16">
      <h2
        className="text-2xl font-bold mb-4"
        style={{ color: '#11616f' }}
      >
        Leave a Reply
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2"
            style={{ borderColor: '#11616f', boxShadow: '0 0 0 2px #11616f33' }}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1" htmlFor="comment">
            Comment
          </label>
          <textarea
            id="comment"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2"
            style={{ borderColor: '#11616f', boxShadow: '0 0 0 2px #11616f33' }}
            rows={4}
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Your comment"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white px-6 py-2 rounded transition-colors"
          style={{
            backgroundColor: '#11616f',
            color: '#fff',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#ff6d4d')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#11616f')}
        >
          Post Comment
        </button>
        {submitted && (
          <div
            className="font-semibold mt-2"
            style={{ color: '#11616f' }}
          >
            Thank you for your reply!
          </div>
        )}
      </form>
      <div>
        {comments.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Replies</h3>
            <ul className="space-y-4">
              {comments.map((c, idx) => (
                <li key={idx} className="bg-gray-100 rounded p-4">
                  <div className="flex items-center mb-1">
                    <span
                      className="font-semibold"
                      style={{ color: '#11616f' }}
                    >
                      {c.name}
                    </span>
                    <span className="ml-2 text-xs text-gray-500">{c.date}</span>
                  </div>
                  <div className="text-gray-800">{c.comment}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
