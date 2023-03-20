import Webcam from "react-webcam";
import { useRecordWebcam } from "react-record-webcam";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import dad from "../img/studyjpg/dad.jpg";
import dadvideo from "../img/studymp4/พ่อ.mp4";
import NavBar from "../NavBar";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
import db, { auth } from "../firebase/firebaseConfig";
import {onAuthStateChanged } from "firebase/auth";


function ExerciseDad() {
  const [uid, setUID] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUID(user.uid); // Move this line inside the conditional block
      }
    });
  }, []);
  console.log("userid",uid);


  const [webcam, setWebcam] = useState(false);
  const [toggle, setToggle] = useState(false);
  const timer = useRef(4);
  const [visible, setVisible] = useState(true);

  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);

  const storage = getStorage();
  const storageRef = ref(storage, "some-child");

  const handleStartRecording = () => {
    setRecording(true);
  };

  const handleStopRecording = () => {
    setRecording(false);
  };

  const handleDownload = () => {
    const url = mediaBlobUrl;
    const a = document.createElement("a");
    a.href = url;
    a.download = "video.mp4";
    a.click();
  };

  const handleDataAvailable = async (data) => {
    const blob = new Blob([data], { type: "video/mp4" });
    const userId = uid; // Replace this with the user's ID
    const storageRef = ref(storage, `videos/${userId}.mp4`);
    // rest of the code...

    try {
      await uploadBytes(storageRef, blob);
      console.log("Uploaded a blob to Firebase Storage!");
    
      const videoURL = await getDownloadURL(storageRef);
    
      // Store video metadata in Firestore, including the user ID
      const videoMetadata = {
        url: videoURL,
        userId: uid,
        status: "false",
        result: "none"
      };
    
      // Set video metadata to the specific uid document
      const docRef = doc(db, "videos", uid);
      await setDoc(docRef, videoMetadata);
      console.log("Video metadata added to the videos collection with uid as document ID");
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const handleStartCapture = () => {
    const options = { mimeType: "video/webm;codecs=vp8" };
    const mediaRecorder = new MediaRecorder(webcamRef.current.stream, options);
  
    let recordedChunks = []; // Add this line
  
    // Modify this event listener
    mediaRecorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    });
  
    mediaRecorder.start();
    handleStartRecording();
  
    setTimeout(() => {
      mediaRecorder.addEventListener("stop", () => {
        handleStopRecording();
        handleDataAvailable(new Blob(recordedChunks, { type: "video/mp4" })); // Add this line
      });
      mediaRecorder.stop();
    }, 10000); // Record for 3 seconds
  };

  function handlevideo() {
    timer.current = 4;
    const interval_id = setInterval(() => {
      timer.current -= 1;
      setToggle((x) => !x);
      if (timer.current === 0) {
        clearInterval(interval_id);
        setWebcam(true);
      }
    }, 5000);
    setVisible((prev) => !prev);
  }
  console.log(timer.current);

  return (
    <div>
      <NavBar />
      <div style={{ paddingTop: "3vh" }}>
        <span style={{ padding: "5vh" }}></span>
        <Link
          to="/study/dad"
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
          พ่อ{" "}
        </span>
        <span style={{ paddingLeft: "65vh" }}></span>
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
                src={dadvideo}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <br />
              <img
                src={dad}
                alt="dad"
                style={{ width: "62vh", paddingLeft: "0vh" }}
              />
            </div>
          </div>

          <div className="col-7">
            <div style={{ paddingTop: "0vh", paddingLeft: "0vh" }}>
              {/* {timer.current === 0 ? (
                webcam && ( */}
              <Webcam ref={webcamRef} style={{ height: "70vh" }} />
              <br />
              {!recording && (
                <button
                  onClick={handleStartCapture}
                  style={{
                    backgroundColor: "#b6c2fc",
                    fontSize: "2vh",
                    color: "black",
                    fontFamily: "Mitr",
                    borderRadius: "3vh",
                    border: "0",
                    padding: "0.5vh",
                  }}
                >
                  Start Recording
                </button>
              )}
              {recording && (
                <button
                  onClick={handleStopRecording}
                  style={{
                    backgroundColor: "#b6c2fc",
                    fontSize: "2vh",
                    color: "black",
                    fontFamily: "Mitr",
                    borderRadius: "3vh",
                    border: "0",
                    padding: "0.5vh",
                  }}
                >
                  Stop Recording
                </button>
              )}
              {mediaBlobUrl && (
                <button
                  onClick={handleDownload}
                  style={{
                    backgroundColor: "#b6c2fc",
                    fontSize: "2vh",
                    color: "black",
                    fontFamily: "Mitr",
                    borderRadius: "3vh",
                    border: "0",
                    padding: "0.5vh",
                  }}
                >
                  Download Video
                </button>
              )}

              {/* )
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
              )} */}
            </div>
            {/* <div
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseDad;
