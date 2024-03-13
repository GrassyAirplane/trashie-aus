"use client"

import "./Footer.css";
import Image from "next/image";
import Favicon from "../../public/assets/images/favicon.png";
import Right from "../../public/assets/images/right.svg";
import { SetStateAction, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const sendToDiscord = async (email: string) => {
    const webhookURL =
      "https://discord.com/api/webhooks/1217287603347259474/sTWBhhfWGXGjlPZNcTLqgvoAEMfvK4z7PG92mSfe6t3fPHzQA-fkDPQRwCpRo_tcVpBH"; // Replace this with your Discord webhook URL

    const payload = {
      content: `New message: ${email}`,
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Message sent to Discord successfully!");
      } else {
        console.error("Failed to send message to Discord:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending message to Discord:", error);
    }
  };

  const handleSubmit = () => {
    sendToDiscord(email);
    setEmail(""); // Clear the email input after sending
  };

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="footer-bottom">
      <div className="footer-footer">
        <div className="footer-leftside">
          <h2>Subscribe to make a difference and earn as you recycle.</h2>
          <div className="footer-input-box">
            <input
              className="footer-input"
              placeholder="Your email address"
              value={email}
              onChange={handleChange}
            />
            <div className="footer-input-submit" onClick={handleSubmit}>
              <Image priority src={Right} alt="Logo" className="footer-image" />
            </div>
          </div>
        </div>
        <div className="footer-rightside"></div>
        <div className="footer-bottom-row">
          <Image priority src={Favicon} alt="Logo" className="footer-image" />
          Ⓒ EcoSack™
        </div>
      </div>
    </footer>
  );
};

export default Footer;
