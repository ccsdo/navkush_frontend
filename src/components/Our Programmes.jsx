import React from 'react';
import {
  School,
  Heart,
  User,
  Briefcase,
  Leaf,
  AlertTriangle
} from 'lucide-react';

// The ProgramCard component is a reusable card for each program.
// It accepts props for the icon, title, and description.
const ProgramCard = ({ icon: Icon, title, description, iconBgColor, iconColor }) => {
  return (
    <div className="flex items-start p-4 md:p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Container for the icon with dynamic colors */}
      <div className={`p-3 md:p-4 rounded-xl mr-4 md:mr-6`} style={{ backgroundColor: iconBgColor }}>
        {/* The icon component with dynamic colors */}
        <Icon className={`w-8 h-8 md:w-10 md:h-10`} style={{ color: iconColor }} />
      </div>
      {/* Text content for the card */}
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-gray-800 tracking-wider font-inter">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-600 font-inter">
          {description}
        </p>
      </div>
    </div>
  );
};

// The main App component that renders the entire section.
const App = () => {
  // Array of data for each program card.
  // We use objects to easily manage and render the content.
  const programs = [
    {
      title: 'EDUCATION',
      description: 'Education, nutrition and holistic development of children',
      icon: School,
      iconBgColor: '#FDF0D0',
      iconColor: '#E6A529',
    },
    {
      title: 'HEALTHCARE',
      description: 'Taking healthcare services to doorsteps of hard to reach communities',
      icon: Heart,
      iconBgColor: '#E9E4F7',
      iconColor: '#7A64C7',
    },
    {
      title: 'WOMEN EMPOWERMENT',
      description: 'Empowering adolescent girls & women through community engagement',
      icon: User,
      iconBgColor: '#E0F0EF',
      iconColor: '#6B9D98',
    },
    {
      title: 'LIVELIHOOD',
      description: 'Skill training and placement support for underprivileged youth',
      icon: Briefcase,
      iconBgColor: '#F8E9DE',
      iconColor: '#BE8C61',
    },
    {
      title: 'EMPOWERING GRASSROOTS',
      description: 'Helping community-based organizations become locally sustainable',
      icon: Leaf,
      iconBgColor: '#DDE9D3',
      iconColor: '#628945',
    },
    {
      title: 'DISASTER RESPONSE',
      description: 'Reach out and respond to the needs of the disaster-affected people',
      icon: AlertTriangle,
      iconBgColor: '#F7E3E5',
      iconColor: '#D1646E',
    },
  ];

  return (
    <div className="font-inter bg-white p-4 md:p-8 lg:p-12 min-h-screen">
      {/* Main heading */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-wide font-inter">
          OUR PROGRAMMES
        </h1>
      </div>

      {/* Grid container for the program cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {/* Map over the programs array to render each card */}
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            title={program.title}
            description={program.description}
            icon={program.icon}
            iconBgColor={program.iconBgColor}
            iconColor={program.iconColor}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
