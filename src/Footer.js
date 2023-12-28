import './assets/css/style.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css'


function Footer() {
    return (
      <div >
        <footer id="footer" class="footer">

<div class="footer-newsletter">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12 text-center">
        <h4>Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
      </div>
      <div class="col-lg-6">
        <form action="" method="post">
          <input type="email" name="email"/><input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div>

<div class="footer-top">
  <div class="container">
    <div class="row gy-4">
      <div class="col-lg-5 col-md-12 footer-info">
        <a href="index.html" class="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt=""/>
          <span>FlexStart</span>
        </a>
        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
        <div class="social-links mt-3">
          <a href="gill" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="kishan" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="rohit" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="pandya" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>

      <div class="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bi bi-chevron-right"></i> <a href="instagram">Home</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="instagram">About us</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="instagram">Services</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="instagram">Terms of service</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="instagram">Privacy policy</a></li>
        </ul>
      </div>

      <div class="col-lg-2 col-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i class="bi bi-chevron-right"></i> <a href="instagram">Web Design</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="instagram">Web Development</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="instagram">Product Management</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="instagram">Marketing</a></li>
          <li><i class="bi bi-chevron-right"></i> <a href="instagram">Graphic Design</a></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>
          A108 Adam Street <br/>
          New York, NY 535022<br/>
          United States <br/><br/>
          <strong>Phone:</strong> +1 5589 55488 55<br/>
          <strong>Email:</strong> info@example.com<br/>
        </p>

      </div>

    </div>
  </div>
</div>

<div class="container">
  <div class="copyright">
    &copy; Copyright <strong><span>FlexStart</span></strong>. All Rights Reserved
  </div>
  <div class="credits">
    
    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
  </div>
</div>
</footer>
    </div>
    );
  }
  
  
  
  export default Footer;