import React, { useEffect, useState } from 'react';
import "./Load.css"
function Load() {
  const [loading, setloading] = useState(true);
  const [product, setproduct] = useState([]);
  const [count, setcount] = useState(0);

  useEffect(() => {
    setloading(true);
    fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`)
      .then(response => response.json())
      .then(data => {
        // Append more products to the list if count > 0
        setproduct(prev => [...prev, ...data.products]);
        setloading(false);
      })
      .catch(error => {
        console.error(error);
        setloading(false);
      });
  }, [count]); // Run effect on count change

  if (loading && product.length === 0) {
    return <div>Data is loading...</div>;
  }

  return (
    <div className='load-container'>
      <div className="product-container">
        {
          product && product.length > 0
            ? product.map((item) => (
              <div 
              className='product'
              key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
            : <div>No products found</div>
        }
      </div>
      <div className="button-container">
        <button onClick={() => setcount(prev => prev + 1)}>Load More</button>
      </div>
    </div>
  );
}

export default Load;
