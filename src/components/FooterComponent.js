import React from "react";
import { Link } from "react-router-dom";
function Footer(props) {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-8 col-sm-4">
            <div className="text-right">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://www.instagram.com/in/"
              >
                <i className="fa fa-instagram"></i>
              </a>

              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
          <div className="col-4 col-sm-4 align-self-center">
            <div className="col-auto">
              <p>© Copyright {year} Kitchen Tunisian</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
