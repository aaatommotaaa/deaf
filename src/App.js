import { BrowserRouter, Routes, Route, withRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./SignUp";
import Result from "./Result";
import Add from "./Add";
import All from "./All";
import AllforT from "./AllforT";
import CaliDad from "./calibrate/CaliDad";
import CaliMom from "./calibrate/CaliMom";
import CaliGrandpa from "./calibrate/CaliGrandpa";
import CaliGrandma from "./calibrate/CaliGrandma";
import CaliBro from "./calibrate/CaliBro";
import CaliSis from "./calibrate/CaliSis";
import CaliHi from "./calibrate/CaliHi";
import CaliThank from "./calibrate/CaliThank";
import CaliSorry from "./calibrate/CaliSorry";
import CaliHungry from "./calibrate/CaliHungry";
import CaliFull from "./calibrate/CaliFull";
import Stat from "./stat";
import StudyDad from "./study/StudyDad";
import StudyMom from "./study/StudyMom";
import StudyGrandpa from "./study/StudyGrandpa";
import StudyGrandma from "./study/StudyGrandma";
import StudyBro from "./study/StudyBro";
import StudySis from "./study/StudySis";
import StudyHi from "./study/StudyHi";
import StudyThank from "./study/StudyThank";
import StudySorry from "./study/StudySorry";
import StudyHungry from "./study/StudyHungry";
import StudyFull from "./study/StudyFull";
import ExerciseDad from "./exercise/ExerciseDad";
import ExerciseMom from "./exercise/ExerciseMom";
import ExerciseGrandpa from "./exercise/ExerciseGrandpa";
import ExerciseGrandma from "./exercise/ExerciseGrandma";
import ExerciseBro from "./exercise/ExerciseBro";
import ExerciseSis from "./exercise/ExerciseSis";
import ExerciseHi from "./exercise/ExerciseHi";
import ExerciseThank from "./exercise/ExerciseThank";
import ExerciseSorry from "./exercise/ExerciseSorry";
import ExerciseHungry from "./exercise/ExerciseHungry";
import ExerciseFull from "./exercise/ExerciseFull";
import { useState } from "react";
import Web from "./webcam";
import { AuthContext, AuthProvider } from "./Auth";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [curUser, setCurUser] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home isTeacher={isTeacher} />} />
          <Route
            exact
            path="/"
            element={
              <Signin
                setIsSignedIn={setIsSignedIn}
                setCurUser={setCurUser}
                setIsTeacher={setIsTeacher}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/result" element={<Result />} />
          <Route path="/add" element={<Add />} />
          <Route
            path="/all/lessons"
            element={<All isSignedIn={isSignedIn} />}
          />
          <Route path="/all/lessons/for/teacher" element={<AllforT />} />
          <Route path="/calibrate/dad" element={<CaliDad />} />
          <Route path="/calibrate/mom" element={<CaliMom />} />
          <Route path="/calibrate/grandfather" element={<CaliGrandpa />} />
          <Route path="/calibrate/grandmother" element={<CaliGrandma />} />
          <Route path="/calibrate/brother" element={<CaliBro />} />
          <Route path="/calibrate/sister" element={<CaliSis />} />
          <Route path="/calibrate/hi" element={<CaliHi />} />
          <Route path="/calibrate/thank" element={<CaliThank />} />
          <Route path="/calibrate/sorry" element={<CaliSorry />} />
          <Route path="/calibrate/hungry" element={<CaliHungry />} />
          <Route path="/calibrate/full" element={<CaliFull />} />
          <Route
            path="/stat"
            element={<Stat isSignedIn={isSignedIn} curUser={curUser} />}
          />
          <Route path="/study/dad" element={<StudyDad />} />
          <Route path="/study/mom" element={<StudyMom />} />
          <Route path="/study/grandfather" element={<StudyGrandpa />} />
          <Route path="/study/grandmother" element={<StudyGrandma />} />
          <Route path="/study/brother" element={<StudyBro />} />
          <Route path="/study/sister" element={<StudySis />} />
          <Route path="/study/Hi" element={<StudyHi />} />
          <Route path="/study/Thank" element={<StudyThank />} />
          <Route path="/study/Sorry" element={<StudySorry />} />
          <Route path="/study/Hungry" element={<StudyHungry />} />
          <Route path="/study/Full" element={<StudyFull />} />
          <Route path="/exercise/dad" element={<ExerciseDad />} />
          <Route path="/exercise/mom" element={<ExerciseMom />} />
          <Route path="/exercise/grandfather" element={<ExerciseGrandpa />} />
          <Route path="/exercise/grandmother" element={<ExerciseGrandma />} />
          <Route path="/exercise/brother" element={<ExerciseBro />} />
          <Route path="/exercise/sister" element={<ExerciseSis />} />
          <Route path="/exercise/hi" element={<ExerciseHi />} />
          <Route path="/exercise/thank" element={<ExerciseThank />} />
          <Route path="/exercise/sorry" element={<ExerciseSorry />} />
          <Route path="/exercise/hungry" element={<ExerciseHungry />} />
          <Route path="/exercise/full" element={<ExerciseFull />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
