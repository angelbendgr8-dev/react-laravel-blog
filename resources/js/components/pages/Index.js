import React,{Component} from 'react'
import Sidebar from '../layouts/Sidebar';

import { fetchPosts } from '../../redux/actions/postActions';
import {connect } from 'react-redux';
import TrendingNewsContainer from './TrendingNewsContainer';
 


 class Index extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
        
        return (
            <div>
                
    
                <section className="mag-posts-area d-flex flex-wrap">
    
            {/* <!-- >>>>>>>>>>>>>>>>>>>>
             Post Left Sidebar Area
            <<<<<<<<<<<<<<<<<<<<< --> */}
            <div className="post-sidebar-area left-sidebar mt-30 mb-30 bg-white box-shadow">
                {/* <!-- Sidebar Widget --> */}
                <div className="single-sidebar-widget p-30">
                    {/* <!-- Section Title --> */}
                    <div className="section-heading">
                        <h5>Most Popular</h5>
                    </div>
    
                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                        <div className="post-thumbnail">
                            <img src="img/bg-img/4.jpg" alt=""/>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">Global Travel And Vacations Luxury Travel</a>
                            <div className="post-meta d-flex justify-content-between">
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                        <div className="post-thumbnail">
                            <img src="img/bg-img/5.jpg" alt=""/>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">Cruising Destination Ideas</a>
                            <div className="post-meta d-flex justify-content-between">
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                        <div className="post-thumbnail">
                            <img src="img/bg-img/6.jpg" alt=""/>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">The Luxury Of Traveling With</a>
                            <div className="post-meta d-flex justify-content-between">
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                        <div className="post-thumbnail">
                            <img src="img/bg-img/7.jpg" alt=""/>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">Choose The Perfect Accommodations</a>
                            <div className="post-meta d-flex justify-content-between">
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                        <div className="post-thumbnail">
                            <img src="img/bg-img/8.jpg" alt=""/>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">A Guide To Rocky Mountain Vacations</a>
                            <div className="post-meta d-flex justify-content-between">
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            </div>
                        </div>
                    </div>
                </div>
    
                {/* <!-- Sidebar Widget --> */}
                <div className="single-sidebar-widget">
                    <a href="#" className="add-img"><img src="img/bg-img/add.png" alt=""/></a>
                </div>
    
                {/* <!-- Sidebar Widget --> */}
                <div className="single-sidebar-widget p-30">
                    {/* <!-- Section Title --> */}
                    <div className="section-heading">
                        <h5>Latest Videos</h5>
                    </div>
    
                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                        <div className="post-thumbnail">
                            <img src="img/bg-img/9.jpg" alt=""/>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">Coventry City Guide Including Coventry</a>
                            <div className="post-meta d-flex justify-content-between">
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                        <div className="post-thumbnail">
                            <img src="img/bg-img/10.jpg" alt=""/>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">Choose The Perfect Accommodations</a>
                            <div className="post-meta d-flex justify-content-between">
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                        <div className="post-thumbnail">
                            <img src="img/bg-img/11.jpg" alt=""/>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">Get Ready Fast For Fall Leaf Viewing</a>
                            <div className="post-meta d-flex justify-content-between">
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                        <div className="post-thumbnail">
                            <img src="img/bg-img/12.jpg" alt=""/>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">Global Resorts Network Grn Putting</a>
                            <div className="post-meta d-flex justify-content-between">
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Single Blog Post --> */}
                    <div className="single-blog-post d-flex">
                        <div className="post-thumbnail">
                            <img src="img/bg-img/13.jpg" alt=""/>
                        </div>
                        <div className="post-content">
                            <a href="single-post.html" className="post-title">Travel Prudently Luggage And Carry</a>
                            <div className="post-meta d-flex justify-content-between">
                                <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 34</a>
                                <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 84</a>
                                <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 14</a>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
            {/* <!-- >>>>>>>>>>>>>>>>>>>>
                 Main Posts Area
            <<<<<<<<<<<<<<<<<<<<< --> */}
            <div className="mag-posts-content mt-30 mb-30 p-30 box-shadow">
                {/* <!-- Trending Now Posts Area --> */}
                <div className="trending-now-posts mb-30">
                    {/* <!-- Section Title --> */}
                    <div className="section-heading">
                        <h5>TRENDING NOW</h5>
                    </div>
    
                    
                        
                        
                        {
                             <TrendingNewsContainer/>
                        }
                        
                   
                </div>
    
                {/* <!-- Feature Video Posts Area --> */}
                <div className="feature-video-posts mb-30">
                    {/* <!-- Section Title --> */}
                    <div className="section-heading">
                        <h5>Featured Videos</h5>
                    </div>
    
                    <div className="featured-video-posts">
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                {/* <!-- Single Featured Post --> */}
                                <div className="single-featured-post">
                                    {/* <!-- Thumbnail --> */}
                                    <div className="post-thumbnail mb-50">
                                        <img src="img/bg-img/22.jpg" alt=""/>
                                        <a href="video-post.html" className="video-play"><i className="fa fa-play"></i></a>
                                    </div>
                                    {/* <!-- Post Contetnt --> */}
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <a href="#">MAY 8, 2018</a>
                                            <a href="archive.html">lifestyle</a>
                                        </div>
                                        <a href="video-post.html" className="post-title">A Closer Look At Our Front Porch Items From Lowe’s</a>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                                    </div>
                                    {/* <!-- Post Share Area --> */}
                                    <div className="post-share-area d-flex align-items-center justify-content-between">
                                        {/* <!-- Post Meta --> */}
                                        <div className="post-meta pl-3">
                                            <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                            <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                            <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                        </div>
                                        {/* <!-- Share Info --> */}
                                        <div className="share-info">
                                            <a href="#" className="sharebtn"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                            {/* <!-- All Share Buttons --> */}
                                            <div className="all-share-btn d-flex">
                                                <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                <a href="#" className="google-plus"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                                <a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="col-12 col-lg-5">
                                {/* <!-- Featured Video Posts Slide --> */}
                                <div className="featured-video-posts-slide owl-carousel">
    
                                    <div className="single--slide">
                                        {/* <!-- Single Blog Post --> */}
                                        <div className="single-blog-post d-flex style-3">
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/23.jpg" alt=""/>
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">Global Resorts Network Grn Putting Timeshares To Shame</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                                </div>
                                            </div>
                                        </div>
    
                                        {/* <!-- Single Blog Post --> */}
                                        <div className="single-blog-post d-flex style-3">
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/24.jpg" alt=""/>
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">A Guide To Rocky Mountain Vacations</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                                </div>
                                            </div>
                                        </div>
    
                                        {/* <!-- Single Blog Post --> */}
                                        <div className="single-blog-post d-flex style-3">
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/25.jpg" alt=""/>
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">American Standards And European Culture How To Avoid</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                                </div>
                                            </div>
                                        </div>
    
                                        {/* <!-- Single Blog Post --> */}
                                        <div className="single-blog-post d-flex style-3">
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/26.jpg" alt=""/>
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">Mother Earth Hosts Our Travels</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                                </div>
                                            </div>
                                        </div>
    
                                        {/* <!-- Single Blog Post --> */}
                                        <div className="single-blog-post d-flex style-3">
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/27.jpg" alt=""/>
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">From Wetlands To Canals And Dams Amsterdam Is Alive</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="single--slide">
                                        {/* <!-- Single Blog Post --> */}
                                        <div className="single-blog-post d-flex style-3">
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/23.jpg" alt=""/>
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">Global Resorts Network Grn Putting Timeshares To Shame</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                                </div>
                                            </div>
                                        </div>
    
                                        {/* <!-- Single Blog Post --> */}
                                        <div className="single-blog-post d-flex style-3">
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/24.jpg" alt=""/>
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">A Guide To Rocky Mountain Vacations</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                                </div>
                                            </div>
                                        </div>
    
                                        {/* <!-- Single Blog Post --> */}
                                        <div className="single-blog-post d-flex style-3">
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/25.jpg" alt=""/>
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">American Standards And European Culture How To Avoid</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                                </div>
                                            </div>
                                        </div>
    
                                        {/* <!-- Single Blog Post --> */}
                                        <div className="single-blog-post d-flex style-3">
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/26.jpg" alt=""/>
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">Mother Earth Hosts Our Travels</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                                </div>
                                            </div>
                                        </div>
    
                                        {/* <!-- Single Blog Post --> */}
                                        <div className="single-blog-post d-flex style-3">
                                            <div className="post-thumbnail">
                                                <img src="img/bg-img/27.jpg" alt=""/>
                                            </div>
                                            <div className="post-content">
                                                <a href="single-post.html" className="post-title">From Wetlands To Canals And Dams Amsterdam Is Alive</a>
                                                <div className="post-meta d-flex">
                                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
    
                {/* <!-- Most Viewed Videos --> */}
                <div className="most-viewed-videos mb-30">
                    {/* <!-- Section Title --> */}
                    <div className="section-heading">
                        <h5>Most Viewed Videos</h5>
                    </div>
    
                    <div className="most-viewed-videos-slide owl-carousel">
    
                        {/* <!-- Single Blog Post --> */}
                        <div className="single-blog-post style-4">
                            <div className="post-thumbnail">
                                <img src="img/bg-img/28.jpg" alt=""/>
                                <a href="video-post.html" className="video-play"><i className="fa fa-play"></i></a>
                                <span className="video-duration">09:27</span>
                            </div>
                            <div className="post-content">
                                <a href="single-post.html" className="post-title">A Guide To Rocky Mountain Vacations</a>
                                <div className="post-meta d-flex">
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Single Blog Post --> */}
                        <div className="single-blog-post style-4">
                            <div className="post-thumbnail">
                                <img src="img/bg-img/29.jpg" alt=""/>
                                <a href="video-post.html" className="video-play"><i className="fa fa-play"></i></a>
                                <span className="video-duration">09:27</span>
                            </div>
                            <div className="post-content">
                                <a href="single-post.html" className="post-title">Dentists Are Smiling Over Painless Veneer Alternative</a>
                                <div className="post-meta d-flex">
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Single Blog Post --> */}
                        <div className="single-blog-post style-4">
                            <div className="post-thumbnail">
                                <img src="img/bg-img/30.jpg" alt=""/>
                                <a href="video-post.html" className="video-play"><i className="fa fa-play"></i></a>
                                <span className="video-duration">09:27</span>
                            </div>
                            <div className="post-content">
                                <a href="single-post.html" className="post-title">Become A Travel Pro In One Easy Lesson</a>
                                <div className="post-meta d-flex">
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Single Blog Post --> */}
                        <div className="single-blog-post style-4">
                            <div className="post-thumbnail">
                                <img src="img/bg-img/28.jpg" alt=""/>
                                <a href="video-post.html" className="video-play"><i className="fa fa-play"></i></a>
                                <span className="video-duration">09:27</span>
                            </div>
                            <div className="post-content">
                                <a href="single-post.html" className="post-title">A Guide To Rocky Mountain Vacations</a>
                                <div className="post-meta d-flex">
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Single Blog Post --> */}
                        <div className="single-blog-post style-4">
                            <div className="post-thumbnail">
                                <img src="img/bg-img/29.jpg" alt=""/>
                                <a href="video-post.html" className="video-play"><i className="fa fa-play"></i></a>
                                <span className="video-duration">09:27</span>
                            </div>
                            <div className="post-content">
                                <a href="single-post.html" className="post-title">Dentists Are Smiling Over Painless Veneer Alternative</a>
                                <div className="post-meta d-flex">
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Single Blog Post --> */}
                        <div className="single-blog-post style-4">
                            <div className="post-thumbnail">
                                <img src="img/bg-img/30.jpg" alt=""/>
                                <a href="video-post.html" className="video-play"><i className="fa fa-play"></i></a>
                                <span className="video-duration">09:27</span>
                            </div>
                            <div className="post-content">
                                <a href="single-post.html" className="post-title">Become A Travel Pro In One Easy Lesson</a>
                                <div className="post-meta d-flex">
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
    
                {/* <!-- Sports Videos --> */}
                <div className="sports-videos-area">
                    {/* <!-- Section Title --> */}
                    <div className="section-heading">
                        <h5>Sports Videos</h5>
                    </div>
    
                    <div className="sports-videos-slides owl-carousel mb-30">
                        {/* <!-- Single Featured Post --> */}
                        <div className="single-featured-post">
                            {/* <!-- Thumbnail --> */}
                            <div className="post-thumbnail mb-50">
                                <img src="img/bg-img/22.jpg" alt=""/>
                                <a href="video-post.html" className="video-play"><i className="fa fa-play"></i></a>
                            </div>
                            {/* <!-- Post Contetnt --> */}
                            <div className="post-content">
                                <div className="post-meta">
                                    <a href="#">MAY 8, 2018</a>
                                    <a href="archive.html">lifestyle</a>
                                </div>
                                <a href="video-post.html" className="post-title">A Closer Look At Our Front Porch Items From Lowe’s</a>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                            </div>
                            {/* <!-- Post Share Area --> */}
                            <div className="post-share-area d-flex align-items-center justify-content-between">
                                {/* <!-- Post Meta --> */}
                                <div className="post-meta pl-3">
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                </div>
                                {/* <!-- Share Info --> */}
                                <div className="share-info">
                                    <a href="#" className="sharebtn"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                    {/* <!-- All Share Buttons --> */}
                                    <div className="all-share-btn d-flex">
                                        <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#" className="google-plus"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        <a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Single Featured Post --> */}
                        <div className="single-featured-post">
                            {/* <!-- Thumbnail --> */}
                            <div className="post-thumbnail mb-50">
                                <img src="img/bg-img/22.jpg" alt=""/>
                                <a href="video-post.html" className="video-play"><i className="fa fa-play"></i></a>
                            </div>
                            {/* <!-- Post Contetnt --> */}
                            <div className="post-content">
                                <div className="post-meta">
                                    <a href="#">MAY 8, 2018</a>
                                    <a href="archive.html">lifestyle</a>
                                </div>
                                <a href="video-post.html" className="post-title">A Closer Look At Our Front Porch Items From Lowe’s</a>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                            </div>
                            {/* <!-- Post Share Area --> */}
                            <div className="post-share-area d-flex align-items-center justify-content-between">
                                {/* <!-- Post Meta --> */}
                                <div className="post-meta pl-3">
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                </div>
                                {/* <!-- Share Info --> */}
                                <div className="share-info">
                                    <a href="#" className="sharebtn"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                    {/* <!-- All Share Buttons --> */}
                                    <div className="all-share-btn d-flex">
                                        <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#" className="google-plus"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        <a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Single Featured Post --> */}
                        <div className="single-featured-post">
                            {/* <!-- Thumbnail --> */}
                            <div className="post-thumbnail mb-50">
                                <img src="img/bg-img/22.jpg" alt=""/>
                                <a href="video-post.html" className="video-play"><i className="fa fa-play"></i></a>
                            </div>
                            {/* <!-- Post Contetnt --> */}
                            <div className="post-content">
                                <div className="post-meta">
                                    <a href="#">MAY 8, 2018</a>
                                    <a href="archive.html">lifestyle</a>
                                </div>
                                <a href="video-post.html" className="post-title">A Closer Look At Our Front Porch Items From Lowe’s</a>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
                            </div>
                            {/* <!-- Post Share Area --> */}
                            <div className="post-share-area d-flex align-items-center justify-content-between">
                                {/* <!-- Post Meta --> */}
                                <div className="post-meta pl-3">
                                    <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                    <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                    <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                </div>
                                {/* <!-- Share Info --> */}
                                <div className="share-info">
                                    <a href="#" className="sharebtn"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                    {/* <!-- All Share Buttons --> */}
                                    <div className="all-share-btn d-flex">
                                        <a href="#" className="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#" className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#" className="google-plus"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        <a href="#" className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="row">
                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-lg-6">
                            <div className="single-blog-post d-flex style-3 mb-30">
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/31.jpg" alt=""/>
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">From Wetlands To Canals And Dams Amsterdam Is Alive</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-lg-6">
                            <div className="single-blog-post d-flex style-3 mb-30">
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/32.jpg" alt=""/>
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">From Wetlands To Canals And Dams Amsterdam Is Alive</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-lg-6">
                            <div className="single-blog-post d-flex style-3 mb-30">
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/33.jpg" alt=""/>
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">From Wetlands To Canals And Dams Amsterdam Is Alive</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Single Blog Post --> */}
                        <div className="col-12 col-lg-6">
                            <div className="single-blog-post d-flex style-3 mb-30">
                                <div className="post-thumbnail">
                                    <img src="img/bg-img/34.jpg" alt=""/>
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">From Wetlands To Canals And Dams Amsterdam Is Alive</a>
                                    <div className="post-meta d-flex">
                                        <a href="#"><i className="fa fa-eye" aria-hidden="true"></i> 1034</a>
                                        <a href="#"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> 834</a>
                                        <a href="#"><i className="fa fa-comments-o" aria-hidden="true"></i> 234</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
            {/* <!-- >>>>>>>>>>>>>>>>>>>>
             Post Right Sidebar Area
            <<<<<<<<<<<<<<<<<<<<< --> */}
            <Sidebar/>
        </section>
            </div>
        )
    }
}



const mapDispatchToProps= dispatch =>{
    return {
        fetchPosts:() => dispatch(fetchPosts())

    }
   
}





export default connect(null,mapDispatchToProps)(Index);
