import hi from "../img/studyjpg/hi.jpg";
import hivideo from "../img/studymp4/สวัสดี.mp4";
import "../Home.css";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";

function StudyHi() {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-7"
            style={{ paddingTop: "8vh", paddingLeft: "10vh" }}
          >
            <span
              style={{
                fontSize: "3vh",
                paddingLeft: "85vh",
                fontFamily: "Mitr",
              }}
            >
              คำศัพท์ :{" "}
            </span>
            <span
              style={{ fontSize: "13vh", paddingLeft: "80vh", paddingTop: "0" }}
            >
              สวัสดี{" "}
            </span>
            <br />

            <br />
            <iframe
              paddingLeft="20vh"
              width="660vh"
              height="360vh"
              src={hivideo}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="col-3" style={{ paddingTop: "35vh" }}>
            <img src={hi} alt="hi" style={{ height: "48vh" }} />
          </div>

          <div
            className="col-2"
            style={{ paddingTop: "8vh", paddingRight: "0vh" }}
          >
            <Link
              to="/exercise/hi"
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
export default StudyHi;
