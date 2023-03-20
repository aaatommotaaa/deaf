import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "./img/statbg.jpg";
import Circle from "react-circle";
import NavBar from "./NavBar";
import accuracy from "../src/points/ptsAcc";

const Stat = ({ isSignedIn, curUser }) => {
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
          padding: "7vh",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <h2
                style={{
                  padding: "1vh",
                  backgroundColor: "#cccccc",
                  borderRadius: "2vh",
                  textAlign: "center",
                  width: "100vh",
                }}
              >
                {curUser}
              </h2>

              <div
                style={{
                  borderRadius: "2vh",
                  backgroundColor: "aliceblue",
                  border: "0px",
                  fontSize: "20px",
                  textAlign: "center",
                  boxShadow: "lightslategray",
                  padding: "7vh",
                  width: "100vh",
                  height: "69vh",
                }}
              >
                <h3 style={{ paddingBottom: "0" }}>ความแม่นยำ</h3>
                <Circle
                  animate={true}
                  animationDuration="1s"
                  responsive={true}
                  size={50}
                  lineWidth={15}
                  progress={5}
                  progressColor="#48D1CC"
                  bgColor="lightgrey"
                  textColor="hotpink"
                  textStyle={{
                    font: "bold 5rem Helvetica, Arial, sans-serif",
                  }}
                  percentSpacing={10}
                  roundedStroke={true}
                  showPercentage={true}
                  showPercentageSymbol={true}
                />
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stat;
