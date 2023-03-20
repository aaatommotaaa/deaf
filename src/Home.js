import { useNavigate } from "react-router-dom";
import "./Home.css";
import bghome from "./img/bghome.png";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = ({ isTeacher }) => {
  const navigate = useNavigate();
  const handleButton = () => {
    if (isTeacher) {
      navigate("/all/lessons/for/teacher");
    } else {
      navigate("/all/lessons");
    }
  };
  return (
    <div>
      <NavBar />
      <div style={{ fontFamily: "Mitr" }}>
        <div
          className="container-fluid"
          style={{
            padding: "0",
            overflowY: "hidden",
            overflowX: "hidden",
          }}
        >
          <div className="row">
            <div
              className="col-3"
              style={{ paddingLeft: "7vh", paddingTop: "30vh" }}
            >
              <span style={{ color: "black", fontSize: "4vh" }}>
                Welcome to
              </span>
              <br />
              <span style={{ color: "#5271FF", fontSize: "4vh" }}>
                {" "}
                DEAR DEAF
              </span>
              <span style={{ color: "black", fontSize: "4vh" }}> World!</span>
              <br />
              <br />
              <p className="code3">
                สื่อการเรียนรู้สำหรับผู้พิการทางการได้ยิน{" "}
              </p>
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#5271FF",
                  fontSize: "2.5vh",
                  color: "white",
                  fontFamily: "Mitr",
                  borderRadius: "10vh",
                  paddingTop: "3vh",
                  paddingBottom: "3vh",
                  paddingLeft: "5vh",
                  paddingRight: "5vh",
                }}
                onClick={handleButton}
              >
                เริ่มต้นใช้งาน
              </button>
            </div>
            <div
              className="d-flex justify-content-end col-9"
              style={{
                padding: "0",
                margin: "0",
              }}
            >
              <img
                src={bghome}
                alt="bghome"
                style={{ width: "100%", height: "91.3vh", padding: "0" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
