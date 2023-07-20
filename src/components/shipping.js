import React from 'react';

import './shipping.css';
    const Shipping =() => {
      return (
        
              <div>
                <h1>Shipping Orders</h1>
                <div className="table-wrap">
                  <center>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Order Date</th>
                        <th>Product</th>
                        <th>Shipping date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Sivakumar</td>
                        <td>United States</td>
                        <td>11th May 2023</td>
                        <td>Teddy</td>
                        <td>20th May 2023</td>


                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Bhuvana</td>
                        <td>Germany</td>
                        <td>20th June 2022</td>
                        <td>Cup</td>
                        <td>30th June 2022</td>


                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Harshitha</td>
                        <td>Italy</td>
                        <td>11th Dec 2022</td>
                        <td>Water Bottle</td>
                        <td>21st Dec 2022</td>


                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Satwika</td>
                        <td>Canada</td>
                        <td>1st Oct 2023</td>
                        <td>Laptop</td>
                        <td>11th Oct 2023</td>


                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Agalya</td>
                        <td>Afghanistan</td>
                        <td>21st Aug 2023</td>
                        <td>Phone</td>
                        <td>1st Sep 2023</td>


                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Abinaya</td>
                        <td>Greece</td>
                        <td>30th Nov 2023</td>
                        <td>Watch</td>
                        <td>2nd Nov 2023</td>


                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Anu</td>
                        <td>Dubai</td>
                        <td>1st Jan 2023</td>
                        <td>Speakers</td>
                        <td>11th Jan 2023</td>


                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Ajay</td>
                        <td>India</td>
                        <td>5th Sep 2023</td>
                        <td>Airpods</td>
                        <td>15th Sep 2023</td>


                      </tr>
                    </tbody>
                  </table>
                  </center>
                </div>
              </div>
            );
          }
        
 export default Shipping;