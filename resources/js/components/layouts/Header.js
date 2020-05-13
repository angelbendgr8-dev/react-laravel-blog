import React from 'react'

export default function Header() {
    return (
        <div>
            <header className="header-area">


                <div className="mag-main-menu" id="sticker">
                    <div className="classy-nav-container breakpoint-off">
                        {/* <!-- Menu --> */}
                        <nav className="classy-navbar justify-content-between" id="magNav">

                            {/* <!-- Nav brand --> */}
                            <a href="{{ route('guest.index') }}" className="nav-brand"><img src="img/core-img/logo.png" alt=""/></a>

                                {/* <!-- Navbar Toggler --> */}
                                <div className="classy-navbar-toggler">
                                    <span className="navbarToggler"><span></span><span></span><span></span></span>
                                </div>

                                {/* <!-- Nav Content --> */}
                                <div className="nav-content d-flex align-items-center">
                                    <div className="classy-menu">

                                        {/* <!-- Close Button --> */}
                                        <div className="classycloseIcon">
                                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                        </div>

                                        {/* <!-- Nav Start --> */}
                                        <div className="classynav">
                                            <ul>
                                                <li className="active"><a href="{{ route('guest.index') }}">Home</a></li>
                                                <li><a href="archive.html">Archive</a></li>
                                                <li><a href="#">Pages</a>
                                                    <ul className="dropdown">
                                                        <li><a href="{{ route('guest.index') }}">Home</a></li>
                                                        <li><a href="archive.html">Archive</a></li>
                                                        <li><a href="video-post.html">Single Video Post</a></li>
                                                        <li><a href="about.html">About Us</a></li>
                                                        <li><a href="contact.html">Contact</a></li>
                                                        <li><a href="submit-video.html">Submit Video</a></li>
                                                        <li><a href="login.html">Login</a></li>
                                                    </ul>
                                                </li>

                                                <li><a href="about.html">About</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </div>
                                        {/* <!-- Nav End --> */}
                                    </div>

                                    <div className="top-meta-data d-flex align-items-center">
                                        {/* <!-- Top Search Area --> */}
                                        <div className="top-search-area">
                                            <form action="index.html" method="post">
                                                <input type="search" name="top-search" id="topSearch" placeholder="Search and hit enter..." />
                                                <button type="submit" className="btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                                            </form>
                                        </div>
                                        {/* <!-- Login --> */}
                                        <a href="{{ route('login') }}" className="login-btn"><i className="fa fa-user" aria-hidden="true"></i></a>
                                        {/* <!-- Submit Video --> */}
                                        <a href="submit-video.html" className="submit-video"><span><i className="fa fa-cloud-upload"></i></span> <span className="video-text">Submit Video</span></a>
                                    </div>
                                </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}
