import React, {useEffect,Component} from 'react'
import TrendingNews from './TrendingNews'
import {connect} from 'react-redux';
import OwlCarousel from 'react-owl-carousel2';


 class TrendingNewsContainer extends Component {

    constructor(props){
        super(props)
        
    }
    
    

    componentDidMount(){
        // console.log(this.props.posts)
    }

    
     

    render(){
        let options ={
            items: 3,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1500: {
                    items: 3
                }
            }
        }
        if(this.props.posts.length === 0){
            console.log('empty')
            return<></>
        }else{
            // console.log(this.props.posts)
            return (
                <OwlCarousel  options={options} className="trending-post-slides owl-carousel"
                        
                >
                   {this.props.posts.map(post => <TrendingNews key={post.id} post={post} />)}
                </OwlCarousel>
                
        
            )
        }
    }
}

const mapStateToProps = (state) => ({
    posts: state.postReducers.posts
})



export default connect(mapStateToProps)(TrendingNewsContainer)
