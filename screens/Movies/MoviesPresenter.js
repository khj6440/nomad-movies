import React from "react";
import propTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";
import { BG_COLOR } from "../../constants/Colors";

const Container1 = styled.ScrollView`
  background-color : ${BG_COLOR};
`;


const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) =>
  loading ? (
    <Loader />
    ) : (
    <Container1>
      {nowPlaying?<MovieSlider movies={nowPlaying}/>:null}
      {upcoming? <Section title="Upcoming Movies">{upcoming
        .filter(movie => movie.poster_path !== null)
        .map(movie => (
          <MovieItem
          key={movie.id}
            id={movie.id}
            posterPhoto={movie.poster_path}
            title={movie.title}
            voteAvg={movie.vote_average}
          />
        ))}</Section>:null}
      {popular? <Section horizontal={false} title="Popular Movies">{popular
        .filter(movie => movie.poster_path !== null)
        .map(movie => (
          <MovieItem
            key={movie.id}
            horizontal={true}
            id={movie.id}
            posterPhoto={movie.poster_path}
            title={movie.title}
            voteAvg={movie.vote_average}
            overview={movie.overview}
          />
        ))}</Section>:null}
    </Container1>
    //Section 컴포넌트 안에 내용을 children 으로 치환
  );

MoviesPresenter.propTypes = {
  loading: propTypes.bool.isRequired,
  upcoming: propTypes.array,
  popular: propTypes.array,
  nowPlaying: propTypes.array
};

export default MoviesPresenter;
