import React from "react";
import Resume from "../../src/assets/resume20PDF.pdf";

const Contact = () => {
    return (
        <div className="container">
        <div className="row">
        <div className="col-sm-6">
          <ul className="text-center" id="infoList">
            <li>Email: <a href="kimle.lek@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >kimle.lek@gmail.com</a></li>
            <li>Github: <a href="https://github.com/kimnana45"
            target="_blank"
            rel="noopener noreferrer"
            >https://github.com/kimnana45</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/kimle-lek/"
            target="_blank"
            rel="noopener noreferrer"
            >https://www.linkedin.com/in/kimle-lek/</a></li>
            <li>Resume: <a href={Resume} download
            target="_blank"
            rel="noopener noreferrer"
            >resume20PDF.pdf</a></li>
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