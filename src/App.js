import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// url for the api containing the 
const url = 'https://course-api.com/react-tours-project'
function App() {

  // set the loading page and the initialize the tours ppage
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const delTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // this ferches the tours from the api and calls it using useEffect
  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  // loading page 
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  // when all tours end 'NO TOURS' pages display 
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={() => fetchTours()}>Refesh</button>
        </div>
      </main>
    );
  }

  return (<main>
    <Tours tours={tours} delTours={delTours} />
  </main>
  );
}

export default App
