import React, { useState } from 'react';

function ReportProblem() {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [userId] = useState(1);  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');  

    const problemData = { user_id: userId, description, location };
    console.log(problemData);
    try {
        console.log("inside the try");
      const response = await fetch('http://localhost:3001/report-problem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(problemData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Problem reported successfully!');
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div>
      <h1>Report a Problem</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Report Problem</button>
      </form>
    </div>
  );
}

export default ReportProblem;
