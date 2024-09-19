// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";
// import "./Userdashboard.css";
// export const Userdashboard = () => {
//   const [bookedServices, setBookedServices] = useState([]); // New state for booked services
//   const [currentSection, setCurrentSection] = useState("Dashboard");
//   const [personalInfo, setPersonalInfo] = useState({
//     name: "Sivanesh",
//     address: "Panaiyur",
//     pincode: "625009",
//     email: "22suit15@tcarts.in",
//   });

  
//   const [username, setUsername] = useState(personalInfo.name); // New state for username
//   const handlePersonalInfoChange = (event) => {
//     const { name, value } = event.target;
//     setPersonalInfo({ ...personalInfo, [name]: value });
//   };
  
//   const handleSavePersonalInfo = () => {
//     // You can add logic here to save the personal info to a database or local storage
//     setUsername(personalInfo.name);
//     console.log(personalInfo);
//   };
//   const handleBookService = (service) => {
//     const newBookedServices = [...bookedServices, service];
//     setBookedServices(newBookedServices);
//     localStorage.setItem("bookedServices", JSON.stringify(newBookedServices));
//   };
//   useEffect(() => {
//     const storedBookedServices = localStorage.getItem("bookedServices");
//     if (storedBookedServices) {
//       const parsedBookedServices = JSON.parse(storedBookedServices);
//       setBookedServices(parsedBookedServices);
//     }
//   }, []);
//   const handleFinishService = (index) => {
//     const newBookedServices = [...bookedServices];
//     newBookedServices.splice(index, 1);
//     setBookedServices(newBookedServices);
//     localStorage.setItem("bookedServices", JSON.stringify(newBookedServices));
//   };
//   const [selectedService, setSelectedService] = useState("All Services"); // New state for selected service
//   const [selectedLocation, setSelectedLocation] = useState("Default");
//   const [selectedRating, setSelectedRating] = useState("Default");
//   const [workers, setWorkers] = useState([
//     // Sample worker data
//     {
//       id: 1,
//       name: "Susan Jackson",
//       service: "System",
//       location: "Pune",
//       rating: 4.9,
//     },
//     {
//       id: 2,
//       name: "Linda Anderson",
//       service: "RO",
//       location: "Coimbatore",
//       rating: 4.8,
//     },
//     {
//       id: 3,
//       name: "Robert Brown",
//       service: "Cleaning",
//       location: "Chennai",
//       rating: 4.7,
//     },
//     {
//       id: 4,
//       name: "Linda Anderson",
//       service: "Plumbing",
//       location: "Ahmedabad",
//       rating: 4.2,
//     },
//     {
//       id: 5,
//       name: "Laura Wilson",
//       service: "Electrical",
//       location: "Delhi",
//       rating: 4.1,
//     },
//     {
//       id: 6,
//       name: "Emily Davis",
//       service: "System",
//       location: "Mumbai",
//       rating: 4.2,
//     },
//     {
//       id: 7,
//       name: "John Doe",
//       service: "Plumbing",
//       location: "Delhi",
//       rating: 4.4,
//     },
//     {
//       id: 8,
//       name: "David Miller",
//       service: "Washing Machine",
//       location: "Madurai",
//       rating: 4.8,
//     },
//     {
//       id: 9,
//       name: "Laura Wilson",
//       service: "AC",
//       location: "Madurai",
//       rating: 4.8,
//     },
//     {
//       id: 10,
//       name: "Laura Wilson",
//       service: "Cleaning",
//       location: "Kolkata",
//       rating: 4.5,
//     },
//     {
//       id: 11,
//       name: "Michael Johnson",
//       service: "Electrical",
//       location: "Hyderabad",
//       rating: 4.2,
//     },
//     {
//       id: 12,
//       name: "John Doe",
//       service: "RO",
//       location: "Bangalore",
//       rating: 4.6,
//     },
//     {
//       id: 13,
//       name: "Linda Anderson",
//       service: "Installation",
//       location: "Coimbatore",
//       rating: 4.7,
//     },
//     {
//       id: 14,
//       name: "Jane Smith",
//       service: "System",
//       location: "Chennai",
//       rating: 4.1,
//     },
//     {
//       id: 15,
//       name: "Linda Anderson",
//       service: "Electrical",
//       location: "Hyderabad",
//       rating: 4.7,
//     },
//     {
//       id: 16,
//       name: "Laura Wilson",
//       service: "System",
//       location: "Delhi",
//       rating: 4.0,
//     },
//     {
//       id: 17,
//       name: "Susan Jackson",
//       service: "Maintenance",
//       location: "Chennai",
//       rating: 4.6,
//     },
//     {
//       id: 18,
//       name: "John Doe",
//       service: "RO",
//       location: "Kolkata",
//       rating: 4.9,
//     },
//     {
//       id: 19,
//       name: "Robert Brown",
//       service: "Television",
//       location: "Bangalore",
//       rating: 4.8,
//     },
//     {
//       id: 20,
//       name: "Linda Anderson",
//       service: "Maintenance",
//       location: "Hyderabad",
//       rating: 4.0,
//     },
//     {
//       id: 21,
//       name: "Michael Johnson",
//       service: "Installation",
//       location: "Delhi",
//       rating: 4.1,
//     },
//     {
//       id: 22,
//       name: "David Miller",
//       service: "Installation",
//       location: "Pune",
//       rating: 4.3,
//     },
//     {
//       id: 23,
//       name: "John Doe",
//       service: "Plumbing",
//       location: "Mumbai",
//       rating: 4.5,
//     },
//     {
//       id: 24,
//       name: "Linda Anderson",
//       service: "Washing Machine",
//       location: "Hyderabad",
//       rating: 4.1,
//     },
//     {
//       id: 25,
//       name: "Robert Brown",
//       service: "Cleaning",
//       location: "Bangalore",
//       rating: 4.0,
//     },
//     {
//       id: 26,
//       name: "Emily Davis",
//       service: "RO",
//       location: "Madurai",
//       rating: 4.7,
//     },
//     {
//       id: 27,
//       name: "Mark Taylor",
//       service: "Washing Machine",
//       location: "Pune",
//       rating: 4.9,
//     },
//     {
//       id: 28,
//       name: "Michael Johnson",
//       service: "Washing Machine",
//       location: "Delhi",
//       rating: 4.9,
//     },
//     {
//       id: 29,
//       name: "Linda Anderson",
//       service: "AC",
//       location: "Bangalore",
//       rating: 4.1,
//     },
//     {
//       id: 30,
//       name: "Laura Wilson",
//       service: "Plumbing",
//       location: "Ahmedabad",
//       rating: 4.6,
//     },
//     {
//       id: 31,
//       name: "Susan Jackson",
//       service: "Television",
//       location: "Coimbatore",
//       rating: 4.1,
//     },
//     {
//       id: 32,
//       name: "David Miller",
//       service: "Television",
//       location: "Madurai",
//       rating: 4.2,
//     },
//     {
//       id: 33,
//       name: "John Doe",
//       service: "Electrical",
//       location: "Hyderabad",
//       rating: 4.5,
//     },
//     {
//       id: 34,
//       name: "Michael Johnson",
//       service: "Television",
//       location: "Mumbai",
//       rating: 4.3,
//     },
//     {
//       id: 35,
//       name: "Susan Jackson",
//       service: "Maintenance",
//       location: "Pune",
//       rating: 4.2,
//     },
//     {
//       id: 36,
//       name: "Michael Johnson",
//       service: "Maintenance",
//       location: "Ahmedabad",
//       rating: 4.8,
//     },
//     {
//       id: 37,
//       name: "John Doe",
//       service: "Installation",
//       location: "Coimbatore",
//       rating: 4.3,
//     },
//     {
//       id: 38,
//       name: "Laura Wilson",
//       service: "Washing Machine",
//       location: "Kolkata",
//       rating: 4.8,
//     },
//     {
//       id: 39,
//       name: "David Miller",
//       service: "Cleaning",
//       location: "Kolkata",
//       rating: 4.9,
//     },
//     {
//       id: 40,
//       name: "Jane Smith",
//       service: "Plumbing",
//       location: "Ahmedabad",
//       rating: 4.2,
//     },
//     {
//       id: 41,
//       name: "Laura Wilson",
//       service: "RO",
//       location: "Chennai",
//       rating: 4.0,
//     },
//     {
//       id: 42,
//       name: "Linda Anderson",
//       service: "RO",
//       location: "Mumbai",
//       rating: 4.1,
//     },
//     {
//       id: 43,
//       name: "Emily Davis",
//       service: "Plumbing",
//       location: "Chennai",
//       rating: 4.0,
//     },
//     {
//       id: 44,
//       name: "Michael Johnson",
//       service: "Washing Machine",
//       location: "Kolkata",
//       rating: 3.9,
//     },
//     {
//       id: 45,
//       name: "Susan Jackson",
//       service: "RO",
//       location: "Coimbatore",
//       rating: 4.1,
//     },
//     {
//       id: 46,
//       name: "Mark Taylor",
//       service: "AC",
//       location: "Mumbai",
//       rating: 4.0,
//     },
//     {
//       id: 47,
//       name: "Robert Brown",
//       service: "Plumbing",
//       location: "Mumbai",
//       rating: 4.1,
//     },
//     {
//       id: 48,
//       name: "Laura Wilson",
//       service: "AC",
//       location: "Chennai",
//       rating: 4.5,
//     },
//     {
//       id: 49,
//       name: "Linda Anderson",
//       service: "RO",
//       location: "Hyderabad",
//       rating: 4.2,
//     },
//     {
//       id: 50,
//       name: "John Doe",
//       service: "Cleaning",
//       location: "Pune",
//       rating: 4.1,
//     },

