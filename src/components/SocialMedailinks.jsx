import React from 'react';
import Facebook from "./icons/facebook.png"
import x from "./icons/x.png"
import insta from "./icons/instagram.png"
import Discord from "./icons/discord.png"

const SocialMediaLinks = () => {
  return (

    <div className="social-media-links bg-white  w-full">
    <div>
      <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
        <img id="icon" src={Facebook} alt="Facebook" />
      </a>
    </div>
    <div>
      <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
        <img id="icon" src={x} alt="Twitter" />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
        <img id="icon" src={insta} alt="Instagram" />
      </a>
    </div>
    <div>
      <a href="https://www.discord.com/example" target="_blank" rel="noopener noreferrer">
        <img id="icon" src={Discord} alt="Instagram" />
      </a>
    </div>
    </div>
  );
};

export default SocialMediaLinks;
