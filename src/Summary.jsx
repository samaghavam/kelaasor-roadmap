import React, { useState } from 'react';
import { ChevronRight, Map, Star, Heart, Gift, Sparkles, Award, ArrowRight } from 'lucide-react';

const CongratulationsPage = () => {
  const [activeTab, setActiveTab] = useState('green');
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  const handleClick = () => {
    window.open('https://wisemap.ai/m/mKgV/capture.png', '_blank');
  };

  const tabs = [
    {
      id: 'green',
      title: 'Mastered Skills',
      subtitle: 'what you learned in bootcamp',
      icon: <Star className="w-6 h-6" />,
      content: 'These represent all the awesome content you\'ve already mastered during the bootcamp! Take a moment to feel proud - you\'ve accomplished so much already!',
      bgColor: 'bg-green1',
      borderColor: 'border-green-900',
      textColor: 'text-white'
    },
    {
      id: 'purple',
      title: 'Next Steps',
      subtitle: 'Your Journey Ahead (level 1)',
      icon: <ChevronRight className="w-6 h-6" />,
      content: 'These are your next exciting challenges! Think of them as your "grab a coffee and dive in" topics - they\'re the foundation you\'ll want to tackle first.',
      bgColor: 'bg-blue1',
      borderColor: 'border-blue1',
      textColor: 'text-white'
    },
    {
      id: 'pink',
      title: 'Future Goals',
      subtitle: 'Your Aspirations (level 2)',
      icon: <Heart className="w-6 h-6" />,
      content: 'Consider these your "coming soon" attractions. They\'re important too, but take your time - master the blue box skills first!',
      bgColor: 'bg-pink1',
      borderColor: 'border-pink1-900',
      textColor: 'text-black'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50">
      <div className="max-w-4xl mx-auto p-8">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 opacity-10">
          <Sparkles className="w-64 h-64 text-blue-500" />
        </div>

        {/* Header Section */}
        <div className="mb-16 text-center relative">
          <div className="inline-block">
            <Award className="w-16 h-16 mx-auto mb-4 text-blue-600 animate-pulse" />
            <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
              Kelaasor FrontEnd Roadmap
            </h1>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 space-y-6 transform hover:scale-[1.02] transition-all duration-300">
            <Gift className="w-8 h-8 mx-auto mb-4 text-purple-500" />
            <p className=" text-gray-700 leading-relaxed text-justify text-base">
              Wow, what an incredible journey we've had together! We can't believe how fast our bootcamp flew by - it feels like just yesterday we were all meeting for the first time. You've all brought such amazing energy and unique perspectives to our sessions, and we are genuinely going to miss seeing your bright faces every day!
            </p>
            <p className="text-base text-justify text-gray-700 leading-relaxed">
              But hey, this isn't goodbye - it's just the beginning of your awesome learning adventure! And speaking of adventures, We've got something super cool to share with you: your very own learning roadmap! Think of it as your treasure map to tech success (minus the pirates, unfortunately 😄).
            </p>
          </div>
        </div>

        {/* Custom Tabs Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-purple-500">
            Understanding Your Roadmap Colors
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden transform hover:shadow-2xl transition-all duration-300">
            {/* Tab Headers */}
            <div className="grid grid-cols-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-4 text-center transition-all duration-300 group
                    ${activeTab === tab.id 
                      ? `${tab.bgColor} ${tab.textColor}` 
                      : 'text-gray-500 hover:bg-gray-50'}`}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className={`transform transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                      {tab.icon}
                    </div>
                    <div>
                      <div className="font-bold text-base">{tab.title}</div>
                      <div className="text-xs opacity-75">{tab.subtitle}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="p-8">
              {tabs.map((tab) => (
                activeTab === tab.id && (
                  <div 
                    key={tab.id} 
                    className={`${tab.bgColor} p-8 rounded-2xl border-2 ${tab.borderColor} ${tab.textColor} font-medium text-base leading-relaxed shadow-inner transform transition-all duration-500 hover:scale-[1.02]`}
                  >
                    {tab.content}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>

        {/* View Roadmap Button */}
        <div className="text-center mb-16">
          <button 
            onClick={handleClick}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold px-10 py-5 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <Map className={`w-6 h-6 transition-transform duration-300 ${isButtonHovered ? 'rotate-12' : ''}`} />
            View Your Roadmap
            <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${isButtonHovered ? 'translate-x-2' : ''}`} />
            <span className="absolute -z-10 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></span>
          </button>
        </div>

        {/* Footer Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 text-center transform hover:shadow-2xl transition-all duration-300">
          <div className="max-w-2xl mx-auto space-y-8">
            <Sparkles className="w-8 h-8 mx-auto text-purple-500" />
            <p className="text-base text-justify text-gray-700 leading-relaxed">
              Remember, there's absolutely no race here! Everyone learns differently, and that's what makes this journey so special. Some days you'll feel like a coding superhero, and others you might feel a bit stuck - and that's completely normal and totally okay!
            </p>
            <p className="text-base text-justify text-gray-700 leading-relaxed">
              And hey, just because the bootcamp is over doesn't mean you're on your own. Stuck on something? Confused? Just want to share a win? We are still here cheering you on!
            </p>
            <div className="pt-8 border-t border-gray-200">
              <p className="font-bold text-xl text-gray-800 mb-4">Your proud teacher & mentor,</p>
              <p className="text-lg font-bold text-gray-600">Hosein Soleymani</p>
              <p className="text-lg font-bold text-gray-600 mb-8">Sama Ghavamzadeh</p>
              <p className="text-xs italic text-gray-500">
                P.S. Don't forget to celebrate your wins, both big and small - you're doing something amazing here! 🎉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsPage;