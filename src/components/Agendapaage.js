
export default function AgendaPage() {
  // Independent vertical cards data (3 items)
  const verticalCards = [
    {
      title: "Global Network",
      description: "Connect with professionals worldwide",
      icon: "/images/network.png",
    },
    {
      title: "Event Schedule",
      description: "Carefully planned sessions timeline",
      icon: "/images/network.png",
    },
    {
      title: "Community",
      description: "Join our growing network",
      icon: "/images/network.png",
    },
  ];

  // Original agenda items (keep exactly as in original prompt)
  const agendaItems = [
    {
      number: "01",
      title: "Credible Messengers",
      subtitle: "Lived Experience Mentorship",
      description: "Learn how our Credible Messengers use their personal stories to guide, mentor, and inspire youth across communities.",
      icon: "/images/globe.png",
    },
    {
      number: "02",
      title: "Building Community",
      subtitle: "Team & Trust",
      description: "Discover how our team builds connection through community outings, shared experiences, and strong support systems.",
      icon: "/images/icon2.png",
    },
    {
      number: "03",
      title: "Youth Advisory Panel",
      subtitle: " Leadership in Action",
      description: "See our youth leaders present bold ideas and real-world solutions to justice challenges at our Momentum Team meetings.",
      icon: "/images/calendar.png",
    },
    {
      number: "04",
      title: "Future Pathways",
      subtitle: "Skills & Careers",
      description: "Guidance on exploring opportunities like LinkedIn, GitHub, and Google tools to build professional success stories.",
      icon: "/images/bar-chart.png",
    },
    {
      number: "05",
      title: "Credible Messengers",
      subtitle: "Lived Experience Mentorship",
      description: "Learn how our Credible Messengers use their personal stories to guide, mentor, and inspire youth across communities.",
      icon: "/images/chat.png",
    },
    {
      number: "06",
      title: "Digital Advocacy",
      subtitle: "hare, Speak, Support",
      description: "Explore how we use social media platforms to elevate youth voices, spread awareness, and connect with allies.",
      icon: "/images/global-network.png",
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4 text-white">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {/* Vertical Cards on Left (3 items) */}
        <div className="w-full md:w-1/4 flex flex-col gap-6">
          <h2 className="text-2xl font-bold mb-4 border-b border-white/30 pb-2 text-center">Event Features</h2>
          {verticalCards.map((card, index) => (
            <div
              key={`vertical-${index}`}
              className="bg-transparent p-6 rounded-lg border-2 border-white hover:border-white transition-all duration-300 hover:bg-white/5 cursor-pointer flex flex-col items-center text-center"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-12 h-12 object-contain mb-4"  // Increased size to 48px
              />
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-white/80 text-sm">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Original Arrow Cards on Right (unchanged from original prompt) */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-bold mb-4 border-b border-white/30 pb-2">Empowerment Sessions</h2>
          {agendaItems.map((item, index) => (
            <div key={`original-${index}`} className="relative group">
              {/* Main card with arrow shape */}
              <div
                className="relative flex items-center bg-white p-5 border-l-20 border-blue-600 shadow-lg shadow-white/20 z-10"
                style={{
                  clipPath: 'polygon(0% 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 0% 100%)'
                }}
              >
                <div className="text-3xl font-bold text-blue-600 w-16">{item.number}</div>
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <h4 className="text-md font-semibold text-gray-700">{item.subtitle}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="text-blue-500 text-6xl mr-6 opacity-90">
                  <img src={item.icon} alt={item.title} className="w-20 h-20" />
                </div>
              </div>

              {/* Blue arrow overlay */}
              <div
                className="absolute right-0 top-0 h-full w-9 bg-blue-600 z-0"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)',
                  right: '-8px'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}