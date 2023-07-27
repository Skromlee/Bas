import React, { useState } from 'react';
import axios from 'axios';

const CreateStore = () => {
  const [storeName, setStoreName] = useState('');
  const [storeOwner, setStoreOwner] = useState('');
  const [storeID, setStoreID] = useState('');
  const [storeThumbnail, setStoreThumbnail] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('storeName', storeName);
      formData.append('storeOwner', storeOwner);
      formData.append('storeID', storeID);
      formData.append('storeThumbnail', storeThumbnail);

      const response = await axios.post('http://localhost:3002/api/stores', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Clear form fields and image preview after successful submission
      setStoreName('');
      setStoreOwner('');
      setStoreID('');
      setStoreThumbnail(null);
      setPreviewImage(null);
    } catch (error) {
      console.error('Error creating store:', error.response?.data);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setStoreThumbnail(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <h1>Create a New Store</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Store Name" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
        <input type="text" placeholder="Store Owner" value={storeOwner} onChange={(e) => setStoreOwner(e.target.value)} />
        <input type="text" placeholder="Store ID" value={storeID} onChange={(e) => setStoreID(e.target.value)} />
        <input type="file" name="img" onChange={handleImageChange} />
        {previewImage && <img src={previewImage} alt="Thumbnail Preview" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
        <button type="submit">Create Store</button>
      </form>
    </div>
  );
};

export default CreateStore;
