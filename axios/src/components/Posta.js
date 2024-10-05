import React, { useState } from 'react';
import axios from 'axios';

export default function Posta() {
  const [inputValue, setInputValue] = useState('');
  const [productId, setProductId] = useState('');
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [addedProductId, setAddedProductId] = useState(null);

  const handleData = (e) => {
    setInputValue(e.target.value);
  };

  const handleProductId = (e) => {
    setProductId(e.target.value);
  };

  const handleUpdatedTitle = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('https://dummyjson.com/products/add', {
        title: inputValue,
      });
      console.log('Product added:', response.data);
      setAddedProductId(response.data.id);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    
    try {
      console.log(`Deleting product with ID: ${productId}`); // Log product ID
      const response = await axios.delete(`https://dummyjson.com/products/${productId}`);
      console.log('Deleted:', response.data);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try {
      console.log(`Updating product ID: ${productId} with title: ${updatedTitle}`); // Log details
      const response = await axios.put(`https://dummyjson.com/products/${productId}`, {
        title: updatedTitle,
      });
      console.log('Updated:', response.data);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleData}
        placeholder="Enter product title"
        required
      />
      <button onClick={handleSubmit}>Submit</button>

      <input
        type="text"
        onChange={handleProductId}
        placeholder="Enter product ID to delete/update"
        required
      />
      <button onClick={handleDelete}>Delete</button>

      <input
        type="text"
        onChange={handleUpdatedTitle}
        placeholder="Enter new title for update"
        required
      />
      <button onClick={handleUpdate}>Update</button>

      <p>Last added product ID: {addedProductId}</p>
    </div>
  );
}


