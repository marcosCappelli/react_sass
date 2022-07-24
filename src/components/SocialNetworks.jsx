import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn/>, rede: "https://www.linkedin.com/feed/"},
    { name: "github", icon: <FaGithub/>, rede: "https://github.com/marcosCappelli/react_sass"},
    { name: "instagram", icon: <FaInstagram/>, rede: "https://www.instagram.com/"},
];

const SocialNetworks = () => {
  return (
   <section id="social-networks">
    {socialNetworks.map((network) => (
          <a href={network.rede} target="_blank" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
           </a>  
    ))};
  </section> 
  );
};

export default SocialNetworks;