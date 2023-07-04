import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/fonts/themify-icons/themify-icons.css'


function App() {
  return (
    <>
      <div id="header">
            <div class="container">
                <a id="nav-brand" href=""><img src="src/assets/image/logo.png" alt=""/></a>
                <ul id="nav">
                    <li class="dropdown">
                        <a href="">HOME</a>
                        <i class="dropdown-icon ti-angle-down"></i>
                        <ul class="subnav">
                            <li>
                                <a href="">HOME 1</a>
                            </li>
                            <li>
                                <a href="">HOME 2</a>
                            </li>
                            <li>
                                <a href="">HOME 3</a>
                            </li>
                            <li>
                                <a href="">HOME 4</a>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">ABOUT</a>
                        <i class="dropdown-icon ti-angle-down"></i>
                        <ul class="subnav">
                            <li>
                                <a href="">ABOUT US</a>
                            </li>
                            <li>
                                <a href="">ABOUT ME</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="">SERVICES</a></li>
                    <li class="dropdown">
                        <a href="">PORTFOLIO</a>
                        <i class="dropdown-icon ti-angle-down"></i>
                        <ul class="subnav">
                            <li>
                                <a href="">PORTFOLIO-1</a>
                            </li>
                            <li>
                                <a href="">PORTFOLIO-2</a>
                            </li>
                            <li>
                                <a href="">PORTFOLIO DETAILS</a> 
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="">NEWS</a>
                        <i class="dropdown-icon ti-angle-down"></i>
                        <ul class="subnav">
                            <li>
                                <a href="">NEWS GRID</a>
                            </li>
                            <li>
                                <a href="">NEWS STANDARD</a>
                            </li>
                            <li>
                                <a href="">NEWS DETAILS</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </div>
        </div>
        {/* <!-- CONTACT US --> */}
        <div id="banner">
            <div class="container">
                <div class="banner-content">
                    <h1>Design Studio</h1>
                    <p>Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.
                        <br/>
                        aliqua enim ad minim veniam quis.</p>
                        <a class="contact-btn" href="">Contact Us</a>
                </div>
                <div class="banner-image">
                    <img src="src/assets/image/wow-girl.png" alt=""/>
                </div>
            </div>
        </div>
        {/* <!-- SERVICES --> */}
        <div id="service">
            <div class="container">
                <div class="service-list">
                    <div class="service-item">
                        <i class="ti-ruler-pencil"></i>
                        <h4>Brand Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.</p>
                    </div>
                    <div class="service-item">
                        <i class="ti-announcement"></i>
                        <h4>Seo & Marketing</h4>
                        <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.</p>
                    </div>
                    <div class="service-item">
                        <i class="ti-palette"></i>
                        <h4>Creative Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ABOUT US --> */}
        <div id="about">
            <div class="container">
                <div class="about-image">
                    <img src="src/assets/image/about.jpg" alt=""/>
                </div>
                <div class="about-content">
                    <span>ABOUT US</span>
                    <h3>We are Design &<br/>
                        Development Team.</h3>
                    <p>Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.duis aute irure.</p>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                    <a class="purchase-btn" href="">Purchase now</a>
                </div>
            </div>
        </div>
        {/* <!-- OUR PROJECTS --> */}
        <div id="projects">
            <div class="container">
                <div class="projects-content">
                    <span>OUR PROJECTS</span>
                    <h3>Take a Look Around Our Portfolio</h3>
                </div>
                <div class="projects-image">
                    <div class="img-container">
                        <img src="src/assets/image/item-1.jpg" alt="" class="img-1"/>
                        <img src="src/assets/image/item-4.jpg" alt="" class="img-4"/>
                    </div>
                    <div class="img-container">
                        <img src="src/assets/image/item-6.jpg" alt="" class="img-6"/>
                        <img src="src/assets/image/item-2.jpg" alt="" class="img-2"/>
                    </div>
                    <div class="img-container">
                        <img src="src/assets/image/item-3.jpg" alt="" class="img-3"/>
                        <img src="src/assets/image/item-5.jpg" alt="" class="img-5"/>
                    </div>   
                </div>
            </div>
        </div>
        {/* <!-- STATUS --> */}
        <div id="status">
            <div class="container">
                <div class="status-item">
                    <i class="ti-briefcase"></i>
                    <div class="status-content">
                        <h2>370</h2>
                        <p>Work Completed</p>
                    </div>
                </div>
                <div class="status-item">
                    <i class="ti-paint-bucket"></i>
                    <div class="status-content">
                        <h2>450</h2>
                        <p>New Projects</p>
                    </div>
                </div>
                <div class="status-item">
                    <i class="ti-heart"></i>
                    <div class="status-content">
                        <h2>50k+</h2>
                        <p>Happy Customers</p>
                    </div>
                </div>
                <div class="status-item">
                    <i class="ti-cup"></i>
                    <div class="status-content">
                        <h2>50+</h2>
                        <p>Awards Win</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- OUR SKILL --> */}
        <div id="skill">
            <div class="container">
                <div class="skill-show">
                    <div class="skill-content">
                        <span>OUR SKILL</span>
                        <h3>We are Design &<br/>
                            Development Team.</h3>
                    </div>
                    <div class="skill-list">
                        <div class="skill-item">
                            <div class="skill-name">BRANDING</div>
                            <div class="skill-bar"></div>
                            <div class="skill-number">85</div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-name">CONSULTING</div>
                            <div class="skill-bar"></div>
                            <div class="skill-number">90</div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-name">BUSINESS</div>
                            <div class="skill-bar"></div>
                            <div class="skill-number">75</div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-name">PROMOTION</div>
                            <div class="skill-bar"></div>
                            <div class="skill-number">90</div>
                        </div>
                    </div>
                </div>
                
                <div class="skill-image">
                    <img src="src/assets/image/pattern-skill.jpg" alt=""/>
                    <img class="img-abs" src="src/assets/image/skill.jpg" alt=""/>
                </div>
            </div>
        </div>
        {/* <!-- TESTIMONIALS --> */}
        <div id="testimonials">
            <div class="container">
                <div class="skill-content">
                    <span>TESTIMONIALS</span>
                    <h3>Our Clients Say</h3>
                </div>
                <div class="client-list">
                    <div class="client-item">
                        <img src="src/assets/image/test-1.jpg" alt=""/>
                        <p>Lorem ipsum dolor amet constur adipisicing elit sed eiusmtempor incid dolore magna aliqu. enim minim
                            veniam.</p>
                        <h5>Liam Hughes</h5>
                        <span>Manager</span>
                    </div>
                    <div class="client-item">
                        <img src="src/assets/image/test-2.jpg" alt=""/>
                        <p>Lorem ipsum dolor amet constur adipisicing elit sed eiusmtempor incid dolore magna aliqu. enim minim
                            veniam.</p>
                        <h5>Liam Hughes</h5>
                        <span>Manager</span>
                    </div>
                    <div class="client-item">
                        <img src="src/assets/image/test-3.jpg" alt=""/>
                        <p>Lorem ipsum dolor amet constur adipisicing elit sed eiusmtempor incid dolore magna aliqu. enim minim
                            veniam.</p>
                        <h5>Liam Hughes</h5>
                        <span>Manager</span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- SPONSOR --> */}
        <div id="sponsor">
            <div class="container">
                <img src="src/assets/image/client-1.png" alt=""/>
                <img src="src/assets/image/client-2.png" alt=""/>
                <img src="src/assets/image/client-3.png" alt=""/>
                <img src="src/assets/image/client-4.png" alt=""/>
                <img src="src/assets/image/client-5.png" alt=""/>
            </div>
        </div>
        {/* <!-- TEAM --> */}
        <div id="team">
            <div class="container">
                <img src="src/assets/image/team-1.jpg" alt=""/>
                <img src="src/assets/image/team-2.jpg" alt=""/>
                <img src="src/assets/image/team-3.jpg" alt=""/>
                <img src="src/assets/image/team-4.jpg" alt=""/>
            </div>
        </div>
        {/* <!-- LATEST ARTICLE --> */}
        <div id="article">
            <div class="container">
                <div class="article-content">
                    <span>LATEST ARTICLE</span>
                    <h3>Stay Update with dizer.</h3>
                </div>
                <div class="article-list">
                    <div class="article-item">
                        <div class="article-img">
                            <img src="src/assets/image/blog-1.jpg" alt=""/>
                            <a href="" class="article-category">Article</a>
                        </div>
                        <a href="">
                            <h4>Elit duied aiusm tempor did labore dolory</h4>
                        </a>
                        <div class="article-data">
                            <a href="">BY ADMIN</a>
                            <span> / ON 2 SEP, 2018</span>
                        </div>
                        <p>Excepteur sint ocacat cupidatat non proi dent sunt in culpa qui officia deserunt.mollit anim id est laborum. sed ut pers piciatis unde.

