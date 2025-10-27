import React from 'react';

export default function Project() {
  return (
    // Projects Section
    <div id="projects" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Projects</h3>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive programs designed to create sustainable change in communities across the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Shiksha Setu Project */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Shiksha Setu</h4>
            </div>
            <p className="text-gray-700 mb-4">
              A comprehensive education bridge program connecting underprivileged children with quality learning opportunities
              through innovative teaching methods and technology integration.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• 15 learning centers established</li>
              <li>• 800+ children enrolled</li>
              <li>• 95% retention rate</li>
            </ul>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Shakti Kendra Project */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Shakti Kendra</h4>
            </div>
            <p className="text-gray-700 mb-4">
              Women empowerment centers providing skill development, financial literacy, and entrepreneurship training to
              create sustainable livelihoods for women in rural areas.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• 12 centers operational</li>
              <li>• 600+ women trained</li>
              <li>• 200+ micro-enterprises started</li>
            </ul>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
