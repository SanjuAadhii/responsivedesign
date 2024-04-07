import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { LiaWeightSolid } from 'react-icons/lia';

function Layout() {
  return (
    
<div className="bg-info-subtle">
    <nav className="navbar navbar-expand-lg bg-info mt-5 ">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse row " id="navbarText">
        <ul className="col-12 justify-content-center navbar-nav me-auto mb-2 mb-lg-0  ">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
            </li>
        </ul>
        
        </div>
    </div>
    </nav>
            
    <div className=" container m-5  p-5  ">
            <div className="row justify-content-center ">
                <div className="col-md-6 ">
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary ms-5 rounded" data-mdb-ripple-init>Search</button>
                </div>
                </div>
            </div>
    </div>
    </div>  
   
   
  )
}

export default Layout