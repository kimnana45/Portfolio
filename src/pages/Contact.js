import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="container">
        <div className="row">
        <div className="col-sm-6">
          <ul className="text-center" id="infoList">
            <li>Email: <Link to="kimle.lek@gmail.com">kimle.lek@gmail.com</Link></li>
            <li>Github: <Link to="https://github.com/kimnana45">https://github.com/kimnana45</Link></li>
            <li>LinkedIn: <Link to="https://www.linkedin.com/in/kimle-lek/">https://www.linkedin.com/in/kimle-lek/</Link></li>
            <li>Resume: <Link to="css/resume20.pdf">resume20.pdf</Link></li>
            <li>Phone number: (407)399-5793</li>
          </ul>
        </div>
        <div className="col-sm-6">
          <h2 className="accented" id="contactInfo">Contact Information</h2>
        </div>
        </div>
      <div className="row" id="contact">
        <div className="col-sm-5">
          <h4>Shoot</h4>
          <h4>Me</h4>
          <h4>A</h4>
          <h4>Message!</h4>
        </div>
        <div className="col-sm-6">
          <form>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Your Name</label>
              <input type="name" className="form-control" id="example" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-light">Send</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10">
          <h2>Logic will get you from A to B.</h2>
          <h3>Imagination will take you everywhere -Einstein</h3>
        </div>
      </div>
      </div>
    )
}

export default Contact;