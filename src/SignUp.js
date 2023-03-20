import image from "./img/bgsignup.png";
import { auth } from "./firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import db from "./firebase/firebaseConfig";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import "./Home.css";
import * as React from "react";

const Signup = () => {
  const [accuracy, setAccuracy] = useState(0);
  const [error, isError] = useState(false);
  const [toggleRender, setToggleRender] = useState(false);
  const formValues = useRef({
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
    Accuracy: "",
    UserStatus: "teacher",
    status: "false",
  });

  const handleFormChange = (e) => {
    formValues.current[e.target.name] = e.target.value;
    setToggleRender((x) => !x);
  };

  const handleRadioChange = (e, radioName) => {
    formValues.current[radioName] = e.target.value;
    setToggleRender((x) => !x);
  };
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(
      auth,
      formValues.current.Email,
      formValues.current.Password
    )
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // navigate("/all/lessons");
        if (formValues.current.UserStatus === "teacher") {
          console.log("TO TEACHER");
          navigate("/all/lessons");
        } else {
          navigate("/all/lessons");
        }
        const docRef = await addDoc(collection(db, "Users"), {
          // Concatenate auth.id with a timestamp to create a unique document ID
          ID: `${user.uid}`,
          Name: {
            Firstname: formValues.current.Firstname,
            Lastname: formValues.current.Lastname,
          },
          Email: formValues.current.Email,
          Password: formValues.current.Password,
          Accuracy: Number(formValues.current.Accuracy),
          Teacher: Boolean(formValues.current.Teacher),
          Student: Boolean(formValues.current.Student),
          status: formValues.current.status,
        });
        // ...
      })
      .catch((error) => {
        isError(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const { Firstname, Lastname, Email, Password, Accuracy, UserStatus, status } =
    formValues.current;
  console.log(UserStatus);

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        backgroundSize: "206vh",
        fontFamily: "Mitr",
      }}
    >
      <div
        style={{
          height: "80vh",
          width: "80vh",
          padding: "8vh",
          paddingTop: "16vh",
        }}
      >
        <div className="form-floating">
          <input
            className="form-control"
            type="text"
            name="Firstname"
            id="Firstname"
            value={Firstname}
            onChange={handleFormChange}
          />
          <label htmlFor="floatingInput" style={{ fontSize: "2.5vh" }}>
            ชื่อ
          </label>
        </div>
        <p style={{ padding: "1vh" }} />
        <div className="form-floating">
          <input
            className="form-control"
            type="text"
            id="Lastname"
            name="Lastname"
            value={Lastname}
            onChange={handleFormChange}
          />
          <label htmlFor="floatingInput" style={{ fontSize: "2.5vh" }}>
            นามสกุล
          </label>
        </div>
        <p style={{ padding: "1vh" }} />
        <div className="form-floating">
          <input
            className="form-control"
            type="email"
            name="Email"
            id="Email"
            value={Email}
            onChange={handleFormChange}
          />
          <label htmlFor="floatingInput" style={{ fontSize: "2.5vh" }}>
            อีเมล
          </label>
        </div>
        <p style={{ padding: "1vh" }} />
        <div className="form-floating">
          <input
            className="form-control"
            type="password"
            name="Password"
            id="Password"
            value={Password}
            onChange={handleFormChange}
          />
          <label htmlFor="floatingPassword" style={{ fontSize: "2.5vh" }}>
            รหัสผ่าน (มากกว่า 6 ตัว)
          </label>
        </div>
        <br />
        {/* <div className="form-check form-check-inline">
          <div style={{ paddingBottom: "3vh", paddingLeft: "10vh" }}>
            <input
              type="radio"
              id="teacher"
              value="teacher"
              checked={UserStatus === "teacher"}
              onChange={(e) => handleRadioChange(e, "UserStatus")}
            />
            <label htmlFor="teacher">&nbsp;ครู</label>
            <span style={{ padding: "10vh" }}></span>
            <input
              type="radio"
              id="student"
              value="student"
              checked={UserStatus === "student"}
              onChange={(e) => handleRadioChange(e, "UserStatus")}
            />
            <label htmlFor="student">&nbsp;นักเรียน</label>
          </div>
        </div> */}

        <br />
        <button
          style={{ width: "100%", borderRadius: "10vh" }}
          className="button"
          onClick={onSubmit}
          // to="/all/lessons"
        >
          ตกลง
        </button>
        <br />
        <br />

        <div style={{ fontSize: "2.5vh", textAlign: "center" }}>
          <span>มีบัญชีอยู่แล้วหรือไม่?&nbsp;</span>
          <Link to="/">คลิกเพื่อเข้าสู่ระบบ</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
