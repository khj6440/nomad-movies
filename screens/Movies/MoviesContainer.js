import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import {movies} from "../../api";

//MoviesContainer 생략가능
//exporting and createing 을 함께 하기때문에 
export default class MoviesContainer extends React.Component{
    state = {
        loading : true,
        upcoming : null,
        popular : null,
        nowPlaying :null,
        error:null
    }

    async componentDidMount(){
        let upcoming,popular,nowPlaying,error;
        try{
            ({data:{results:upcoming}} = await movies.getUpcoming());
            ({data:{results:popular}} = await
            movies.getPopular());
            ({data:{result:nowPlaying}} = await 
            movies.getNowPlaying()); 
        }catch(error){
            console.log(error);
            error="Can't get Movies.";
        }finally{
            this.setState({loading:false,error,popular,nowPlaying,upcoming})
        }
    } 
    render(){
        const { loading,upcoming,popular,nowPlaying } = this.state; 
        return <MoviesPresenter loading={loading} upcoming={upcoming} popular={popular} nowPlaying={nowPlaying}/>
    }
}