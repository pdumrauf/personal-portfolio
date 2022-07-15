import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/projectImg1.png";
import projImg2 from "../assets/img/projectImg2.png";
import projImg3 from "../assets/img/projectImg3.png";

export const Projects = () => {

  const projects = [
  {
    title: "Shopet",
    description: "Web design HTML/CSS for a pet shop",
    imgUrl: projImg1,
    url: "https://pdumrauf.github.io/shopet/"
  },
  {
    title: "SkinItUp",
    description: "E-commerce about skincare using Vanilla JS / jQuery",
    imgUrl: projImg2,
    url: "https://pdumrauf.github.io/skin-It-Up/"
  },
  {
    title: "Scrap",
    description: "E-commerce about scrapbooking using React JS.",
    imgUrl: projImg3,
    url: "https://scrap-ecommerce.netlify.app/"
  },
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Check out my recent project!</p>
              <Row>
                {
                  projects.map((project, index) => {
                    return(
                      <ProjectCard 
                        key={index}
                        {...project}
                      />
                    )
                  })
                }
              </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}