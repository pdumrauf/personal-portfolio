import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img-svg.svg"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Frontend Developer", "Web Designer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100) 
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) }
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)
  
    setText(updatedText);

    if(isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if(!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period)
    } else if(isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi! I'm Paula, `}<span className="wrap">{text}</span></h1>
            <p>I'm a Front-end developer looking for my first work experience in the world of web development. I'm curious and committed. Adaptable, proactive, and open to learning. Eager to grow professionally, and learn new skills. At present, I'm taking a course on NodeJS.</p>
          </Col>
          <Col xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}