import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stock.css';



const Stock = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '', date: '' });

  const fetchStock = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/stocks');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching stock:', error);
    }
  };

  useEffect(() => {
    fetchStock();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/stocks/add', newProduct);
      setProducts([...products, response.data]);
      setNewProduct({ name: '', price: '', quantity: '', date: '' });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/stocks/${productId}`);
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdateProduct = async (productId, updatedProduct) => {
    try {
      await axios.put(`http://localhost:8080/api/stocks/${productId}`, updatedProduct);
      const updatedProducts = products.map((product) =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    
    
    
      
        <div className="container mt-4">
      <h1 className="mb-4">Stock Table</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
        
          <tr>
            <th>ID</th><br></br>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        
        <tbody>
          
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.date}</td>
              <td>
              
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                <button
                  onClick={() =>
                    handleUpdateProduct(product.id, {
                      name: `Updated ${product.name}`,
                      price: product.price + 10,
                    })
                  }
                >
                 
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Product</h2><br></br>
      <div>
      <div className='img'>
              <img  align = "left" src="https://static.vecteezy.com/system/resources/previews/005/647/959/original/isometric-illustration-concept-man-analyzing-goods-in-warehouse-free-vector.jpg" width="400" height="350"></img></div>
        <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          required
        />
      </div><br></br>
      <div>
        <label>Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          required
        />
         
      </div><br></br>
      <div>
        <label>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="number"
          name="quantity"
          value={newProduct.quantity}
          onChange={handleInputChange}
          required
        />
      </div><br></br>
      <div>
      
        <label>Date:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="date"
          name="date"
          value={newProduct.date}
          onChange={handleInputChange}
          required
        />
        
      </div><br></br>
      
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  
  );
};

export default Stock;