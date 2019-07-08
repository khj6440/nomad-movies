import React from "react";
import propTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";
import { BG_COLOR } from "../../constants/Colors";
import Section from "../../components/Section";

const Container1 = styled.ScrollView`
  background-color : black;
`;

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) =>
  loading ? (
    <Loader />
    ) : (
    <Container1>
      {nowPlaying?<MovieSlider movies={nowPlaying}/>:null}
      {upcoming? <Section movies={upcoming} title="Upcoming Movies"></Section>:null}
    </Container1>

  );

MoviesPresenter.propTypes = {
  loading: propTypes.bool.isRequired,
  upcoming: propTypes.array,
  popular: propTypes.array,
  nowPlaying: propTypes.array
};

export default MoviesPresenter;
