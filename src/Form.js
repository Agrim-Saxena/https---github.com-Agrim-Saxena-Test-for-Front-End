import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://3.228.97.110:9000/api';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setResponse(data.message);
      } else {
        setResponse('Error occurred while making the request.');
      }
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  return (
    <div>
      <h1>API Integration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default Form;
