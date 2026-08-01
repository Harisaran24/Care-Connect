import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/Donate.css";

const Donate = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [beneficiary, setBeneficiary] = useState(null);

  useEffect(() => {
    if (state) {
      setBeneficiary({
        id: state.beneficiaryId,
        name: state.beneficiaryName,
        age: state.beneficiaryAge,
        description: state.beneficiaryDescription,
        image: state.beneficiaryImage,
      });
    }
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (beneficiary) {
      alert(`Donating ₹${amount} to ${beneficiary.name} (ID: ${beneficiary.id})`);
    } else {
      alert(`Donating ₹${amount} to general fund`);
    }
  };

  return (
    <div className="donate-container">
      <h1>🙏 Support Our Cause</h1>
      <p>Your donation helps provide shelter, education, and healthcare to those in need.</p>

      {/* Donation Form */}
      <div className="donation-form">
        <h2>Make a Donation</h2>
        {beneficiary && (
          <div className="beneficiary-highlight">
            <img src={beneficiary.image} alt={beneficiary.name} className="beneficiary-image" />
            <div className="beneficiary-info">
              <h3>Donating to: {beneficiary.name}</h3>
              <p>Age: {beneficiary.age}</p>
              <p className="beneficiary-need">{beneficiary.description}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name*" required />
          <input type="email" placeholder="Email Address*" required />
          <input type="tel" placeholder="Phone Number*" required />

          <select required>
            <option value="">Select Donation Type</option>
            <option value="One-Time">One-Time Donation</option>
            <option value="Monthly">Monthly Sponsorship</option>
          </select>

          <input
            type="number"
            placeholder="Enter Amount (₹)"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button type="submit">Proceed to Payment</button>

          {/* ✅ UPI Payment Button */}
          {amount && (
            <a
              href={`upi://pay?pa=harricharan2709@oksbi&pn=Care Connect&cu=INR&am=${amount}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button
                type="button"
                className="upi-donate-btn"
                style={{
                  marginTop: "10px",
                  backgroundColor: "#25a962",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Donate ₹{amount} via UPI
              </button>
            </a>
          )}
        </form>
      </div>

      {/* Payment Methods */}
      <div className="payment-methods">
        <h2>💳 Payment Methods</h2>
        <div className="payment-options">
          <div className="payment-option">
            <img src={`${process.env.PUBLIC_URL}/assets/icons/d1.png`} alt="UPI" />
            <p>UPI Payment</p>
          </div>
          <div className="payment-option">
            <img src={`${process.env.PUBLIC_URL}/assets/icons/d2.png`} alt="Card" />
            <p>Debit/Credit Card</p>
          </div>
          <div className="payment-option">
            <img src={`${process.env.PUBLIC_URL}/assets/icons/d3.png`} alt="Net Banking" />
            <p>Net Banking</p>
          </div>
          <div className="payment-option">
            <img src={`${process.env.PUBLIC_URL}/assets/icons/d5.png`} alt="Wallet" />
            <p>Wallets</p>
          </div>
        </div>
      </div>

      {/* Bank Transfer */}
      <div className="bank-details">
        <h2>🏦 Bank Transfer Details</h2>
        <ul>
          <li><strong>Bank Name:</strong> State Bank of India</li>
          <li><strong>Account Holder:</strong> Care Connect Foundation</li>
          <li><strong>Account Number:</strong> 123456789012</li>
          <li><strong>IFSC Code:</strong> SBIN0001234</li>
          <li><strong>Branch:</strong> Chennai Main Branch</li>
        </ul>
      </div>
    </div>
  );
};

export default Donate;
