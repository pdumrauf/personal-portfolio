import '../assets/styles/Contact.css'
import { Container, Col, Row } from "react-bootstrap"
import { useForm, ValidationError } from '@formspree/react';
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
  const [state, handleSubmit] = useForm("xqknvjgw");

  if (state.succeeded) {
      return <p className="contact" id="connect">Thanks for message! I will answer as soon as possible.</p>;
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit} action="https://formspree.io/f/xqknvjgw" method="POST">
              <input id="name" type="text" name="name" placeholder="Name" required/>
              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <input id="email" type="email" name="email" placeholder="Email" required/>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <textarea id="message" name="message" placeholder="Message" required/>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <button type="submit" disabled={state.submitting}>Submit</button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}