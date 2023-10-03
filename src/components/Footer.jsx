import "./Footer.css";

import { LogoFacebook } from "react-ionicons";
import { LogoInstagram } from "react-ionicons";
import { LogoLinkedin } from "react-ionicons";
import { MapOutline } from "react-ionicons";
import { PhonePortraitOutline } from "react-ionicons";
import { MailOpen } from "react-ionicons";
import { Typography } from "@mui/material";

const data={
    person1:"person1",
    contact1: "+91 99999 00000",
    person2: "person2",
    contact2: "+91 99999 00000",
    email: "xyz@gmail.com",
    facebook:"",
    instagram:"",
    linkedin: ""
};

export default function Footer() {
  return (
    <div className="footer-container-main" id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-block">
            <h3 className="center-text">
              <MapOutline color={"#ffffff"} height="40px" width="40px" />{" "}
              Address
            </h3>
            <p className="center-text">
              <a
                href="https://goo.gl/maps/nTNnuX6w5YbGKTic7"
                // target="_blank"
                className="text"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography>
                  Maulana Azad National Institute of Technology, Bhopal
                </Typography>
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="footer-mid">
          <div className="footer-block">
            <h3 className="center-text">
              <PhonePortraitOutline
                color={"#ffffff"}
                height="50px"
                width="50px"
              />{" "}
              Contact
            </h3>
            <p>
              <a
                href={`"tel://${data.contact1}`}
                // target="_blank"
                className="text"
                style={{ textDecoration: "none" }}
              >
                {/* <i className="fas fa-phone " aria-hidden="true"></i> */}
                <Typography
                  sx={{ color: "white", textDecoration: "none" }}
                  variant="body2"
                >
                  {data.person1} {data.contact1}
                </Typography>
              </a>
            </p>
            <p>
              <a
                href={`"tel://${data.contact2}`}
                // target="_blank"
                className="text"
                style={{ textDecoration: "none" }}
              >
                {/* <i className="fas fa-phone " aria-hidden="true"></i> */}
                <Typography
                  sx={{ color: "white", textDecoration: "none" }}
                  variant="body2"
                >
                  {data.person2} {data.contact2}
                </Typography>
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-block">
            <h3 className="center-text">
              <MailOpen color={"#ffffff"} height="40px" width="40px" /> Email
              Address
            </h3>
            <p className="center-text" style={{ color: "white" }}>
              <a
                href={data.email}
                className="text"
                // target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Typography>{data.email}</Typography>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-block">
        <span className="center-text">Social Links</span>
        <div className="social-icon">
          <div className="icon">
            <a href="">
              <LogoInstagram color={"white"} height="40px" width="40px" />
            </a>
          </div>
          <div className="icon">
            <a href="">
              {/* <i className="fab fa-facebook fa-2x"></i> */}
              <LogoFacebook color={"white"} height="40px" width="40px" />
            </a>
          </div>
          <div className="icon">
            <a
              href=""
              //   target="_blank"
            >
              <LogoLinkedin color={"white"} height="40px" width="40px" />
            </a>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <p className="copyright" style={{ color: "white" }}>
        Copyright © 2023 by{" "}
        <span>
          <a
            href=""
            className="text"
            // target="_blank"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Technosearch
          </a>
        </span>
        . <span className="all">All rights reserved.</span>
      </p>
    </div>
  );
}