import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
      <Col md={4}>
        <a href={url} alt="linkProject" target="_blank" rel="noreferrer">
          <div className="proj-imgbx">
            <img src={imgUrl} alt="ImgProject"/>
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </a>
      </Col>
    )
}