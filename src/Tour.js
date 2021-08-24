import React, { useState } from 'react';

const Tour = ({id, image, name, info, price, delTours}) => {
  const [readMore, setReadMore] = useState(false);

  return (<article className='single-tour'>
    <img src={image} alt={name} />
    <footer> 
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      {/* truncated text  */}
      <p>{readMore?info: `${info.substring(0, 200)}... `} 
      <button onClick={() => setReadMore(!readMore)}>
        {readMore? 'show less' : 'read more'}
      </button>
      </p>
      <button className="delete-btn" onClick={() => delTours(id)} >Not interested</button>
    </footer>
    </article>);
};

export default Tour;
