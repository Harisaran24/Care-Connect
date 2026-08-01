import React from "react";
import { useParams } from "react-router-dom";
import "./styles/SingleBeneficiary.css";

const allBeneficiaries = [
  {
    id: 1,
    name: "Nithish",
    age: 6,
    type: "child",
    image: "/assets/images/b1.jpg",
    description: "Affected by brain injury, needs urgent medical support.",
    extendedDescription: `Nithish suffered a traumatic brain injury after a fall. His single mother works as a daily wage laborer and cannot afford the surgery he needs. Despite his condition, Nithish loves drawing and smiles whenever he sees crayons. Your support can give him a chance to recover and return to school.`
  },
  {
    id: 2,
    name: "Meeran",
    age: 7,
    type: "child",
    image: "/assets/images/b2.jpg",
    description: "TB detected and needs help for proper treatment.",
    extendedDescription: `Meeran is a bright and curious child who was recently diagnosed with tuberculosis. The diagnosis has kept him out of school, and his family struggles to afford the necessary medication and regular hospital visits. Despite his condition, Meeran continues to read storybooks and dreams of becoming a doctor one day to help others like him. Your donation can ensure he receives uninterrupted treatment and the education he deserves.`
  },
  {
    id: 3,
    name: "Vickey",
    age: 4,
    type: "child",
    image: "/assets/images/b3.webp",
    description: "Suffering from severe viral fever, requires immediate care.",
    extendedDescription: `Little Vickey has been battling high fever and weakness for weeks. His parents, who work as farmers, cannot afford the costly antibiotics he needs. Vickey’s condition worsens at night, and he often cries from the pain. Your contribution can provide him with life-saving medication and a chance to play like other children.`
  },
  {
    id: 4,
    name: "Rahul",
    age: 5,
    type: "child",
    image: "/assets/images/b4.jpg",
    description: "Born with a nasal defect, requires surgery.",
    extendedDescription: `Rahul was born with a congenital nasal defect that makes breathing difficult. He often misses school due to infections, and his grandparents (his primary caregivers) are too poor to fund the corrective surgery. Rahul loves singing but struggles to hold a tune because of his condition. Your help can give him a normal childhood.`
  },
  {
    id: 5,
    name: "Sneha",
    age: 2,
    type: "child",
    image: "/assets/images/b5.jpg",
    description: "Needs an urgent eye operation to prevent vision loss.",
    extendedDescription: `Sneha was diagnosed with congenital cataracts. Without surgery, she will lose her vision permanently. Her parents, who work as street vendors, are devastated but helpless. Sneha’s favorite thing is watching birds—your donation can ensure she never loses the ability to see them.`
  },
  {
    id: 6,
    name: "Kavya",
    age: 15,
    type: "child",
    image: "/assets/images/b6.jpg",
    description: "Needs education fund for next term fees to continue studies.",
    extendedDescription: `Kavya is a brilliant student who ranks first in her class, but her father’s sudden job loss has put her education at risk. She dreams of becoming an engineer to support her family but may have to drop out if she can’t pay her school fees. Your support can keep her dreams alive.`
  },
  {
    id: 13,
    name: "Rohan",
    age: 3,
    type: "child",
    image: "/assets/images/b7.webp",
    description: "Suffering from marasmus, needs nutritional support.",
    extendedDescription: `Rohan weighs just 8 kg due to severe malnutrition (marasmus). His mother, a domestic worker, cannot afford the therapeutic food he needs. He is too weak to walk or play. Your donation can provide him with protein-rich meals and a fighting chance to grow healthy.`
  },
  {
    id: 14,
    name: "Divya",
    age: 7,
    type: "child",
    image: "/assets/images/b8.jpg",
    description: "Diagnosed with ADHD, needs special education assistance.",
    extendedDescription: `Divya’s ADHD makes it hard for her to focus in a regular classroom, but her school lacks resources for special needs children. She is artistic and loves painting but often gets frustrated when she can’t keep up. Funding her specialized education can unlock her potential.`
  },
  {
    id: 7,
    name: "Rajesh",
    age: 40,
    type: "elder",
    image: "/assets/images/bo1.jpg",
    description: "Battling mouth cancer, requires extensive treatment.",
    extendedDescription: `Rajesh, a former construction worker, has been unable to work since his cancer diagnosis. His wife sells flowers to pay for his painkillers, but chemotherapy is beyond their means. He worries about leaving his two daughters destitute. Your help can fund his treatment and save a family.`
  },
  {
    id: 8,
    name: "Sita",
    age: 35,
    type: "elder",
    image: "/assets/images/bo2.jpg",
    description: "Suffering from a severe head injury, needs immediate surgery.",
    extendedDescription: `Sita sustained a head injury in a domestic violence incident. She now lives in a shelter but requires surgery to relieve brain swelling. Despite her trauma, she cares for other shelter residents. Your donation can give her a second chance at life.`
  },
  {
    id: 9,
    name: "Mohan",
    age: 50,
    type: "elder",
    image: "/assets/images/bo3.jpg",
    description: "Had a stroke, currently in critical condition.",
    extendedDescription: `Mohan, a retired teacher, had a stroke that left him partially paralyzed. His pension isn’t enough to cover rehabilitation. He misses teaching his students and hopes to regain mobility. Your support can fund his physiotherapy and medical care.`
  },
  {
    id: 10,
    name: "Anjali",
    age: 58,
    type: "elder",
    image: "/assets/images/bo4.jpg",
    description: "Diagnosed with mouth cancer, needs chemotherapy.",
    extendedDescription: `Anjali, a widow, sold her jewelry to pay for initial cancer treatments but now has nothing left. She hides her pain to avoid burdening her son, who works as a driver. Your contribution can cover her chemo and give her hope.`
  },
  {
    id: 11,
    name: "Venkatesh",
    age: 24,
    type: "elder",
    image: "/assets/images/bo5.webp",
    description: "Met with an accident, requires multiple surgeries.",
    extendedDescription: `Venkatesh, a delivery rider, was hit by a truck and lost the use of his legs. His employer abandoned him, and his surgeries are delayed due to lack of funds. He dreams of walking again to support his aging parents. Your help can rebuild his life.`
  },
  {
    id: 12,
    name: "Ganesan",
    age: 60,
    type: "elder",
    image: "/assets/images/bo6.jpg",
    description: "Suffering from thyroid issues, needs continuous medication.",
    extendedDescription: `Ganesan’s thyroid disorder causes extreme fatigue and weight fluctuations. His son’s income as a security guard isn’t enough for lifelong medication. He once ran a small tea shop and hopes to recover enough to work again. Your donation can restore his health.`
  },
  {
    id: 15,
    name: "Veerappan",
    age: 68,
    type: "elder",
    image: "/assets/images/bo7.jpg",
    description: "Diagnosed with diabetes, requires a leg operation.",
    extendedDescription: `Veerappan’s diabetes has led to a gangrenous wound on his leg. Without amputation, the infection will spread. He fears becoming a burden to his daughter’s family. Your support can fund his surgery and prosthetic limb.`
  }
];

const SingleBeneficiary = () => {
  const { id } = useParams();
  const beneficiary = allBeneficiaries.find((b) => b.id === parseInt(id));

  if (!beneficiary) {
    return (
      <div className="single-beneficiary not-found">
        <h2>Beneficiary not found</h2>
      </div>
    );
  }

  return (
    <div
      className="single-beneficiary"
      style={{
        backgroundImage: `url('/assets/images/SBB1')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "3rem 1rem",
      }}
    >
      <div className="profile-card">
        <img src={beneficiary.image} alt={beneficiary.name} className="profile-image" />
        <div className="profile-info">
          <h2>{beneficiary.name}</h2>
          <p><strong>Age:</strong> {beneficiary.age}</p>
          <p><strong>Type:</strong> {beneficiary.type === "child" ? "Child" : "Elderly"}</p>
          <p className="short-description">{beneficiary.description}</p>
          <p className="extended-description">{beneficiary.extendedDescription}</p>

          <div className="actions">
            <button className="donate-btn">Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBeneficiary;
