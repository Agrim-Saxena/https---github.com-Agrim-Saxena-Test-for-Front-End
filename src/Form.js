import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

     // After successful submission, set isSubmitted to true and trigger the refresh.
     setIsSubmitted(true);

     // Reload the page after 2 seconds (2000 milliseconds).
     setTimeout(() => {
       window.location.reload();
     }, 3000);

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
      <h1>Suite Of Business Support Services</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
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