//     // Add more workers here...
//   ]);
//   const services = [
//     { title: "Electrical", description: "Reliable electrical services." },
//     { title: "Plumbing", description: "Expert plumbing services." },
//     {
//       title: "Installation",
//       description: "Professional installation services.",
//     },
//     {
//       title: "Maintenance",
//       description: "Regular equipment maintenance services.",
//     },
//     {
//       title: "Television",
//       description: "TV repair and installation services.",
//     },
//     { title: "System", description: "Computer system repair services." },
//     { title: "AC", description: "Air conditioning services." },
//     { title: "RO", description: "RO purifier installation and services." },
//     { title: "Washing Machine", description: "Washing machine services." },
//     { title: "Refrigerator", description: "Refrigerator services." },
//     { title: "Microwave Oven", description: "Microwave oven services." },
//     { title: "Cleaning", description: "Home and office cleaning services." },
//   ];
//   const getRatingValue = (rating) => {
//     switch (rating) {
//       case "more than 4.5":
//         return [4.5, 5];
//       case "more than 4.0":
//         return [4.0, 4.5];
//       case "more than 3.5":
//         return [3.5, 4.0];
//       default:
//         return [0, 5];
//     }
//   };
//   const filteredWorkers = workers.filter((worker) => {
//     const [minRating, maxRating] = getRatingValue(selectedRating);

