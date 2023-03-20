import "./Login.css";
import image from "./img/bg.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import db, { auth } from "./firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const Signin = ({ setIsSignedIn, setCurUser, setIsTeacher }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, isError] = useState(false);
  const [uid, setUID] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUID(user.uid); // Move this line inside the conditional block
        navigate("/");
      }
    });
  }, [navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const que = query(collection(db, "Users"), where("Email", "==", email));
      const snapshot = await getDocs(que);
      const account_list = [];
      snapshot.forEach((doc) => {
        account_list.push(doc.data().Teacher);
      });
      if (account_list.length > 1) {
        throw new Error("Duplicated Email");
      }
      setIsSignedIn(true);
      setCurUser(email);
      if (account_list[0]) {
        // Teacher
        setIsTeacher(true);
        navigate("/home");
      } else {
        // Student
        setIsTeacher(false);
        navigate("/home");
      }
    } catch (error) {
      isError(true);
      setIsSignedIn(false);
      console.log(error);
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        backgroundSize: "206vh",
        padding: "0",
        fontFamily: "Mitr",
      }}
    >
      <div className="center" style={{ padding: "2vh", textAlign: "center" }}>
        <p style={{ fontSize: "4vh", paddingTop: "2vh" }}>ยินดีต้อนรับสู่</p>
        <p style={{ fontSize: "4vh", color: "#5271FF" }}>DEAR DEAF</p>
        <form method="post">
          <div className="form-floating">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput" style={{ fontSize: "2.5vh" }}>
              อีเมล
            </label>
          </div>
          <br />
          <div className="form-floating">
            <input
              className="form-control"
              type="password"
              name="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword" style={{ fontSize: "2.5vh" }}>
              รหัสผ่าน (มากกว่า 6 ตัว)
            </label>
          </div>
          <br />
          <button
            style={{ width: "100%", borderRadius: "10vh" }}
            type="submit"
            className="button"
            onClick={handleSignIn}
          >
            ตกลง
          </button>
        </form>
        <p></p>
        <Link to="/signup" style={{ padding: "2vh" }}>
          สร้างบัญชีใหม่
        </Link>
      </div>
    </div>
  );
};
export default Signin;
