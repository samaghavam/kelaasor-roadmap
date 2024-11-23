import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Users, Clock, BookOpen, Code, Pencil, Settings, Boxes, Globe } from 'lucide-react';

const RoadmapSection = ({ title, items, level = "junior", icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const getLevelColor = (itemLevel) => {
    switch(itemLevel) {
      case 'junior': return 'bg-emerald-100';
      case 'mid': return 'bg-yellow-100';
      case 'senior': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <div className="mb-6 bg-white rounded-lg shadow-md p-4">
      <div 
        className="flex items-center cursor-pointer mb-2" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon className="mr-2" size={20} color="rgb(25, 114, 101)" />
        <h2 className="text-xl font-semibold flex-1 text-gray-800">{title}</h2>
        {isOpen ? (
          <ChevronDown className="text-gray-600" />
        ) : (
          <ChevronRight className="text-gray-600" />
        )}
      </div>
      {isOpen && (
        <div className="ml-7 space-y-2">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`p-2 rounded ${getLevelColor(item.level)} transition-all hover:scale-101`}
            >
              <div className="flex items-center">
                <span className="font-medium text-gray-800">{item.name}</span>
                <div className="ml-auto flex items-center gap-2">
                  {item.level === "junior" && (
                    <span className="text-sm px-2 py-1 rounded bg-emerald-200 text-emerald-800">Junior</span>
                  )}
                  {item.level === "mid" && (
                    <span className="text-sm px-2 py-1 rounded bg-yellow-200 text-yellow-800">Mid</span>
                  )}
                  {item.level === "senior" && (
                    <span className="text-sm px-2 py-1 rounded bg-red-200 text-red-800">Senior</span>
                  )}
                </div>
              </div>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Roadmap = () => {
  const softSkills = [
    { name: "Team Collaboration", level: "junior", description: "Basic team communication and collaboration" },
    { name: "Time Management", level: "junior", description: "Meeting deadlines and basic project planning" },
    { name: "Problem Solving", level: "mid", description: "Advanced problem analysis and solution design" },
    { name: "Leadership", level: "senior", description: "Team leadership and mentoring junior developers" },
    { name: "Communication", level: "mid", description: "Clear technical communication with stakeholders" }
  ];

  const coreTech = [
    { name: "HTML5", level: "junior", description: "Semantic HTML, Forms, Accessibility" },
    { name: "CSS3", level: "junior", description: "Layouts, Flexbox, Grid, Responsive Design" },
    { name: "JavaScript", level: "junior", description: "ES6+, DOM manipulation, Async programming" },
    { name: "SCSS", level: "mid", description: "Advanced styling and architecture" },
    { name: "CSS Modules", level: "mid" },
    { name: "Tailwind CSS", level: "mid" }
  ];

  const frameworks = [
    { name: "React Fundamentals", level: "junior", description: "Components, Props, State, Hooks" },
    { name: "React Router", level: "junior" },
    { name: "Redux", level: "mid", description: "State management and architecture" },
    { name: "Next.js", level: "mid", description: "Server-side rendering and routing" },
    { name: "Advanced React Patterns", level: "senior" },
    { name: "Performance Optimization", level: "senior" }
  ];

  const styling = [
    { name: "Material UI", level: "junior" },
    { name: "Styled Components", level: "mid" },
    { name: "Chakra UI", level: "mid" },
    { name: "Advanced Theming", level: "senior" },
    { name: "Custom Design Systems", level: "senior" }
  ];

  const testing = [
    { name: "Jest Basics", level: "junior" },
    { name: "React Testing Library", level: "mid" },
    { name: "Cypress", level: "mid" },
    { name: "TDD", level: "senior" },
    { name: "Testing Architecture", level: "senior" }
  ];

  const buildTools = [
    { name: "npm/yarn", level: "junior" },
    { name: "Webpack Basics", level: "mid" },
    { name: "Vite", level: "mid" },
    { name: "Build Optimization", level: "senior" }
  ];

  const other = [
    { name: "Git Basics", level: "junior" },
    { name: "REST APIs", level: "junior" },
    { name: "GraphQL", level: "mid" },
    { name: "Docker", level: "senior" },
    { name: "CI/CD", level: "senior" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-[rgb(25,114,101)]">
          Frontend Development Roadmap
        </h1>
        <div className="flex gap-4 mb-4">
          <span className="flex items-center gap-1 text-sm">
            <div className="w-3 h-3 rounded bg-emerald-200"></div>
            Junior Level
          </span>
          <span className="flex items-center gap-1 text-sm">
            <div className="w-3 h-3 rounded bg-yellow-200"></div>
            Mid Level
          </span>
          <span className="flex items-center gap-1 text-sm">
            <div className="w-3 h-3 rounded bg-red-200"></div>
            Senior Level
          </span>
        </div>
      </div>

      <RoadmapSection title="Soft Skills" items={softSkills} icon={Users} />
      <RoadmapSection title="Core Technologies" items={coreTech} icon={Code} />
      <RoadmapSection title="Frameworks and Libraries" items={frameworks} icon={BookOpen} />
      <RoadmapSection title="Styling Libraries" items={styling} icon={Pencil} />
      <RoadmapSection title="Testing" items={testing} icon={Settings} />
      <RoadmapSection title="Build Tools" items={buildTools} icon={Boxes} />
      <RoadmapSection title="Other Technologies" items={other} icon={Globe} />

      <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-[rgb(25,114,101)]">Level Requirements Summary</h3>
        <div className="space-y-4">
          <div className="p-3 bg-emerald-100 rounded">
            <h4 className="font-semibold">Junior Frontend Developer</h4>
            <p className="text-sm text-gray-700">Strong fundamentals in HTML, CSS, JavaScript, basic React, version control, and team collaboration.</p>
          </div>
          <div className="p-3 bg-yellow-100 rounded">
            <h4 className="font-semibold">Mid-Level Frontend Developer</h4>
            <p className="text-sm text-gray-700">Advanced React patterns, state management, testing, build tools, and stronger soft skills.</p>
          </div>
          <div className="p-3 bg-red-100 rounded">
            <h4 className="font-semibold">Senior Frontend Developer</h4>
            <p className="text-sm text-gray-700">Architecture decisions, performance optimization, team leadership, mentoring, and advanced technical skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;