import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Userdashboard.css";
export const Userdashboard = () => {
  const [bookedServices, setBookedServices] = useState([]); // New state for booked services
  const [currentSection, setCurrentSection] = useState("Dashboard");
  const [personalInfo, setPersonalInfo] = useState({
    name: "CharanGuru",
    address: "Keelamasi veethi, Madurai, TamilNadu",
    pincode: "625009",
    email: "charanguru04@gmail.com",
  });
  const [username, setUsername] = useState(personalInfo.name); // New state for username
  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  const handleSavePersonalInfo = () => {
    // You can add logic here to save the personal info to a database or local storage
    setUsername(personalInfo.name);
    console.log(personalInfo);
  };
  const handleBookService = (service) => {
    setBookedServices([...bookedServices, service]);
  };
  const [selectedService, setSelectedService] = useState("All Services"); // New state for selected service
  const [selectedLocation, setSelectedLocation] = useState("Default"); // New state for selected location
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("Default"); // New state for selected price filter
  const [workers, setWorkers] = useState([
    // Sample worker data
    {
      id: 1,
      name: "Susan Jackson",
      service: "System",
      location: "Pune",
      price: 1009,
    },
    {
      id: 2,
      name: "Linda Anderson",
      service: "RO",
      location: "Coimbatore",
      price: 1108,
    },
    {
      id: 3,
      name: "Robert Brown",
      service: "Cleaning",
      location: "Chennai",
      price: 1927,
    },
    {
      id: 4,
      name: "Linda Anderson",
      service: "Plumbing",
      location: "Ahmedabad",
      price: 322,
    },
    {
      id: 5,
      name: "Laura Wilson",
      service: "Electrical",
      location: "Delhi",
      price: 1991,
    },
    {
      id: 6,
      name: "Emily Davis",
      service: "System",
      location: "Mumbai",
      price: 1102,
    },
    {
      id: 7,
      name: "John Doe",
      service: "Plumbing",
      location: "Delhi",
      price: 1704,
    },
    {
      id: 8,
      name: "David Miller",
      service: "Washing Machine",
      location: "Madurai",
      price: 538,
    },
    {
      id: 9,
      name: "Laura Wilson",
      service: "AC",
      location: "Madurai",
      price: 1818,
    },
    {
      id: 10,
      name: "Laura Wilson",
      service: "Cleaning",
      location: "Kolkata",
      price: 875,
    },
    {
      id: 11,
      name: "Michael Johnson",
      service: "Electrical",
      location: "Hyderabad",
      price: 502,
    },
    {
      id: 12,
      name: "John Doe",
      service: "RO",
      location: "Bangalore",
      price: 866,
    },
    {
      id: 13,
      name: "Linda Anderson",
      service: "Installation",
      location: "Coimbatore",
      price: 767,
    },
    {
      id: 14,
      name: "Jane Smith",
      service: "System",
      location: "Chennai",
      price: 331,
    },
    {
      id: 15,
      name: "Linda Anderson",
      service: "Electrical",
      location: "Hyderabad",
      price: 1367,
    },
    {
      id: 16,
      name: "Laura Wilson",
      service: "System",
      location: "Delhi",
      price: 430,
    },
    {
      id: 17,
      name: "Susan Jackson",
      service: "Maintenance",
      location: "Chennai",
      price: 686,
    },
    {
      id: 18,
      name: "John Doe",
      service: "RO",
      location: "Kolkata",
      price: 617,
    },
    {
      id: 19,
      name: "Robert Brown",
      service: "Television",
      location: "Bangalore",
      price: 575,
    },
    {
      id: 20,
      name: "Linda Anderson",
      service: "Maintenance",
      location: "Hyderabad",
      price: 389,
    },
    {
      id: 21,
      name: "Michael Johnson",
      service: "Installation",
      location: "Delhi",
      price: 1395,
    },
    {
      id: 22,
      name: "David Miller",
      service: "Installation",
      location: "Pune",
      price: 1986,
    },
    {
      id: 23,
      name: "John Doe",
      service: "Plumbing",
      location: "Mumbai",
      price: 1674,
    },
    {
      id: 24,
      name: "Linda Anderson",
      service: "Washing Machine",
      location: "Hyderabad",
      price: 300,
    },
    {
      id: 25,
      name: "Robert Brown",
      service: "Cleaning",
      location: "Bangalore",
      price: 1632,
    },
    {
      id: 26,
      name: "Emily Davis",
      service: "RO",
      location: "Madurai",
      price: 465,
    },
    {
      id: 27,
      name: "Mark Taylor",
      service: "Washing Machine",
      location: "Pune",
      price: 1467,
    },
    {
      id: 28,
      name: "Michael Johnson",
      service: "Washing Machine",
      location: "Delhi",
      price: 360,
    },
    {
      id: 29,
      name: "Linda Anderson",
      service: "AC",
      location: "Bangalore",
      price: 1131,
    },
    {
      id: 30,
      name: "Laura Wilson",
      service: "Plumbing",
      location: "Ahmedabad",
      price: 1612,
    },
    {
      id: 31,
      name: "Susan Jackson",
      service: "Television",
      location: "Coimbatore",
      price: 847,
    },
    {
      id: 32,
      name: "David Miller",
      service: "Television",
      location: "Madurai",
      price: 423,
    },
    {
      id: 33,
      name: "John Doe",
      service: "Electrical",
      location: "Hyderabad",
      price: 438,
    },
    {
      id: 34,
      name: "Michael Johnson",
      service: "Television",
      location: "Mumbai",
      price: 596,
    },
    {
      id: 35,
      name: "Susan Jackson",
      service: "Maintenance",
      location: "Pune",
      price: 613,
    },
    {
      id: 36,
      name: "Michael Johnson",
      service: "Maintenance",
      location: "Ahmedabad",
      price: 379,
    },
    {
      id: 37,
      name: "John Doe",
      service: "Installation",
      location: "Coimbatore",
      price: 1873,
    },
    {
      id: 38,
      name: "Laura Wilson",
      service: "Washing Machine",
      location: "Kolkata",
      price: 819,
    },
    {
      id: 39,
      name: "David Miller",
      service: "Cleaning",
      location: "Kolkata",
      price: 1163,
    },
    {
      id: 40,
      name: "Jane Smith",
      service: "Plumbing",
      location: "Ahmedabad",
      price: 486,
    },
    {
      id: 41,
      name: "Laura Wilson",
      service: "RO",
      location: "Chennai",
      price: 374,
    },
    {
      id: 42,
      name: "Linda Anderson",
      service: "RO",
      location: "Mumbai",
      price: 754,
    },
    {
      id: 43,
      name: "Emily Davis",
      service: "Plumbing",
      location: "Chennai",
      price: 956,
    },
    {
      id: 44,
      name: "Michael Johnson",
      service: "Washing Machine",
      location: "Kolkata",
      price: 509,
    },
    {
      id: 45,
      name: "Susan Jackson",
      service: "RO",
      location: "Coimbatore",
      price: 1177,
    },
    {
      id: 46,
      name: "Mark Taylor",
      service: "AC",
      location: "Mumbai",
      price: 864,
    },
    {
      id: 47,
      name: "Robert Brown",
      service: "Plumbing",
      location: "Mumbai",
      price: 1887,
    },
    {
      id: 48,
      name: "Laura Wilson",
      service: "AC",
      location: "Chennai",
      price: 472,
    },
    {
      id: 49,
      name: "Linda Anderson",
      service: "RO",
      location: "Hyderabad",
      price: 572,
    },
    {
      id: 50,
      name: "John Doe",
      service: "Cleaning",
      location: "Pune",
      price: 1595,
    },

    // Add more workers here...
  ]);
  const services = [
    { title: "Electrical", description: "Reliable electrical services." },
    { title: "Plumbing", description: "Expert plumbing services." },
    {
      title: "Installation",
      description: "Professional installation services.",
    },
    {
      title: "Maintenance",
      description: "Regular equipment maintenance services.",
    },
    {
      title: "Television",
      description: "TV repair and installation services.",
    },
    { title: "System", description: "Computer system repair services." },
    { title: "AC", description: "Air conditioning services." },
    { title: "RO", description: "RO purifier installation and services." },
    { title: "Washing Machine", description: "Washing machine services." },
    { title: "Refrigerator", description: "Refrigerator services." },
    { title: "Microwave Oven", description: "Microwave oven services." },
    { title: "Cleaning", description: "Home and office cleaning services." },
  ];
  const filteredWorkers = workers.filter((worker) => {
    if (selectedService === "All Services") return true;
    if (worker.service === selectedService) return true;
    return false;
  });
  // Render different content based on the current section
  const renderContent = () => {
    switch (currentSection) {
      case "Dashboard":
        return (
          <>
            <div className="userdash-header">
              <div className="banner"></div>
              {/* <img src={UserProfile} id="user-profile"/> */}
              <i class="fa-solid fa-circle-user"></i>
              <h3>{username}</h3>
            </div>
          </>
        );
      case "Services":
        return (
          <>
            <div className="services-page-dash">
              <h2>{selectedService}</h2>
              <div className="dropdowns">
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
            
                >
                  <option value="All Services">All Services</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="Default">By Location</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  {/* Add more locations here... */}
                </select>
                <select
                  value={selectedPriceFilter}
                  onChange={(e) => setSelectedPriceFilter(e.target.value)}
            
                >
                  <option value="Default">By Price Filter</option>
                  <option value="Low to High">Low to High</option>
                  <option value="High to Low">High to Low</option>
                </select>
              </div>
              <div className="services-grid-dash">
                {filteredWorkers.map((worker, index) => (
                  <div className="worker-card" key={index}>
                    <i class="fa-solid fa-circle-user"></i>
                    <h3>{worker.name}</h3>
                    <p>Service: {worker.service}</p>
                    <p>Location: {worker.location}</p>
                    <p>Price: ₹{worker.price}</p>
                    <button onClick={() => handleBookService(worker)}>
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
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
            <i class="fa-solid fa-screwdriver-wrench"></i> LOCOS
          </h3>
          <ul>
            <li
              className={currentSection === "Dashboard" ? "active" : ""}
              onClick={() => setCurrentSection("Dashboard")}
            >
              <i class="fa-solid fa-chart-simple"></i> &nbsp; Dashboard
            </li>
            <li
              className={currentSection === "Services" ? "active" : ""}
              onClick={() => setCurrentSection("Services")}
            >
              <i class="fa-solid fa-wrench"></i> &nbsp; Services
            </li>
            <li
              className={currentSection === "Payment" ? "active" : ""}
              onClick={() => setCurrentSection("Payment")}
            >
              <i class="fa-solid fa-sack-dollar"></i> &nbsp; Payment
            </li>
            <Link to="/">
              <li>
                <i class="fa-solid fa-right-from-bracket"></i> &nbsp; Logout
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
