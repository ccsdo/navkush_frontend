import { useState, useEffect } from 'react';
import { Newspaper, CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  // Placeholder data for news and events
  const news = [
    {
      id: 1,
      title: 'Grand Opening of Our New Branch',
      date: 'August 15, 2025',
      description: 'We are proud to announce that our new branch has officially opened in the heart of the city.',
      image: 'https://placehold.co/600x400/0891b2/ffffff?text=News+1',
    },
    {
      id: 2,
      title: 'Participation in Tech Summit',
      date: 'September 20, 2025',
      description: 'Our team participated in the recent national tech summit and presented our latest innovations.',
      image: 'https://placehold.co/600x400/0891b2/ffffff?text=News+2',
    },
    {
      id: 3,
      title: 'Environmental Conservation Initiative',
      date: 'October 05, 2025',
      description: 'We have launched a new initiative aimed at raising environmental awareness in our local community.',
      image: 'https://placehold.co/600x400/0891b2/ffffff?text=News+3',
    },
    {
      id: 4,
      title: 'Community Clean-Up Day',
      date: 'October 25, 2025',
      description: 'Join us for our annual community clean-up day and help us make a difference in our neighborhood.',
      image: 'https://placehold.co/600x400/0891b2/ffffff?text=News+4',
    },
    {
      id: 5,
      title: 'Partnership with Local University',
      date: 'November 10, 2025',
      description: 'We have partnered with a local university to mentor students and support innovative projects.',
      image: 'https://placehold.co/600x400/0891b2/ffffff?text=News+5',
    },
  ];

  const events = [
    {
      id: 1,
      title: 'Annual Company Conference',
      date: 'November 25, 2025',
      location: 'Delhi',
      description: 'Join us for our annual conference, where we will discuss the past year\'s achievements and future plans.',
    },
    {
      id: 2,
      title: 'Product Launch Webinar',
      date: 'December 10, 2025',
      location: 'Online',
      description: 'Participate in a special webinar for the launch of our new product and ask questions directly to our experts.',
    },
    {
      id: 3,
      title: 'Hackathon Competition',
      date: 'January 18, 2026',
      location: 'Bengaluru',
      description: 'An exciting hackathon competition for young developers with a chance to win multiple prizes.',
    },
    {
      id: 4,
      title: 'Guest Speaker Session',
      date: 'February 05, 2026',
      location: 'Online',
      description: 'A special session with a renowned industry expert discussing the future of AI.',
    },
  ];

  // Function to handle next slide. It advances by one to create a smooth scrolling effect.
  const nextSlide = () => {
    if (activeTab === 'news') {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
    } else {
      setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
    }
  };

  // Function to handle previous slide.
  const prevSlide = () => {
    if (activeTab === 'news') {
      setCurrentNewsIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length);
    } else {
      setCurrentEventIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    }
  };

  // Use useEffect to handle the automatic slideshow
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    // Cleanup the interval when the component unmounts or the tab changes
    return () => clearInterval(slideInterval);
  }, [activeTab]);

  // Get the indices for the three items to display
  const getDisplayItems = (items, currentIndex) => {
    const displayIndices = [
      currentIndex,
      (currentIndex + 1) % items.length,
      (currentIndex + 2) % items.length,
    ];
    return displayIndices.map(index => items[index]);
  };

  const newsToDisplay = getDisplayItems(news, currentNewsIndex);
  const eventsToDisplay = getDisplayItems(events, currentEventIndex);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-[Inter] p-4 sm:p-8 flex flex-col items-center">
      <div className="max-w-7xl mx-auto py-8 w-full">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          News and Events
        </h1>
        <p className="text-center text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
          Stay updated with the latest news and upcoming events.
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <button
            className={`flex items-center space-x-2 px-6 py-3 rounded-l-full font-medium transition-all duration-300 ease-in-out ${
              activeTab === 'news'
                ? 'bg-sky-500 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-sky-100 dark:hover:bg-gray-700'
            }`}
            onClick={() => {
              setActiveTab('news');
              setCurrentNewsIndex(0);
            }}
          >
            <Newspaper className="h-5 w-5" />
            <span>News</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-6 py-3 rounded-r-full font-medium transition-all duration-300 ease-in-out ${
              activeTab === 'events'
                ? 'bg-sky-500 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-sky-100 dark:hover:bg-gray-700'
            }`}
            onClick={() => {
              setActiveTab('events');
              setCurrentEventIndex(0);
            }}
          >
            <CalendarDays className="h-5 w-5" />
            <span>Events</span>
          </button>
        </div>

        {/* Slideshow Container */}
        <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-sky-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none absolute left-0 z-10 top-1/2 -translate-y-1/2"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Conditional Rendering of the 3-slide grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
            {activeTab === 'news'
              ? newsToDisplay.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                        {item.date}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))
              : eventsToDisplay.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <CalendarDays className="h-6 w-6 text-sky-500" />
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center space-x-2 text-gray-500 dark:text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin"
                      >
                        <path d="M12 18V18" />
                        <path d="M12 21s-8-6-8-11a8 8 0 0 1 16 0c0 5-8 11-8 11z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="text-sm">{item.location}</span>
                    </div>
                  </div>
                ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-sky-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none absolute right-0 z-10 top-1/2 -translate-y-1/2"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsEventsPage;

