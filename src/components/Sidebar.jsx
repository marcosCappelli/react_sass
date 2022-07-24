import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import Avatar from "../img/Marcos.jpg"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Marcos Cappelli" />
    <p className="title">Dev Front end</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="https://drive.google.com/open?id=1-2bvjDckWPR6JMfTnZsa9lrR8MJCltq6&authuser=cappelli.m%40gmail.com&usp=drive_fs"
    target="_blank" className="btn">Download currículo</a>
  </aside>
   
}

export default Sidebar