//     return (
//       (selectedService === "All Services" ||
//         worker.service === selectedService) &&
//       (selectedLocation === "Default" ||
//         worker.location === selectedLocation) &&
//       worker.rating >= minRating &&
//       worker.rating <= maxRating
//     );
//   });
//   // Render different content based on the current section
//   const renderContent = () => {
//     switch (currentSection) {
//       case "Dashboard":
//         return (
//           <>
//             <div className="userdash-header">
//               <div className="banner"></div>
//               {/* <img src={UserProfile} id="user-profile"/> */}
//               <i class="fa-solid fa-circle-user"></i>
//               <h3>{username}</h3>
//             </div>
//             <h2 className="heading">Ongoing Works</h2>
//             <div className="ongoing-works">
//               {bookedServices.length > 0 ? (
//                 bookedServices.map((service, index) => (
//                   <div className="booked-service-card" key={index}>
//                     <h3>{service.name}</h3>
//                     <p>Service: {service.service}</p>
//                     <p>Location: {service.location}</p>
//                     <p>Rating: {service.rating}</p>
//                     <button onClick={() => handleFinishService(index)}>
//                       Finished
//                     </button>
//                   </div>
//                 ))
//               ) : (
//                 <div className="no-ongoing-works">
//                   <p>No ongoing works.</p>
//                 </div>
//               )}
//             </div>
//           </>
//         );
//       case "Services":
//         return (
//           <>
//             <div className="services-page-dash">
//               <h2>{selectedService}</h2>
//               <div className="dropdowns">
//                 <select
//                   value={selectedService}
//                   onChange={(e) => setSelectedService(e.target.value)}
//                 >
//                   <option value="All Services">All Services</option>
//                   {services.map((service, index) => (
//                     <option key={index} value={service.title}>
//                       {service.title}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   value={selectedLocation}
//                   onChange={(e) => setSelectedLocation(e.target.value)}
//                 >
//                   <option value="Default">By Location</option>
//                   <option value="Near me">Near Me</option>
//                   <option value="Madurai">Madurai</option>
//                   <option value="Chennai">Chennai</option>
//                   <option value="Bangalore">Bangalore</option>
//                 </select>
//                 <select
//                   value={selectedRating}
//                   onChange={(e) => setSelectedRating(e.target.value)}
//                 >
//                   <option value="Default">Ratings</option>
//                   <option value="more than 4.5">More than 4.5</option>
//                   <option value="more than 4.0">More than 4.0</option>
//                   <option value="more than 3.5">More than 3.5</option>
//                 </select>
//               </div>
//               <div className="services-grid-dash">
//                 {filteredWorkers.length > 0 ? (
//                   filteredWorkers.map((worker, index) => (
//                     <div className="worker-card" key={index}>
//                       <i class="fa-solid fa-circle-user"></i>
//                       <h3>{worker.name}</h3>
//                       <p>Service: {worker.service}</p>
//                       <p>Location: {worker.location}</p>
//                       <p>Rating: {worker.rating}</p>
//                       <button onClick={() => handleBookService(worker)}>
//                         Book Now
//                       </button>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="no-results">
//                     <p>No results found.</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </>
//         );
//       case "Payment":
//         return <div>Payment Content</div>;
//       default:
//         return <div>Select a section from the sidebar.</div>;
//     }
//   };

