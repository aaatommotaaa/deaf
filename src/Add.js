import * as React from "react";
import "./Login.css";
import "./index.css";
import image from "./img/bg.png";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import NavBar from "./NavBar";

function Add() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          height: "100vh",
          padding: "0",
          fontFamily: "Mitr",
        }}
      >
        <NavBar />
        <div className="center" style={{ padding: "2vh", textAlign: "center" }}>
          <p style={{ fontSize: "6vh", paddingTop: "2vh" }}>เพิ่มบทเรียน </p>
          <form method="post">
            <TextField
              style={{ paddingBottom: "2vh", width: "100%" }}
              label="ชื่อบทเรียน"
              variant="standard"
              required
            />
            <div style={{ padding: "1vh", paddingLeft: "0vh", align: "left" }}>
              <form action="/action_page.php">
                <p> ไฟล์รูปภาพประกอบ </p>
                <input type="file" id="myFile" name="filename" />

                <p style={{ paddingTop: "2vh" }}> ไฟล์วิดีโอประกอบ </p>
                <input type="file" id="myFile" name="filename" />
              </form>
            </div>
            {/* <div
              style={{
                padding: "1vh",
                paddingBottom: "2vh",
                paddingLeft: "0vh",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#CECECE",
                  fontFamily: "Mitr",
                  color: "black",
                  marginLeft: "-40px",
                }}
                variant="contained"
                component="label"
              >
                อัพโหลด
                <input hidden accept="video/*" multiple type="file" required />
              </Button>
              <span style={{ paddingLeft: "3vh" }}> วิดีโอประกอบ </span>
            </div> */}

            <button
              style={{ width: "100%", borderRadius: "10vh" }}
              type="submit"
              className="button"
            >
              ตกลง
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;
