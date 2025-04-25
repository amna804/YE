// // pages/agenda.js
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faGlobe,
//   faHandshake,
//   faCalendarAlt,
//   faBullhorn,
//   faChartLine,
//   faComments
// } from '@fortawesome/free-solid-svg-icons';

// export default function AgendaPaage() {
//   const agendaItems = [
//     {
//       number: "01",
//       title: "BATA",
//       subtitle: "MONSTER",
//       description: "LOCALITY SERVICES",
//       icon: faGlobe,
//     },
//     {
//       number: "02",
//       title: "BATA",
//       subtitle: "MONSTER",
//       description: "LOCALITY SERVICES",
//       icon: faHandshake,
//     },
//     {
//       number: "03",
//       title: "BATA",
//       subtitle: "MONSTER",
//       description: "LOCALITY SERVICES",
//       icon: faCalendarAlt,
//     },
//     {
//       number: "04",
//       title: "BATA",
//       subtitle: "MONSTER",
//       description: "LOCALITY SERVICES",
//       icon: faBullhorn,
//     },
//     {
//       number: "05",
//       title: "BATA",
//       subtitle: "MONSTER",
//       description: "LOCALITY SERVICES",
//       icon: faChartLine,
//     },
//     {
//       number: "06",
//       title: "BATA",
//       subtitle: "MONSTER",
//       description: "LOCALITY SERVICES",
//       icon: faComments,
//     },
//   ];

//   return (
//     <div className="min-h-screen py-10 px-4">
//       <div className="max-w-4xl mx-auto space-y-6">
//         {agendaItems.map((item, index) => (
//           <div key={index} className="relative group">
//             {/* Main card with arrow shape */}
//             <div
//               className="relative flex items-center bg-white p-5 border-l-20 border-blue-600 shadow-lg shadow-white/20 z-10"
//               style={{
//                 clipPath: 'polygon(0% 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 0% 100%)'
//               }}
//             >
//               <div className="text-3xl font-bold text-blue-600 w-16">{item.number}</div>
//               <div className="flex-1 ml-4">
//                 <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
//                 <h4 className="text-md font-semibold text-gray-700">{item.subtitle}</h4>
//                 <p className="text-sm text-gray-600">{item.description}</p>
//               </div>
//               <div className="text-blue-600  text-6xl mr-6">
//                 <FontAwesomeIcon icon={item.icon} />
//               </div>
//             </div>
            
//             {/* Blue arrow overlay */}
//             <div 
//               className="absolute right-0 top-0 h-full w-9 bg-blue-600 z-0"
//               style={{
//                 clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)',
//                 right: '-8px'
//               }}
//             ></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// pages/agenda.js
export default function AgendaPage() {
    const agendaItems = [
      {
        number: "01",
      title: "BATA",
      subtitle: "MONSTER",
       description: "LOCALITY SERVICES",
        icon: "/images/globe.png",  // Use your own SVG path
      },
      {
        number: "02",
        title: "Twitter",
        subtitle: "Microblogging",
        description: "Share your thoughts",
        icon: "/images/icon2.png",  // Use your own SVG path
      },
      {
        number: "03",
        title: "Instagram",
        subtitle: "Photo Sharing",
        description: "Post your moments",
        icon: "/images/calendar.png",  // Use your own SVG path
      },
      {
        number: "04",
        title: "LinkedIn",
        subtitle: "Professional Network",
        description: "Build your career",
        icon: "/images/bar-chart.png",  // Use your own SVG path
      },
      {
        number: "05",
        title: "GitHub",
        subtitle: "Code Hosting",
        description: "Share your projects",
        icon: "images/chat.png",  // Use your own SVG path
      },
      {
        number: "06",
        title: "Google",
        subtitle: "Search Engine",
        description: "Explore information",
        icon: "images/global-network.png",  // Use your own SVG path
      },
    ];
  
    return (
      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {agendaItems.map((item, index) => (
            <div key={index} className="relative group">
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
                  {/* Render SVG icon */}
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
    );
  }
  