import AboutContainer from "./AboutContainer"
import ProjectsContainer from "./ProjectsContainer"


import "../styles/components/maincontent.sass"

const MainContent = () => {
  return <main id="main-content">
    <AboutContainer />
   
    <ProjectsContainer />
  </main>
}

export default MainContent