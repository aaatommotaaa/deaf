import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function Web() {
  const webcamRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [mediaBlobUrl, setMediaBlobUrl] = useState(null);

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

  const handleDataAvailable = (data) => {
    const blob = new Blob([data], { type: "video/mp4" });
    const url = URL.createObjectURL(blob);
    setMediaBlobUrl(url);
  };

  const handleStartCapture = () => {
    const options = { mimeType: "video/webm;codecs=vp9" };
    const mediaRecorder = new MediaRecorder(webcamRef.current.stream, options);
    mediaRecorder.addEventListener("dataavailable", handleDataAvailable);
    mediaRecorder.start();
    handleStartRecording();

    setTimeout(() => {
      mediaRecorder.stop();
      handleStopRecording();
    }, 10000); // Record for 5 seconds
  };

  return (
    <div>
      <Webcam ref={webcamRef} />
      {!recording && (
        <button onClick={handleStartCapture}>Start Recording</button>
      )}
      {recording && (
        <button onClick={handleStopRecording}>Stop Recording</button>
      )}
      {mediaBlobUrl && <button onClick={handleDownload}>Download Video</button>}
    </div>
  );
}
export default Web;

// import React from "react";
// import ReactDOM from "react-dom";
// import { RecordWebcam, useRecordWebcam } from "react-record-webcam";

// const OPTIONS = {
//   fileName: "test-filename",
//   mimeType: "video/x-matroska;codecs=avc1",
//   width: 1920,
//   height: 1080,
//   disableLogs: true,
// };

// function Webcam() {
//   const recordWebcam = useRecordWebcam(OPTIONS);

//   const getRecordingFile = async () => {
//     const blob = await recordWebcam.getRecording();
//     console.log({ blob });
//   };

//   const getBlob = async (blob) => {
//     console.log({ blob });
//   };

//   return (
//     <div>
//       <div className="demo-section">
//         <h1>Hooks demo</h1>
//         <p>Camera status: {recordWebcam.status}</p>
//         <div>
//           <button
//             disabled={
//               recordWebcam.status === "OPEN" ||
//               recordWebcam.status === "RECORDING" ||
//               recordWebcam.status === "PREVIEW"
//             }
//             onClick={recordWebcam.open}
//           >
//             Open camera
//           </button>
//           <button
//             disabled={recordWebcam.status === "CLOSED"}
//             onClick={recordWebcam.close}
//           >
//             Close camera
//           </button>
//           <button
//             disabled={
//               recordWebcam.status === "CLOSED" ||
//               recordWebcam.status === "RECORDING" ||
//               recordWebcam.status === "PREVIEW"
//             }
//             onClick={recordWebcam.start}
//           >
//             Start recording
//           </button>
//           <button
//             disabled={recordWebcam.status !== "RECORDING"}
//             onClick={recordWebcam.stop}
//           >
//             Stop recording
//           </button>
//           <button
//             disabled={recordWebcam.status !== "PREVIEW"}
//             onClick={recordWebcam.retake}
//           >
//             Retake
//           </button>
//           <button
//             disabled={recordWebcam.status !== "PREVIEW"}
//             onClick={recordWebcam.download}
//           >
//             Download
//           </button>
//           <button
//             disabled={recordWebcam.status !== "PREVIEW"}
//             onClick={getRecordingFile}
//           >
//             Get recording
//           </button>
//         </div>
//         <video
//           ref={recordWebcam.webcamRef}
//           style={{
//             display: `${
//               recordWebcam.status === "OPEN" ||
//               recordWebcam.status === "RECORDING"
//                 ? "block"
//                 : "none"
//             }`,
//           }}
//           autoPlay
//           muted
//         />
//         <video
//           ref={recordWebcam.previewRef}
//           style={{
//             display: `${recordWebcam.status === "PREVIEW" ? "block" : "none"}`,
//           }}
//           autoPlay
//           muted
//           loop
//         />
//       </div>
//       <div className="demo-section">
//         <h1>Component demo</h1>
//         <RecordWebcam options={OPTIONS} />
//       </div>
//       <div className="demo-section">
//         <RecordWebcam
//           options={OPTIONS}
//           render={(renderProps) => (
//             <div>
//               <h1>Component render prop demo</h1>
//               <p>Camera status: {renderProps.status}</p>
//               <div>
//                 <button
//                   disabled={
//                     renderProps.status === "OPEN" ||
//                     renderProps.status === "RECORDING" ||
//                     renderProps.status === "PREVIEW"
//                   }
//                   onClick={renderProps.openCamera}
//                 >
//                   Open camera
//                 </button>
//                 <button
//                   disabled={renderProps.status === "CLOSED"}
//                   onClick={renderProps.closeCamera}
//                 >
//                   Close camera
//                 </button>

