import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiJava, DiMysql } from "react-icons/di"

import "../styles/components/technologiescontainer.sass"

const technologies = [
{id: "html", name:"HTML5", icon:<DiHtml5/>,
 p:"HTML5, é uma linguagem de marcação de hipertexto para apresentar e estruturar o conteúdo na web."},

{id: "java", name:"Java", icon:<DiJava/>,
 p:"Java é uma linguagem de programação e plataforma de computação liberada pela primeira vez pela Sun Microsystems em 1995."},

{id: "css", name:"CSS3", icon:<DiCss3/>, 
 p:"CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets"},

{id: "js", name:"JavaScript", icon:<DiJsBadge/>,
 p:"JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web"},

{id: "react", name:"React", icon:<DiReact/>,
 p:"React faz com que a criação de UIs interativas seja uma tarefa fácil"},

{id: "mysql", name:"MySQL", icon:<DiMysql/>,
p:"MySQL é o banco de dados de código aberto mais popular do mundo."}
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