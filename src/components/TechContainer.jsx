import { DiHtml5, DiCss3 } from "react-icons/di"

import "../styles/components/technologiescontainer.sass"

const technologies = [
{id: "html", name:"HTML5", icon:<DiHtml5/>,
 p:"HTML5, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web."},

 {id: "css", name:"CSS3", icon:<DiCss3/>, 
 p:"CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets"}
]

const TechContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
       <div className="technologies-grid">
        {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
            <h3>{tech.name}</h3>
               <p>{tech.p}</p>           
            </div>    
            </div>
        ))}
       </div>
    </section>
 
  )
}

export default TechContainer