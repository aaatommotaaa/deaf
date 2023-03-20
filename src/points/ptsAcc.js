import { useEffect, useState } from "react";
import firebase from "../firebase/firebaseConfig";

function AccuracyData({ runs }) {
  function accuracy(percentage) {
    if (percentage < 0.5) {
        return 0;
    } else {
        return 1;
    }
  }

  function Score() {
    const [percentage, setPercentage] = useState(0);
    const [score, setScore] = useState(0);

    const handlePercentageChange = (event) => {
      const newPercentage = event.target.value;
      setPercentage(newPercentage);
      const newScore = accuracy(newPercentage);
      setScore(newScore);
    };

    return (
      <div>
        <label>
          Percentage:
          <input
            type="number"
            value={percentage}
            onChange={handlePercentageChange}
          />
        </label>
        <p>Score: {score}</p>
      </div>
    );
  }

  const [accuracyData, setAccuracyData] = useState([]);

  useEffect(() => {
    const accuracyRef = firebase.firestore().collection(runs);
    accuracyRef.onSnapshot((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setAccuracyData(data);
    });
  }, [runs]);

  return (
    <div>
      {accuracyData.map((item) => (
        <p key={item.id}>Accuracy: {item.accuracy}</p>
      ))}
      <Score />
    </div>
  );
}

export default AccuracyData;
