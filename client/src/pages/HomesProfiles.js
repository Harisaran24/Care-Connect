import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/HomesProfiles.css";

// Reuse your communityHomes data
const communityHomes = [
  { id: 1, name: "Sunshine Orphanage", type: "orphanage", residents: 50, image: "/assets/images/o1.jpg" },
  { id: 2, name: "Grace Old Age Home", type: "elderly", residents: 25, image: "/assets/images/EH2.webp" },
  // ... (all your other homes)
];

// Sample residents data (expand with real data)
const allResidents = {
  1: [
    { id: 1, name: "Nithish", age: 6, image: "/assets/images/b1.jpg", needs: "Medical support" },
    { id: 2, name: "Meeran", age: 7, image: "/assets/images/b2.jpg", needs: "TB treatment" }
  ],
  2: [
    { id: 3, name: "Rajesh", age: 68, image: "/assets/images/bo1.jpg", needs: "Cancer treatment" }
  ],
  // Add for all homes
};

const HomesProfiles = () => {
  const [selectedHome, setSelectedHome] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="homes-profiles-container">
      {/* Fixed Background */}
      <div className="fixed-bg"></div>

      {/* Homes Selection Sidebar */}
      <div className="homes-sidebar">
        <h2>Our Homes</h2>
        <div className="homes-list">
          {communityHomes.map(home => (
            <div 
              key={home.id} 
              className={`home-item ${selectedHome?.id === home.id ? 'active' : ''}`}
              onClick={() => setSelectedHome(home)}
            >
              <img src={home.image} alt={home.name} />
              <h3>{home.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Profiles Display Area */}
      <div className="profiles-main">
        {selectedHome ? (
          <>
            <div className="home-header">
              <h1>{selectedHome.name}</h1>
              <button 
                className="btn-donate"
                onClick={() => navigate('/donate', { state: { homeId: selectedHome.id } })}
              >
                Donate to This Home
              </button>
            </div>

            <div className="residents-grid">
              {allResidents[selectedHome.id]?.map(resident => (
                <div key={resident.id} className="resident-card">
                  <img src={resident.image} alt={resident.name} />
                  <h3>{resident.name}, {resident.age}</h3>
                  <p>{resident.needs}</p>
                  <button 
                    className="btn-sponsor"
                    onClick={() => navigate('/donate', { 
                      state: { 
                        beneficiaryId: resident.id,
                        homeId: selectedHome.id
                      } 
                    })}
                  >
                    Sponsor
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="select-prompt">
            <h2>← Select a home to view profiles</h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default HomesProfiles; // Should be at the bottom of HomesProfiles.js