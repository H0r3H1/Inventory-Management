import React from 'react';
import { Link } from 'react-router-dom';

import './about.css';
    const About =() => {
      return (
    
      
              <div>
                <header className="header">
                  <ul>
                    <li className="cor-1" />
                    <li className="cor-2" />
                    <li className="cor-3" />
                    <li className="cor-4" />
                    <li className="cor-5" />
                  </ul>
                </header>
                <div className="wrap">
                  <nav className="menu">
                    <ul>
                      <li>
                      <Link to="/"><a href="#">Home</a></Link>                      </li>
                      <li>
                      <Link to="/me">  <a href="#">About me</a></Link>
                      </li>
                      <li>
                      <Link to="/Contact"><a href="#">Contact</a></Link>
                      </li>
                    </ul>
                  </nav>
                  <aside className="sidebar">
                    <div className="widget">
                      <h2>Harshitha</h2>
                      <p>Hello, my name is harshitha. I’m 20 years old. I live in India. I work as a Web Designer.<br /> Contact me:<br/>harshithabhuvana2003@gmail.com</p>
                    </div>
                    
                  </aside>
                  <div className="blog">
                    <div className="conteudo">
                      
                      <h1>Inventory Management</h1>
                      <hr />
                      <p>
                      Insight across systems and silos
See your inventory across systems and silos. Build dashboards based on geography, brands or responsibilities, and customize alerts and thresholds.
                      </p>
                      <p>
                      Accurate, scalable inventory views
Get accurate inventory views and real-time updates using Akamai gateways and Cassandra databases. Auto-scale as demand changes without IT assistance                      </p>
                     <a href="https://www.channelsight.com/blog/inventory-management" className="continue-lendo">Read more →</a>
                    </div>
                    <div className="conteudo">
                      
                      <img src="https://img.freepik.com/premium-vector/inventory-control-system-concept-professional-manager-checking-goods-stock-supply-inventory-management-with-goods-demand_185038-803.jpg" />
                      <h1>  Process of Inventory Management </h1>
                      <hr />
                      <p>
                     
Before building an inventory management plan, you’ll need to have a solid understanding of each step in the inventory management process. This is crucial to minimizing error and choosing the most effective inventory management software for your business.

Goods are delivered to your facility. This is when raw materials and subcomponents for manufacturers or finished goods for consumers first enter your warehouse.
Inspect, sort and store goods. Whether you use dropshipping, cross-docking or a different warehouse management system, this when inventory is reviewed, sorted and stored in their respective stock areas.
Monitor inventory levels. This may be through physical inventory counts, perpetual inventory software or cycle counts and helps minimize the chance of error.
Stock orders are placed. Customers place orders either on your website or in-store.
Stock orders are approved. This is when you pass the order to your supplier, or it may be automated through your POS system.
Take goods from stock. The necessary goods are found by SKU number, taken from stock and shipped to the manufacturer or customer.
Update inventory levels. Using a perpetual inventory system, you can automatically update inventory levels and share with necessary stakeholders.
Low stock levels trigger purchasing/reordering. Restock inventory as needed.
To better visualize these eight steps, try creating an inventory process map like the one below. Track and review each step of the process in order to minimize out-of-stock and overstocked inventory.                      </p>
                      
                      <a href="https://planergy.com/blog/inventory-management-process-flow/" className="continue-lendo">Read more →</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        
export default About;