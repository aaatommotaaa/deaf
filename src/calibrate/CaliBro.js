import React from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import image from "../img/back.png";
import NavBar from "../NavBar";

function CaliBro() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          fontFamily: "Mitr",
          backgroundImage: `url(${image})`,
          backgroundSize: "210zvh",
          backgroundPosition: "center",
          backgroundPositionY: "100%",
          height: "91.5vh",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-2"></div>

            <div className="col-7">
              <Webcam
                style={{
                  paddingTop: "3.5vh",
                  height: "100%",
                  paddingLeft: "9vh",
                }}
              />
            </div>

            <div
              className="d-flex justify-content-end col-3"
              style={{ paddingRight: "8vh", paddingTop: "80vh" }}
            >
              <Link
                to="/study/brother"
                type="button"
                class="button button1"
                style={{
                  backgroundColor: "#5271FF",
                  borderRadius: "10vh",
                }}
              >
                ถัดไป
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaliBro;
