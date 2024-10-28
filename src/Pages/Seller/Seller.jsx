import React from 'react';
 import './Seller.css';
import BusImg1 from "./Assets/seller.png"


const SellPage = () => {
  return (
    <>
<div className='container-fluid ' style={{marginTop:"25vh"}}>
  <div className='row '>
    <div className='col-lg-3 col-md-6 col-12'>
    <div className="header-left">
          <img src={BusImg1} alt="Seller" className="img-fluid" />
        </div>
    </div>
    <div className='col-lg-5 col-md-12 col-12'>
    <div className="header-right ">
          <h2>Sell for free on India’s largest online B2B marketplace</h2>
          <div className="stats">
            <div className="stat">
            <i class="bi bi-bar-chart fs-1"></i>
              <p>20.2 crore+</p>
              <span>Buyers</span>
            </div>
            <div className="stat">
            <i class="bi bi-currency-rupee fs-1"></i>
              <p>81 lakh+</p>
              <span>Suppliers</span>
            </div>
            <div className="stat">
            <i class="bi bi-box fs-1"></i>
              <p>11.3 crore+</p>
              <span>Products & Services</span>
            </div>
          </div>
        </div>
    </div>
    <div className='col-lg-4 col-md-12 col-12 bg_info'>
    <div className="registration">
        <h3>Log In/Sign In</h3>
        <button>Start Selling</button>
      </div>
    </div>
  </div>
{/* sell on  */}
<div className='row mt-5'>
  <div className='col-lg-4 col-md-12 col-12'>
    <h3>Sell on Tunii Hub</h3>
    <div className='stat2'>
      <div className='stat'>

    <i class="bi bi-bar-chart fs-1"></i>
    <h6><strong>Grow your Business:</strong> Sell to buyers anytime, anywhere</h6>
    </div>
    <div className='stat'>
    <i class="bi bi-currency-rupee fs-1"></i>
      <h6><strong>Zero Cost:</strong> No commission or transaction fee</h6>
    </div>
    <div className='stat'>
    <i class="bi bi-box fs-1"></i>
      <h6><strong>Manage your Business Better:</strong> Lead Management System & other features</h6>
    </div>
    </div>
  </div>
  <div className='col-lg-8 col-md-12 col-12 '>
  <h3>Get a free listing in 3 simple steps:</h3>

    <div className='row header-left1'>
    
      <div className='col-lg-4 col-md-12 col-12'>
     
      <i class="bi bi-person-fill-add fs-1"></i>
            <h4>1. Create Account</h4>
            <p>Add your name and phone number to get started</p>
      </div>
      <div className='col-lg-4 col-md-12 col-12'>
      <i class="bi bi-geo-alt-fill fs-1"></i>
      <h4>2. Add Business</h4>
      <p>Add name, address & email of your company, store/ business</p>
      </div>

      <div className='col-lg-4 col-md-12 col-12'>
      <i class="bi bi-box-fill fs-1"></i>
        <h4>3. Add Products/ Services</h4>
        <p>Minimum 3 products/services needed for your free listing page</p>
      </div>
    </div>
  </div>

</div>

</div>

</>
  );
};

export default SellPage;
