import React from "react";
import "./styles/Community.css";

const communityHomes = [
  { id: 1, name: "Sunshine Orphanage", location: "Anna Nagar, Chennai", residents: 50, image: "/assets/images/o1.jpg" },
  { id: 2, name: "Sri Poornamahameru trust", location: "T. Nagar, Chennai", residents: 30, image: "/assets/images/EH1.jpg" },
  { id: 3, name: "Little Angels Home", location: "Velachery, Chennai", residents: 40, image: "/assets/images/o2.jpg" },
  { id: 4, name: "Grace Old Age Home", location: "Adyar, Chennai", residents: 25, image: "/assets/images/EH2.webp" },
  { id: 5, name: "New Life Orphanage", location: "Mylapore, Chennai", residents: 60, image: "/assets/images/o3.jpg" },
  { id: 6, name: "Elder Haven", location: "Perambur, Chennai", residents: 35, image: "/assets/images/EH3.webp" },
  { id: 7, name: "Joy Children's Home", location: "Tambaram, Chennai", residents: 45, image: "/assets/images/o4.jpg" },
  { id: 8, name: "Annai Tresa Old Age Home", location: "Kilpauk, Chennai", residents: 28, image: "/assets/images/EH7.jpg" },
  { id: 9, name: "Shenbagam Illam", location: "Madipakkam, Chennai", residents: 33, image: "/assets/images/EH6.webp" },
  { id: 10, name: "Udhavum Karangal", location: "Kodambakkam, Chennai", residents: 38, image: "/assets/images/o5.jpg" },
  { id: 11, name: "Annai Sathya Illam", location: "Thiruvanmiyur, Chennai", residents: 22, image: "/assets/images/o7.jpg" },
  { id: 12, name: "Nehru Illam", location: "Chromepet, Chennai", residents: 27, image: "/assets/images/EH5.webp" },
  { id: 13, name: "Faith Home", location: "Pallavaram, Chennai", residents: 48, image: "/assets/images/o8.jpg" },
  { id: 14, name: "Vidiyal Orphanage", location: "Sholinganallur, Chennai", residents: 55, image: "/assets/images/o6.webp" },
  { id: 15, name: "No1 Home", location: "Porur, Chennai", residents: 32, image: "/assets/images/EH4.webp" },
  { id: 16, name: "Ties Old Age Home", location: "Padur, Chennai", residents: 39, image: "/assets/images/EH8.jpg" },
];

const Community = () => {
  return (
    <div className="community-container">
      <h1>All Around Chennai - Our Caring Community</h1>
      <p>We are proud to be connected with 15+ homes, providing care, love, and support to those in need.</p>

      <div className="home-list">
        {communityHomes.map((home) => (
          <div key={home.id} className="home-card">
            <img src={home.image} alt={home.name} />
            <h3>{home.name}</h3>
            <p><strong>Location:</strong> {home.location}</p>
            <p><strong>Residents:</strong> {home.residents} people</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
