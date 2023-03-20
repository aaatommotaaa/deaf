import logo from "./img/logo.PNG";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#5271FF", fontFamily: "Mitr" }}
      >
        <div className="row p-2 d-flex align-items-center">
          <a className="col-2" href="#" style={{ paddingLeft: "2vh" }}>
            <img src={logo} style={{ height: "5vh" }} />
          </a>
          <ul
            className="col-10 d-flex flex-row justify-content-end align-items-center"
            style={{ paddingTop: "1vh" }}
          >
            <div className="mx-3">
              <Link
                to="/home"
                style={{ color: "white", textDecoration: "none" }}
              >
                หน้าหลัก
              </Link>
            </div>

            <div className="mx-3">
              <Link
                to="/stat"
                style={{ color: "white", textDecoration: "none" }}
              >
                สถิติการเรียน
              </Link>
            </div>
            <div className="mx-3">
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                ออกจากระบบ
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
