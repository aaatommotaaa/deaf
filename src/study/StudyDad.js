import "../Home.css";
import { Link } from "react-router-dom";
import dad from "../img/studyjpg/dad.jpg";
import dadvideo from "../img/studymp4/พ่อ.mp4";
import NavBar from "../NavBar";

function StudyDad() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-6"
            style={{ paddingTop: "8vh", paddingLeft: "10vh" }}
          >
            <span
              style={{
                fontSize: "3vh",
                paddingLeft: "80vh",
                fontFamily: "Mitr",
              }}
            >
              คำศัพท์ :{" "}
            </span>
            <span
              style={{ fontSize: "13vh", paddingLeft: "80vh", paddingTop: "0" }}
            >
              พ่อ{" "}
            </span>
            <br />

            <br />
            <iframe
              width="660vh"
              height="360vh"
              src={dadvideo}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            {/* <video
            type="video/mov"
            paddingLeft="20vh"
            width="660vh"
            height="360vh"
            src={dadvideo}
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></video> */}
          </div>

          <div className="col-4" style={{ paddingTop: "35vh" }}>
            <img
              src={dad}
              alt="dad"
              style={{ height: "48vh", paddingLeft: "5vh" }}
            />
          </div>

          <div
            className="col-2"
            style={{ paddingTop: "8vh", paddingRight: "0vh" }}
          >
            <Link
              to="/exercise/dad"
              type="button"
              class="button button1"
              style={{
                backgroundColor: "#5271FF",
                fontSize: "2.5vh",
                fontFamily: "Mitr",
                borderRadius: "10vh",
              }}
            >
              ถัดไป
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudyDad;
