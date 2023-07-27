import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Stores = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/stores');
        setStores(response.data);
      } catch (error) {
        console.error('Error fetching stores:', error.response?.data);
      }
    };
    fetchStores();
  }, []);

  return (
    <div>
      <h1>All Stores</h1>
      {stores.map((store) => (
        <div key={store.id}>
          <h3>{store.store_name}</h3>
          <p>Store Owner: {store.store_owner}</p>
          <p>Store ID: {store.store_id}</p>
          <img
            src={`http://localhost:3002/${store.store_thumbnail_url}`}
            alt={store.store_name}
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
        </div>
      ))}
    </div>
  );
};

export default Stores;
