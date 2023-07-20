import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';
    const Home =() => {
      return (
  
        
              <div>
                <span className="bckg" />
                <header>
                  <h1>Dashboard</h1>
                  <nav>
                    <ul>
                    <li>
                        <Link to="/login"><a href="javascript:void(0);" data-title="Products">Login&nbsp;&nbsp;</a></Link>
                      </li>
                      <li>
                        <Link to="/Signup"><a href="javascript:void(0);" data-title="Products">Signup&nbsp;&nbsp;</a></Link>
                      </li>
                      <li>
                        <Link to="/rawmaterial"><a href="javascript:void(0);" data-title="Raw materials">Resources</a></Link>
                      </li>
                      <li>
                       <Link to="/shipping"> <a href="javascript:void(0);" data-title="Shipping orders">Shipping orders</a></Link>
                      </li>
                      <li>
                        <Link to="/stock"><a href="javascript:void(0);" data-title="New stock">Stocks&nbsp;&nbsp;</a></Link>
                      </li>
                      
                    </ul>
                  </nav>
                </header>
                <main>
                  <div className="title">
                    <h2>Inventory Management&nbsp;&nbsp;&nbsp;</h2>
                  <Link to="/About"> <a href="javascript:void(0);">Profile</a></Link>
                  </div>
                  <article className="larg">
                    <div>
                      <h3>&nbsp;&nbsp;Receive and inspect Products <span/></h3>
                      <p>&nbsp;&nbsp;&nbsp;The first step in the inventory management process includes receiving your order from the supplier. Getting this part right is crucial for the following steps to function as efficiently as possible. The first thing that should be done after the order arrives it to inspect the products. It's important to check that the quantity product code and serial code are all &nbsp;&nbsp;&nbsp;correct.</p>
                    </div>
                    <div>
                      <h3>&nbsp;&nbsp;Sort and stock products <span/></h3>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After inspecting the products they must be properly stored in the warehouse and inputted into your leave management system. &nbsp;&nbsp;&nbsp;At this stage it is a good idea to be strategic about how products are stored. Warehouse slotting techniques such as organising products based on SKU and product type can be beneficial</p>
                    </div>
                    <div>
                      <h3>&nbsp;&nbsp;&nbsp;&nbsp;Dropshipping <span /></h3>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dropshipping is when the supplier ships products directly to the customer.he advantages of dropshipping include no startup investment, no excess inventory, no overhead and factory costs.</p>
                    </div>
                    <div>
                      <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bulk Shipment <span/></h3>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bulk shipments are a cost-efficient way of shipping in which businesses palletize inventory to ship in sizeable volumes. Large quantities of goods are transported in a single shipment, typically using specialized equipment such as tankers, hopper cars, or containers. </p>
                    </div>
                    
                  </article>
                </main>
              </div>
            );
          }
       
    

    export default Home;

  