</p>
                    </div>
                    <div class="article-item">
                        <div class="article-img">
                            <img src="src/assets/image/blog-2.jpg" alt=""/>
                            <a href="" class="article-category">Lifestyle</a>
                        </div>
                        <a href="">
                            <h4>Elit duied aiusm tempor did labore dolory</h4>
                        </a>
                        <div class="article-data">
                            <a href="">BY ADMIN</a>
                            <span> / ON 2 SEP, 2018</span>
                        </div>
                        <p>Excepteur sint ocacat cupidatat non proi dent sunt in culpa qui officia deserunt.mollit anim id est laborum. sed ut pers piciatis unde.

</p>
                    </div>
                    <div class="article-item">
                        <div class="article-img">
                            <img src="src/assets/image/blog-3.jpg" alt=""/>
                            <a href="" class="article-category">Creative</a>
                        </div>
                        <a href="">
                            <h4>Elit duied aiusm tempor did labore dolory</h4>
                        </a>
                        <div class="article-data">
                            <a href="">BY ADMIN</a>
                            <span> / ON 2 SEP, 2018</span>
                        </div>
                        <p>Excepteur sint ocacat cupidatat non proi dent sunt in culpa qui officia deserunt.mollit anim id est laborum. sed ut pers piciatis unde.

</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- QUOTE --> */}
        <div id="quote">
            <div class="container">
                <h2>Dizer Give The Smart Solution For Your Business</h2>

                    <a class="get-quote-btn" href="">Get A Quote</a>
            </div>
        </div>
        {/* <!-- FOOTER --> */}
        <div id="footer">
            <div class="container">
                <div class="footer-list">
                    <div class="about-footer footer-item">
                        <h4>About dizer.</h4>
                        <p>Lorem ipsum dolor amet consectetur adipielit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam.</p>
                        <ul>
                            <li>
                                <a href="">
                                    <i class="ti-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="ti-vimeo-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="ti-twitter-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <i class="ti-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="navigation-footer footer-item">
                        <h4>Navigation</h4>
                        <ul>
                            <li>
                                <a href="">About us</a>
                            </li>
                            <li>
                                <a href="">Services</a>
                            </li>
                            <li>
                                <a href="">Projects</a>
                            </li>
                            <li>
                                <a href="">Company News</a>
                            </li>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div class="services-footer footer-item">
                        <h4>Services</h4>
                        <ul>
                            <li>
                                <a href="">Brand Design</a>
                            </li>
                            <li>
                                <a href="">Seo & Marketing</a>
                            </li>
                            <li>
                                <a href="">Creative Design</a>
                            </li>
                            <li>
                                <a href="">Photography</a>
                            </li>
                            <li>
                                <a href="">Print Design</a>
                            </li>
                        </ul>
                    </div>
                    <div class="contact-footer footer-item">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>
                                <p >9567 Turner Trace Apt. 466 North Willie, BC C3G8A4</p>
                            </li>
                            <li>
                                <a href="">+21 123 456 5523</a>
                            </li>
                            <li>
                                <a href="">Hello@Dizer.Com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-data">
                    <div class="row">
                        <p>dizer. © 2018 All Right Reserved</p>
                        <img src="src/assets/image/logo.png" alt=""/>
                        <div class="term-policy">
                            <a href="">Terms of Service</a>
                            <span> | </span>
                            <a href=""> Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