//   return (
//     <>
//       <div className="user-dashboard">
//         {/* Sidebar */}
//         <div className="sidebar">
//           <h3 className="logo">
//             <i class="fa-solid fa-screwdriver-wrench"></i> LOCOS
//           </h3>
//           <ul>
//             <li
//               className={currentSection === "Dashboard" ? "active" : ""}
//               onClick={() => setCurrentSection("Dashboard")}
//             >
//               <i class="fa-solid fa-chart-simple"></i> &nbsp; Dashboard
//             </li>
//             <li
//               className={currentSection === "Services" ? "active" : ""}
//               onClick={() => setCurrentSection("Services")}
//             >
//               <i class="fa-solid fa-wrench"></i> &nbsp; Services
//             </li>
//             <li
//               className={currentSection === "Payment" ? "active" : ""}
//               onClick={() => setCurrentSection("Payment")}
//             >
//               <i class="fa-solid fa-sack-dollar"></i> &nbsp; Payment
//             </li>
//             <Link to="/">
//               <li>
//                 <i class="fa-solid fa-right-from-bracket"></i> &nbsp; Logout
//               </li>
//             </Link>
//           </ul>
//         </div>
//         {/* Main Content */}
//         <div className="main-content">{renderContent()}</div>
//       </div>
//     </>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Userdashboard.css";

