// In App.js
import React, { useEffect, useState } from "react";

 function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data (or some other asynchronous operation)
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Show loading message while data is fetching
  }

  return (
    <div>
      {/* ... rest of your component ... */}<div>loadingab............</div>
    </div>
  );
}

export default App;