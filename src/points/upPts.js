import { db } from "./firebase";

const MyForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const myintegerfield = parseInt(formData.get("myintegerfield"), 10);

    const docRef = db.collection("mycollection").doc("mydocument");

    await docRef.set({
      myintegerfield: myintegerfield,
    });

    console.log("Document created");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="myintegerfield">Enter an integer:</label>
      <input type="number" id="myintegerfield" name="myintegerfield" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
