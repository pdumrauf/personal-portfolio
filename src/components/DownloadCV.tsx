import '../assets/styles/Contact.css'
import { Col, Row, Container } from "react-bootstrap";
import CV from "../assets/files/CV_Paula_Dumrauf.pdf"

export const DownloadCV = () => {

  return (
    <div className="download-bx">
      <Container >
        <Row className=" align-items-center">
          <Col>
            <h3>If you want, you can download my CV here.</h3>
          </Col>
          <Col>
          <div className="cv-download-bx">
            <a href={CV} download="CV_Paula_Dumrauf"><button>Download CV</button></a>
          </div></Col>
        </Row>
      </Container>
    </div>

        

  )
}