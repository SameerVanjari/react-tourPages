import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, delTours }) => {
  return (<section>
    <div className="title">
      <h2>Tour Plans</h2>
      <div className='underline'></div>
    </div>

{/* mapping the tour components for all the tours */}
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} delTours={delTours} />;
      })}
    </div>

  </section>);
};

export default Tours;
