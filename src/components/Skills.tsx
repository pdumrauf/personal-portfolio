import '../assets/styles/Skills.css'
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import js from "../assets/img/js.svg";
import react from "../assets/img/react.svg";
import typescript from "../assets/img/typescript.svg";
import sass from "../assets/img/sass.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import git from "../assets/img/git.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>Skills</h2>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="item">
                <img src={js} alt="ImageJS"/>
                <h5>JavaScript</h5>
              </div>              
              <div className="item">
                <img src={react} alt="ImageReact"/>
                <h5>React</h5>
              </div>
              <div className="item">
                <img src={typescript} alt="ImageTypeScript"/>
                <h5>TypeScript</h5>
              </div>
              <div className="item">
                <img src={html} alt="ImageHTML"/>
                <h5>HTML</h5>
              </div>
              <div className="item">
                <img src={css} alt="ImageCSS"/>
                <h5>CSS</h5>
              </div>
              <div className="item">
                <img src={sass} alt="ImageSass"/>
                <h5>Sass</h5>
              </div>
              <div className="item">
                <img src={bootstrap} alt="ImageBootstrap"/>
                <h5>Bootstrap</h5>
              </div>
              <div className="item">
                <img src={git} alt="ImageGit"/>
                <h5>Git</h5>
              </div>
          </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}