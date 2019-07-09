import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import MovieSlide from "./MovieSlide";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  height: ${SWIPER_HEIGHT};
`;

//컴포넌트 변수이름 상관 없고 styled.x부분이 정확해야함
const Text = styled.Text``;

//Swiper 는 styled component 가 아님
const MovieSlider = ({movies}) =>
  movies? (
    <Swiper
      showsPagination={false}
      autoplay={true}
      style={{ height: SWIPER_HEIGHT }}
      autoplayTimeout={3}
    >
      {movies
        .filter(movie=> movie.backdrop_path !== null)
        .map(movie=>(
          <View key={movie.id}>
            <MovieSlide overView={movie.overview} voteAvg={movie.vote_average} title={movie.title} id={movie.id} backgroundPhoto={movie.backdrop_path}
            posterPhoto ={movie.poster_path}/>
          </View>
        ))}
    </Swiper>
  ) : null;

MovieSlider.propTypes = {
  movies: propTypes.array
};

export default MovieSlider;