import Webcam from "react-webcam";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import bro from "../img/studyjpg/bro.jpg";
import brovideo from "../img/studymp4/พี่ชาย.mp4";
import time from "../img/timer.mp4";
import NavBar from "../NavBar";

function ExerciseBro() {
  const [webcam, setWebcam] = useState(false);
  const [toggle, setToggle] = useState(false);
  const timer = useRef(4);
  const [visible, setVisible] = useState(true);

  function handlevideo() {
    timer.current = 4;
    const interval_id = setInterval(() => {
      timer.current -= 1;
      setToggle((x) => !x);
      if (timer.current === 0) {
        clearInterval(interval_id);
        setWebcam(true);
      }
    }, 1000);
    setVisible((prev) => !prev);
  }
  console.log(timer.current);

  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: "3vh" }}>
        <span style={{ padding: "5vh" }}></span>
        <Link
          to="/study/brother"
          type="button"
          className="button button1"
          style={{
            backgroundColor: "#CECECE",
            fontSize: "2.5vh",
            color: "black",
            fontFamily: "Mitr",
            borderRadius: "10vh",
          }}
        >
          ย้อนกลับ
        </Link>
        <span
          style={{ fontSize: "3vh", fontFamily: "Mitr", paddingLeft: "60vh" }}
        >
          คำศัพท์ :
        </span>
        <span
          style={{
            fontSize: "6.2vh",
            paddingLeft: "5vh",
            paddingTop: "3vh",
          }}
        >
          พี่ชาย{" "}
        </span>
        <span style={{ paddingLeft: "59vh" }}></span>
        <Link
          to="/result"
          type="button"
          className="button button1"
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

      <div className="container-fluid">
        <div className="row">
          <div
            className="col-5"
            style={{ paddingTop: "3vh", paddingLeft: "8vh" }}
          >
            <div style={{ paddingLeft: "5vh" }}>
              <iframe
                width="462vh"
                height="252vh"
                src={brovideo}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <br />
              <img
                src={bro}
                alt="bro"
                style={{ width: "62vh", paddingLeft: "0vh" }}
              />
            </div>
          </div>

          <div className="col-7">
            <div style={{ paddingTop: "3vh", paddingLeft: "5vh" }}>
              {timer.current === 0 ? (
                webcam && <Webcam style={{ height: "71.5vh" }} />
              ) : timer.current < 4 ? (
                // Timer Video
                <iframe
                  width="714.5vh"
                  height="535vh"
                  src={time}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              ) : (
                ""
              )}
            </div>
            <div
              className="row"
              style={{
                width: "79vh",
                paddingLeft: "30vh",
                paddingTop: "30vh",
              }}
            >
              {visible && (
                <button
                  style={{
                    backgroundColor: "#b6c2fc",
                    fontSize: "4vh",
                    color: "black",
                    fontFamily: "Mitr",
                    borderRadius: "3vh",
                    border: "0",
                    padding: "3vh",
                  }}
                  onClick={handlevideo}
                >
                  กดเพื่อเปิดกล้อง
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseBro;
