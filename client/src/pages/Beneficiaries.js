import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/Beneficiaries.css";

const Beneficiaries = () => {
  const allBeneficiaries = [
    { id: 1, name: "Nithish", age: 6, type: "child", image: "/assets/images/b1.jpg", description: "Affected by brain injury, needs urgent medical support." },
    { id: 2, name: "Meeran", age: 7, type: "child", image: "/assets/images/b2.jpg", description: "TB detected and needs help for proper treatment." },
    { id: 3, name: "vickey", age: 4, type: "child", image: "/assets/images/b3.webp", description: "Suffering from severe viral fever, requires immediate care." },
    { id: 4, name: "Rahul", age: 5, type: "child", image: "/assets/images/b4.jpg", description: "Born with a nasal defect, requires surgery." },
    { id: 5, name: "Sneha", age: 2, type: "child", image: "/assets/images/b5.jpg", description: "Needs an urgent eye operation to prevent vision loss." },
    { id: 6, name: "Kavya", age: 15, type: "child", image: "/assets/images/b6.jpg", description: "Needs education fund for next term fees to continue studies." },
    { id: 13, name: "Rohan", age: 3, type: "child", image: "/assets/images/b7.webp", description: "Suffering from marasmus, needs nutritional support." },
    { id: 14, name: "Divya", age: 7, type: "child", image: "/assets/images/b8.jpg", description: "Diagnosed with ADHD, needs special education assistance." },
    { id: 7, name: "Rajesh", age: 40, type: "elder", image: "/assets/images/bo1.jpg", description: "Battling mouth cancer, requires extensive treatment." },
    { id: 8, name: "Sita", age: 35, type: "elder", image: "/assets/images/bo2.jpg", description: "Suffering from a severe head injury, needs immediate surgery." },
    { id: 9, name: "Mohan", age: 50, type: "elder", image: "/assets/images/bo3.jpg", description: "Had a stroke, currently in critical condition." },
    { id: 10, name: "Anjali", age: 58, type: "elder", image: "/assets/images/bo4.jpg", description: "Diagnosed with mouth cancer, needs chemotherapy." },
    { id: 11, name: "Venkatesh", age: 24, type: "elder", image: "/assets/images/bo5.webp", description: "Met with an accident, requires multiple surgeries." },
    { id: 12, name: "Ganesan", age: 60, type: "elder", image: "/assets/images/bo6.jpg", description: "Suffering from thyroid issues, needs continuous medication." },
    { id: 15, name: "Veerappan", age: 68, type: "elder", image: "/assets/images/bo7.jpg", description: "Diagnosed with diabetes, requires a leg operation." }
  ];

  const [category, setCategory] = useState("all");
  const navigate = useNavigate();

  const filteredBeneficiaries =
    category === "all"
      ? allBeneficiaries
      : allBeneficiaries.filter((b) => b.type === category);

  const handleDonateClick = (beneficiary) => {
    navigate('/donate', { 
      state: { 
        beneficiaryId: beneficiary.id,
        beneficiaryName: beneficiary.name,
        beneficiaryAge: beneficiary.age,
        beneficiaryDescription: beneficiary.description,
        beneficiaryImage: beneficiary.image
      } 
    });
  };

  return (
    <div className="beneficiaries-container">
      <h2>Meet Our Beneficiaries</h2>
      <p>Your support can change their lives. Sponsor or donate today!</p>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>All</button>
        <button className={category === "child" ? "active" : ""} onClick={() => setCategory("child")}>Children</button>
        <button className={category === "elder" ? "active" : ""} onClick={() => setCategory("elder")}>Elderly</button>
      </div>

      {/* Beneficiaries Grid */}
      <div className="beneficiary-list">
        {filteredBeneficiaries.map((beneficiary) => (
          <div key={beneficiary.id} className="beneficiary-card">
            <img src={beneficiary.image} alt={beneficiary.name} />
            <h3>{beneficiary.name}</h3>
            <p>Age: {beneficiary.age}</p>
            <p className="beneficiary-description">{beneficiary.description}</p>
            <div className="card-actions">
              <Link to={`/beneficiaries/${beneficiary.id}`}>
                <button className="btn-sponsor">View Profile</button>
              </Link>
              <button 
                className="btn-donate" 
                onClick={() => handleDonateClick(beneficiary)}
              >
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beneficiaries;