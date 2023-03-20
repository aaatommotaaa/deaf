import { useEffect } from "react";
import "./index.css";
import "./all.css";
import { useNavigate } from "react-router-dom";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import image from "./img/back.png";
import dad from "./img/icon/dad.png";
import mom from "./img/icon/mom.png";
import sis from "./img/icon/daughter.png";
import bro from "./img/icon/cousin.png";
import grandma from "./img/icon/grandmother.png";
import grandpa from "./img/icon/grandfather.png";
import hi from "./img/icon/waving-hand.png";
import hungry from "./img/icon/hungry.png";
import full from "./img/icon/eat.png";
import sorry from "./img/icon/sorry.png";
import thank from "./img/icon/hands.png";
import NavBar from "./NavBar";

const All = ({ isSignedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isSignedIn) {
      navigate("../");
    }
  }, [isSignedIn, navigate]);
  return (
    <div>
      <NavBar />
      <div
        style={{
          fontFamily: "Mitr",
          backgroundImage: `url(${image})`,
          backgroundSize: "210vh",
          backgroundPosition: "center",
          backgroundPositionY: "100%",
        }}
      >
        <p style={{ paddingTop: "2vh", paddingLeft: "7vh", fontSize: "10vh" }}>
          บทเรียน
        </p>
        <div style={{ overflowY: "scroll", height: "72vh", width: "100%" }}>
          {/* หมวดแรก */}
          <div style={{ paddingLeft: "10vh", paddingRight: "10vh" }}>
            <h3
              style={{
                backgroundColor: "#cccccc",
                width: "100%",
                height: "6vh",
                textAlign: "center",
                padding: "1vh",
                borderRadius: "2vh",
              }}
            >
              หมวดที่ 1 : ครอบครัว
            </h3>
            <p style={{ padding: "1vh" }}></p>
            <div>
              <div style={{ paddingLeft: "30vh" }}>
                <button
                  style={{
                    borderRadius: "2vh",
                    backgroundColor: "aliceblue",
                    border: "1px",
                    padding: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "lightslategray",
                    padding: "2vh",
                    width: "23vh",
                  }}
                  onClick={() => navigate("/calibrate/dad")}
                >
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <br />
                  <img src={dad} style={{ height: "10vh", padding: "0.5vh" }} />
                  <br />
                  <span style={{ fontFamily: "K2D", paddingBottom: "0" }}>
                    พ่อ
                  </span>
                </button>
                <span style={{ paddingLeft: "5vh" }}></span>
                <button
                  style={{
                    borderRadius: "2vh",
                    backgroundColor: "aliceblue",
                    border: "1px",
                    padding: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "lightslategray",
                    padding: "2vh",
                    width: "23vh",
                  }}
                  onClick={() => navigate("/calibrate/mom")}
                >
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <br />
                  <img src={mom} style={{ height: "10vh", padding: "0.5vh" }} />
                  <br />
                  <span style={{ fontFamily: "K2D", paddingBottom: "0" }}>
                    แม่
                  </span>
                </button>
                <span style={{ paddingLeft: "5vh" }}></span>
                <button
                  style={{
                    borderRadius: "2vh",
                    backgroundColor: "aliceblue",
                    border: "1px",
                    padding: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "lightslategray",
                    padding: "2vh",
                    width: "23vh",
                  }}
                  onClick={() => navigate("/calibrate/grandfather")}
                >
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <br />
                  <img
                    src={grandpa}
                    style={{ height: "10vh", padding: "0.5vh" }}
                  />
                  <br />
                  <span style={{ fontFamily: "K2D", paddingBottom: "0" }}>
                    ตา
                  </span>
                </button>
                <span style={{ paddingLeft: "5vh" }}></span>
                <button
                  style={{
                    borderRadius: "2vh",
                    backgroundColor: "aliceblue",
                    border: "1px",
                    padding: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "lightslategray",
                    padding: "2vh",
                    width: "23vh",
                  }}
                  onClick={() => navigate("/calibrate/grandmother")}
                >
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <br />
                  <img
                    src={grandma}
                    style={{ height: "10vh", padding: "0.5vh" }}
                  />
                  <br />
                  <span style={{ fontFamily: "K2D", paddingBottom: "0" }}>
                    ยาย
                  </span>
                </button>
                <span style={{ paddingLeft: "5vh" }}></span>
                <button
                  style={{
                    borderRadius: "2vh",
                    backgroundColor: "aliceblue",
                    border: "1px",
                    padding: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "lightslategray",
                    padding: "2vh",
                    width: "23vh",
                  }}
                  onClick={() => navigate("/calibrate/brother")}
                >
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <br />
                  <img src={bro} style={{ height: "10vh", padding: "0.5vh" }} />
                  <br />
                  <span style={{ fontFamily: "K2D", paddingBottom: "0" }}>
                    พี่ชาย
                  </span>
                </button>
                <span style={{ paddingLeft: "5vh" }}></span>
                <p style={{ paddingTop: "3vh" }} />
                <button
                  style={{
                    borderRadius: "2vh",
                    backgroundColor: "aliceblue",
                    border: "1px",
                    padding: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "lightslategray",
                    padding: "2vh",
                    width: "23vh",
                  }}
                  onClick={() => navigate("/calibrate/sister")}
                >
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <br />
                  <img src={sis} style={{ height: "10vh", padding: "0.5vh" }} />
                  <br />
                  <span style={{ fontFamily: "K2D", paddingBottom: "0" }}>
                    พี่สาว
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* จบหมวดแรก */}

          {/* หมวดสอง */}
          <div
            style={{
              paddingLeft: "10vh",
              paddingRight: "10vh",
              paddingTop: "5vh",
            }}
          >
            <h3
              style={{
                backgroundColor: "#cccccc",
                width: "100%",
                height: "6vh",
                textAlign: "center",
                padding: "1vh",
                borderRadius: "2vh",
              }}
            >
              หมวดที่ 2 : คำที่ใช้ในชีวิตประจำวัน
            </h3>
            <p style={{ padding: "1vh" }}></p>
            <div>
              <div style={{ paddingLeft: "30vh" }}>
                <button
                  style={{
                    borderRadius: "2vh",
                    backgroundColor: "aliceblue",
                    border: "1px",
                    padding: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "lightslategray",
                    padding: "2vh",
                    width: "23vh",
                  }}
                  onClick={() => navigate("/calibrate/hi")}
                >
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <br />
                  <img src={hi} style={{ height: "10vh", padding: "0.5vh" }} />
                  <br />
                  <span style={{ fontFamily: "K2D", paddingBottom: "0" }}>
                    สวัสดี
                  </span>
                </button>
                <span style={{ paddingLeft: "5vh" }}></span>
                <button
                  style={{
                    borderRadius: "2vh",
                    backgroundColor: "aliceblue",
                    border: "1px",
                    padding: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "lightslategray",
                    padding: "2vh",
                    width: "23vh",
                  }}
                  onClick={() => navigate("/calibrate/thank")}
                >
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <br />
                  <img
                    src={thank}
                    style={{ height: "10vh", padding: "0.5vh" }}
                  />
                  <br />
                  <span style={{ fontFamily: "K2D", paddingBottom: "0" }}>
                    ขอบคุณ
                  </span>
                </button>
                <span style={{ paddingLeft: "5vh" }}></span>
                <button
                  style={{
                    borderRadius: "2vh",
                    backgroundColor: "aliceblue",
                    border: "1px",
                    padding: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "lightslategray",
                    padding: "2vh",
                    width: "23vh",
                  }}
                  onClick={() => navigate("/calibrate/sorry")}
                >
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <br />
                  <img
                    src={sorry}
                    style={{ height: "10vh", padding: "0.5vh" }}
                  />
                  <br />
                  <span style={{ fontFamily: "K2D", paddingBottom: "0" }}>
                    ขอโทษ
                  </span>
                </button>
                <span style={{ paddingLeft: "5vh" }}></span>
                <button
                  style={{
                    borderRadius: "2vh",
                    backgroundColor: "aliceblue",
                    border: "1px",
                    padding: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "lightslategray",
                    padding: "2vh",
                    width: "23vh",
                  }}
                  onClick={() => navigate("/calibrate/hungry")}
                >
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <br />
                  <img
                    src={hungry}
                    style={{ height: "10vh", padding: "0.5vh" }}
                  />
                  <br />
                  <span style={{ fontFamily: "K2D", paddingBottom: "0" }}>
                    หิว
                  </span>
                </button>
                <span style={{ paddingLeft: "5vh" }}></span>
                <button
                  style={{
                    borderRadius: "2vh",
                    backgroundColor: "aliceblue",
                    border: "1px",
                    padding: "15px",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "lightslategray",
                    padding: "2vh",
                    width: "23vh",
                  }}
                  onClick={() => navigate("/calibrate/full")}
                >
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <StarRoundedIcon
                    style={{ fontSize: "5.5vh", color: "#cccccc" }}
                  />
                  <br />
                  <img
                    src={full}
                    style={{ height: "10vh", padding: "0.5vh" }}
                  />
                  <br />
                  <span style={{ fontFamily: "K2D", paddingBottom: "0" }}>
                    อิ่ม
                  </span>
                </button>
                <span style={{ paddingLeft: "5vh" }}></span>
                <p style={{ paddingTop: "3vh" }} />
              </div>
            </div>
          </div>
          {/* จบหมวดสอง */}
        </div>
      </div>
    </div>
  );
};

export default All;