export const Userdashboard = () => {
  const [bookedServices, setBookedServices] = useState([]); // State for booked services
  const [currentSection, setCurrentSection] = useState("Dashboard");
  const [username, setUsername] = useState('');
  // const [personalInfo, setPersonalInfo] = useState({
  //   name:localStorage.getItem('username')
  // });
 
  // const handleSavePersonalInfo = () => {
  //   setUsername(personalInfo.name);
  //   console.log(personalInfo);
  // };

  const handleBookService = (service) => {
    const newBookedServices = [...bookedServices, service];
    setBookedServices(newBookedServices);
    localStorage.setItem("bookedServices", JSON.stringify(newBookedServices));
  };
  console.log(localStorage.getItem('username'));
  useEffect(() => {
    console.log('useeffect trigered')
     // Fetch the username from localStorage when the component mounts
     const storedUsername = localStorage.getItem("username");
    // Check in browser console or DevTools:

console.log('fetched username',storedUsername)
     if (storedUsername) {
       setUsername(storedUsername);
     }


    const storedBookedServices = localStorage.getItem("bookedServices");
    if (storedBookedServices) {
      const parsedBookedServices = JSON.parse(storedBookedServices);
      setBookedServices(parsedBookedServices);
    }
  }, []);

  const handleFinishService = (index) => {
    const newBookedServices = [...bookedServices];
    newBookedServices.splice(index, 1);
    setBookedServices(newBookedServices);
    localStorage.setItem("bookedServices", JSON.stringify(newBookedServices));
  };

  // Render different content based on the current section
  const renderContent = () => {
    switch (currentSection) {
      case "Dashboard":
        return (
          <>
            <div className="userdash-header">
              <div className="banner"></div>
              <i className="fa-solid fa-circle-user"></i>
              <h3>{username}</h3>
            </div>
            <h2 className="heading">Ongoing Works</h2>
            <div className="ongoing-works">
              {bookedServices.length > 0 ? (
                bookedServices.map((service, index) => (
                  <div className="booked-service-card" key={index}>
                    <h3>{service.name}</h3>
                    <p>Service: {service.service}</p>
                    <p>Location: {service.location}</p>
                    <p>Rating: {service.rating}</p>
                    <button onClick={() => handleFinishService(index)}>
                      Finished
                    </button>
                  </div>
                ))
              ) : (
                <div className="no-ongoing-works">
                  <p>No ongoing works.</p>
                </div>
              )}
            </div>
          </>
        );
      case "Services":
        return (
          <>
            <div className="services-page-dash">
              <h2>Services</h2>
              <p>Service options will be available soon.</p>
            </div>
          </>
        );
      case "Payment":
        return <div>Payment Content</div>;
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <>
      <div className="user-dashboard">
        {/* Sidebar */}
        <div className="sidebar">
          <h3 className="logo">
            <i className="fa-solid fa-screwdriver-wrench"></i> LOCOS
          </h3>
          <ul>
            <li
              className={currentSection === "Dashboard" ? "active" : ""}
              onClick={() => setCurrentSection("Dashboard")}
            >
              <i className="fa-solid fa-chart-simple"></i> &nbsp; Dashboard
            </li>
            <li
              className={currentSection === "Services" ? "active" : ""}
              onClick={() => setCurrentSection("Services")}
            >
              <i className="fa-solid fa-wrench"></i> &nbsp; Services
            </li>
            <li
              className={currentSection === "Payment" ? "active" : ""}
              onClick={() => setCurrentSection("Payment")}
            >
              <i className="fa-solid fa-sack-dollar"></i> &nbsp; Payment
            </li>
            <Link to="/">
              <li>
                <i className="fa-solid fa-right-from-bracket"></i> &nbsp; Logout
              </li>
            </Link>
          </ul>
        </div>
        {/* Main Content */}
        <div className="main-content">{renderContent()}</div>
      </div>
    </>
  );
};
