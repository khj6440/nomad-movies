import React from "react";
import propType from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { GREY_COLOR } from "../constants/Colors";
import { TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: ${props => (!props.big ? "12px" : "15px")};
  margin-vertical: 5px;
`;

const HContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;
const Column = styled.View`
  margin-left: 20px;
  width: 60%;
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 12px;
  margin-vertical: 10px;
`;

const MovieItem = ({
  id,
  posterPhoto,
  title,
  voteAvg,
  horizontal = false,
  overview,
  isMovie = true,
  navigation
}) => (
  <TouchableWithoutFeedback
    onPress={() =>
      navigation.navigate({
        routeName: "Detail",
        params: { isMovie, id, posterPhoto, title,backgroundPhoto:null, voteAvg, overview }
      })
    }
  >
    {horizontal ? (
      <HContainer>
        <MoviePoster path={posterPhoto} />
        <Column>
          <Title big={true}>{title}</Title>
          <MovieRating votes={voteAvg} />
          {overview ? (
            <Overview>
              {overview.length > 130
                ? `${overview.substring(0, 127)}...`
                : overview}
            </Overview>
          ) : null}
        </Column>
      </HContainer>
    ) : (
      <Container>
        <MoviePoster path={posterPhoto} />
        <Title>
          {title.length > 10 ? `${title.substring(0, 9)}...` : title}
        </Title>
        <MovieRating votes={voteAvg} />
      </Container>
    )}
  </TouchableWithoutFeedback>
);
MovieItem.propType = {
  id: propType.number.isRequired,
  posterPhoto: propType.string.isRequired,
  title: propType.string.isRequired,
  voteAvg: propType.number.isRequired,
  horizontal: propType.bool,
  overview: propType.string,
  isMovie: propType.bool
};

export default withNavigation(MovieItem);
