import "./result.css";
import { Link } from "react-router-dom";
import image from "./img/resultbg.jpg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Circle from "react-circle";
import NavBar from "./NavBar";
import db, { auth } from "./firebase/firebaseConfig";
import {onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { collection, getDoc, query, where, doc } from "firebase/firestore";

function Result() {
  const [uid, setUID] = useState("");
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUID(user.uid);
      }
    });
  }, []);

  useEffect(() => {
    if (uid) {
      const fetchData = async () => {
        try {
          const docRef = doc(db, "videos", uid);
          const docSnapshot = await getDoc(docRef);
          if (docSnapshot.exists()) {
            const data = docSnapshot.data().result;
            setResultData(data);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document: ", error);
        }
      };
  
      fetchData();
    }
  }, [uid]);
  console.log("userid", uid);
  console.log("resultData", resultData);
  const fullresult = (resultData * 100).toFixed(0);



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
          backgroundPositionX: "100%",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-2"></div>
            <div
              className="col-8"
              style={{ paddingBottom: "9.25vh", paddingTop: "9.25vh" }}
            >
              <div
                style={{
                  borderRadius: "2vh",
                  backgroundColor: "aliceblue",
                  border: "0px",
                  padding: "15px",
                  fontSize: "20px",
                  boxShadow: "lightslategray",
                  padding: "5vh",
                  width: "100%",
                  height: "73vh",
                  opacity: 0.95,
                }}
              >
                <div className="row">
                  <h1 style={{ textAlign: "center" }}>ความถูกต้อง</h1>
                  <div className="col">
                    <div style={{ padding: "5vh",paddingLeft:"" }}>
                      <Circle
                        animate={true}
                        animationDuration="1s"
                        responsive={true}
                        size={50}
                        lineWidth={15}
                        progress={fullresult}
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
                  <div className="col">
                    
                    <div style={{ paddingLeft: "5vh", paddingTop: "5vh" }}>
                      <div style={{ paddingLeft: "13vh" }}>
                        <StarRoundedIcon
                          style={{ color: "#cccccc", fontSize: "23vh" }}
                        />
                      </div>
                      <StarRoundedIcon
                        style={{ color: "#cccccc", fontSize: "23vh" }}
                      />
                      <span style={{ paddingLeft: "2vh" }}></span>
                      <StarRoundedIcon
                        style={{ color: "#cccccc", fontSize: "23vh" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-2"
              style={{ paddingLeft: "15vh", paddingTop: "4vh" }}
            >
              <Link
                to="/all/lessons"
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
    </div>
  );
}

export default Result;
