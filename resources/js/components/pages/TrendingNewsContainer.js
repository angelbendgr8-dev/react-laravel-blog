import React, {useEffect,Component} from 'react'
import TrendingNews from './TrendingNews'
import {connect} from 'react-redux';
import OwlCarousel from 'react-owl-carousel2';
import Loading from '../layouts/Loading';
import { clearHistory } from "../../redux/actions/HistoryAction";  


 class TrendingNewsContainer extends Component {

    constructor(props){
        super(props)
        
    }
    
    

    componentDidMount(){
        // console.log(this.props.posts)
        if(this.props.history.length > 0){
            this.props.clearHistory();
         }
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
           
            return(
                <Loading text="fetching Trending News"/>
            )
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
    posts: state.postReducers.posts,
    history: state.HistoryReducer.history
})



const mapDispatchToProps = (dispatch)=>{
    return {
        clearHistory:()=>dispatch(clearHistory())
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(TrendingNewsContainer)
