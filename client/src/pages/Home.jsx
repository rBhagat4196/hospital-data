import { useState } from "react";
import axios from "axios"
import { Navigate } from "react-router-dom";
function Home() {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    age: '',
    appointmentPreference: '',
    diseaseType: 'Other',
    disease: '',
    diseasePhase: 'Stable',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [redirect,setRedirect] = useState(false)
  const [id, setId] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/patent-details", formData);
      const newId = data._id; // Store the ID in a variable
      setId(newId); // Update the state with the new ID
      if (data && newId !== "") {
        setRedirect(true);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  if (redirect && id !== null) {
    return <Navigate to={`/patent/${id}`} />;
  }
  return (
    <div>
      <h2>Medical Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Appointment Preference (Date):
            <input
              type="date"
              name="appointmentPreference"
              value={formData.appointmentPreference}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Disease Type:
            <select
              name="diseaseType"
              value={formData.diseaseType}
              onChange={handleInputChange}
            >
              <option value="Other">Other</option>
              <option value="Infectious">Infectious</option>
              <option value="Chronic">Chronic</option>
              <option value="Autoimmune">Autoimmune</option>
              <option value="Allergic">Allergic</option>
              {/* Add more disease types as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            Disease:
            <input
              type="text"
              name="disease"
              value={formData.disease}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Phase of Disease (Level of Critical):
            <select
              name="diseasePhase"
              value={formData.diseasePhase}
              onChange={handleInputChange}
            >
              <option value="Stable">Stable</option>
              <option value="Moderate">Moderate</option>
              <option value="Critical">Critical</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home
