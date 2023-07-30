import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 " style={{position:'absolute',bottom:'0', width:'100vw'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: contact@example.com</li>
              <li>Phone: +1 123-456-7890</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-white">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-white">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter to receive updates.</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center bg-secondary py-2" style={{height:'3rem'}}>
        <p>&copy; {new Date().getFullYear()} Your Ecommerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
