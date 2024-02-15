import React from 'react';
import Facebook from "./icons/facebook.png"
import x from "./icons/x.png"
import insta from "./icons/instagram.png"
import Discord from "./discord.png"

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links h-fulll w-full">
      <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
        <img id="icon" src={Facebook} alt="Facebook" />
      </a>
      <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
        <img id="icon" src={x} alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
        <img id="icon" src={insta} alt="Instagram" />
      </a>
      <a href="https://www.discord.com/example" target="_blank" rel="noopener noreferrer">
        <img id="icon" src={Discord} alt="Instagram" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
