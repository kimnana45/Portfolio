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
            <li>Resume: <Link to="css/resume20.pdf">resume20PDF.pdf</Link></li>
            <li>Phone number: (407)399-5793</li>
          </ul>
        </div>
        <div className="col-sm-6">
        <h4>Thank you for visiting!</h4>
          <h4>Connect with me on LinkedIn</h4>
        </div>
        </div>
      </div>
    )
}

export default Contact;