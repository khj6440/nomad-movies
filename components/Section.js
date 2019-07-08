import React from "react";
import propType from "prop-types";
import styled from "styled-components";

const Container = styled.View``;

const Title = styled.Text``;

const ScrollView = styled.ScrollView``;

const Section = ({ title, movies }) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView>{movies.filter(movie=>movie.poster_path !=null).map(movie =>null)}</ScrollView>
  </Container>
);

Section.propType = {
  movies: propType.array.isRequired,
  title: propType.string.isRequired
};

export default Section;