import React from "react";

const Contact = () => {
    return (
        <Container>
        <Row>
        <Col size="sm-6">
          <ul class="text-center" id="infoList">
            <li>Email: <a href="kimle.lek@gmail.com">kimle.lek@gmail.com</a></li>
            <li>Github: <a href="https://github.com/kimnana45">https://github.com/kimnana45</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/kimle-lek/">https://www.linkedin.com/in/kimle-lek/</a></li>
            <li>Resume: <a href="css/resume20.pdf">resume20.pdf</a></li>
            <li>Phone number: (407)399-5793</li>
          </ul>
        </ Col>
        <Col size="sm-6">
          <h2 class="accented" id="contactInfo">Contact Information</h2>
        </ Col>
      </ Row>
      <Row id="contact">
        <Col size="sm-5">
          <h4>Shoot</h4>
          <h4>Me</h4>
          <h4>A</h4>
          <h4>Message!</h4>
        </ Col>
        <Col size="sm-6">
          <form>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Your Name</label>
              <input type="name" class="form-control" id="example" placeholder="Full Name" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-light">Send</button>
          </form>
        </ Col>
      </ Row>
      <Row>
        <Col size="sm-10">
          <h2>Logic will get you from A to B.</h2>
          <h3>Imagination will take you everywhere -Einstein</h3>
        </Col>
      </ Row>
      </Container>
    )
}

export default Contact;