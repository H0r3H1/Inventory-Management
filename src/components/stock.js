import React, { useState } from 'react';
import './stock.css';
const Stock = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
      setProducts(updatedProducts);
      setNewProduct({ name: '', price: '' });
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleUpdateProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="container py-5"style = {{backgroundColor : 'gray', borderRadius:'20px',  fontColor:'black' , padding: '30px',width: '100%',height: '100vh'}}>
      <h1 className="text-center mb-4" style = {{color : 'white'}}>Stock</h1>

      <table className="table table-striped"><center style = {{backgroundColor : 'grey', padding: '.625em',color:'black', borderRadius:'3px', marginRight: '150px', marginLeft: '150px', marginBottom: '50px', marginTop: '50px',border: '20%' }}>
        <thead>
          <tr>
            <th>ID</th><br></br>
            <th>Name</th><br></br>
            <th>Quantity</th><br></br>
            <th>Actions</th>
          </tr>
         
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td><br></br>
              <td>{product.name}</td><br></br>
              <td>${product.price}</td><br></br>
              <td>
                <button style={{width:'100%',height: '10%'}}className="btn btn-danger mr-2" onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button><br></br>
                <button className="btn btn-primary" onClick={() => handleUpdateProduct(product.id, { name: `Updated ${product.name}`, price: product.price + 10 })}>
                  Update
                </button><br></br>
              </td>
            </tr>
          ))}
        </tbody></center>
      </table>

      <h2 className="mt-4" style = {{marginRight:'-40px',marginTop:'-200px',position:'left',color : 'black'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Product&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="nameInput" style = {{marginRight:'-100px',marginTop:'-100px',color : 'white',width: '30%'}}>&nbsp;&nbsp;Product Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" style = {{fontSize: '50%',color : 'black'}}></span>
              </div>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="priceInput" style = {{marginRight:'-100px',marginTop:'-100px',color : 'white'}}>Quantity:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" style = {{fontSize: '50%',color : 'black'}}></span>
              </div>
              <input
                type="text"
                className="form-control"
                id="priceInput"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
<br></br>
      <button className="btn btn-success" onClick={handleAddProduct}>
       Send  Order 
      </button>
    </div>
    </div>
    </div>
  );
};

export default Stock;