import { DiHtml5 } from "react-icons/di"

import "../styles/components/technologiescontainer.sass"

const technologies = [
{id: "html", name:"HTML5", icon:<DiHtml5/>}
]

const TechContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
       <div className="technologies-grid">
        {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>{tech.icon}
            <h3>{tech.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.

            </p>
            </div>
        ))}
       </div>
    </section>
 
  )
}

export default TechContainer