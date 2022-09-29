import '../assets/styles/Projects.css'
import { Col } from "react-bootstrap";

interface ProjectCardProps {
  id: number,
  title: string, 
  description: string,
  imgUrl: string,
  url: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ url, imgUrl, title, description }) => {
  return (
      <Col md={4}>
        <a href={url} target="_blank" rel="noreferrer">
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