//                 <button
//                   disabled={
//                     renderProps.status === "CLOSED" ||
//                     renderProps.status === "RECORDING" ||
//                     renderProps.status === "PREVIEW"
//                   }
//                   onClick={renderProps.start}
//                 >
//                   Start recording
//                 </button>
//                 <button
//                   disabled={renderProps.status !== "RECORDING"}
//                   onClick={renderProps.stop}
//                 >
//                   Stop recording
//                 </button>
//                 <button
//                   disabled={renderProps.status !== "PREVIEW"}
//                   onClick={renderProps.retake}
//                 >
//                   Retake
//                 </button>
//                 <button
//                   disabled={renderProps.status !== "PREVIEW"}
//                   onClick={renderProps.download}
//                 >
//                   Download
//                 </button>
//                 <button
//                   disabled={renderProps.status !== "PREVIEW"}
//                   onClick={async () => {
//                     const blob = await renderProps.getRecording();
//                     getBlob(blob);
//                   }}
//                 >
//                   Get blob
//                 </button>
//               </div>
//             </div>
//           )}
//         />
//       </div>
//     </div>
//   );
// }

// export default Webcam;

// import React, { useRef, useState } from "react";
// import Webcam from "react-webcam";
// import firebase from "firebase/app-check";
// import "firebase/storage";

// const videoConstraints = {
//   width: 1280,
//   height: 720,
//   facingMode: "user",
// };

// const WebcamCapture = () => {
//   const webcamRef = useRef(null);
//   const [recordedChunks, setRecordedChunks] = useState([]);
//   const [recording, setRecording] = useState(false);
//   const [uploading, setUploading] = useState(false);

//   const handleStartRecording = () => {
//     setRecording(true);
//   };

//   const handleStopRecording = () => {
//     setRecording(false);
//   };

//   const handleDataAvailable = (data) => {
//     if (data && data.data && data.data.size > 0) {
//       setRecordedChunks((prevRecordedChunks) => [
//         ...prevRecordedChunks,
//         data.data,
//       ]);
//     }
//   };

//   const handleUpload = async () => {
//     setUploading(true);
//     const storageRef = firebase.storage().ref();
//     const fileRef = storageRef.child("video.webm");
//     const blob = new Blob(recordedChunks, { type: "video/webm" });
//     await fileRef.put(blob);
//     setUploading(false);
//   };

//   return (
//     <>
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         videoConstraints={videoConstraints}
//         onUserMediaError={() => {}}
//       />
//       <button onClick={handleStartRecording}>Start Recording</button>
//       <button onClick={handleStopRecording}>Stop Recording</button>
//       <button
//         onClick={handleUpload}
//         disabled={uploading || recordedChunks.length === 0}
//       >
//         {uploading ? "Uploading..." : "Upload"}
//       </button>
//       {recording && (
//         <video
//           src={URL.createObjectURL(
//             new Blob(recordedChunks, { type: "video/webm" })
//           )}
//           autoPlay
//           muted
//           loop
//         />
//       )}
//     </>
//   );
// };

// export default videoConstraints;
