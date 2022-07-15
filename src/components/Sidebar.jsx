import Avatar from "../img/Marcos.jpg"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Marcos Cappelli" />
    <p className="title">Dev Front end</p>
    <p>redes sociais</p>
    <p>informações de contato</p>
    <a href="" className="btn">Download currículo</a>
  </aside>
   
}

export default Sidebar