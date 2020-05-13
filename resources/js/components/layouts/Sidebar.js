import React from 'react'

export default function Sidebar() {
    return (
        <div >
            <div className="post-sidebar-area right-sidebar mt-30 mb-30 box-shadow">
                {/* <!-- Sidebar Widget --> */}
                <div className="single-sidebar-widget p-30">
                    {/* <!-- Social Followers Info --> */}
                    <div className="social-followers-info">
                        {/* <!-- Facebook --> */}
                        <a href="#" className="facebook-fans"><i className="fa fa-facebook"></i> 4,360 <span>Fans</span></a>
                        {/* <!-- Twitter --> */}
                        <a href="#" className="twitter-followers"><i className="fa fa-twitter"></i> 3,280 <span>Followers</span></a>
                        {/* <!-- YouTube --> */}
                        <a href="#" className="youtube-subscribers"><i className="fa fa-youtube"></i> 1250 <span>Subscribers</span></a>
                        {/* <!-- Google --> */}
                        <a href="#" className="google-followers"><i className="fa fa-google-plus"></i> 4,230 <span>Followers</span></a>
                    </div>
                </div>

                {/* <!-- Sidebar Widget --> */}
                <div className="single-sidebar-widget p-30">
                    {/* <!-- Section Title --> */}
                    <div className="section-heading">
                        <h5>Categories</h5>
                    </div>

                    {/* <!-- Catagory Widget --> */}
                    <ul className="catagory-widgets">
                        <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> Life Style</span> <span>35</span></a></li>
                        <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> Travel</span> <span>30</span></a></li>
                        <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> Foods</span> <span>13</span></a></li>
                        <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> Game</span> <span>06</span></a></li>
                        <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> Sports</span> <span>28</span></a></li>
                        <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> Football</span> <span>08</span></a></li>
                        <li><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true"></i> TV Show</span> <span>13</span></a></li>
                    </ul>
                </div>

                {/* <!-- Sidebar Widget --> */}
                <div className="single-sidebar-widget">
                    <a href="#" className="add-img"><img src="img/bg-img/add2.png" alt="" /></a>
                </div>
                {/* <!-- Sidebar Widget --> */}
                <div className="single-sidebar-widget p-30">
                    {/* <!-- Section Title --> */}
                    <div className="section-heading">
                        <h5>Newsletter</h5>
                    </div>

                    <div className="newsletter-form">
                        <p>Subscribe our newsletter gor get notification about new updates, information discount, etc.</p>
                        <form action="#" method="get">
                            <input type="search" name="widget-search" placeholder="Enter your email" />
                            <button type="submit" className="btn mag-btn w-100">Subscribe</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
