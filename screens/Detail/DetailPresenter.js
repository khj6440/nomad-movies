import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR, TINT_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import makePhotoUrl from "../../utills/makePhotoUrl";
import MoviePoster from "../../components/MoviePoster";
import MovieRating from "../../components/MovieRating";
import { LinearGradient } from "expo";
import { Platform } from "react-native";
import Loader from "../../components/Loader";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const Header = styled.View`
  position: relative;
`;
//height 작업시 flex 사용하면 오류
const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3.5};
  position: absolute;
  top: 0;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: flex-end;
  padding-horizontal: 20px;
  height: ${Layout.height / 3.5};
`;

const Column = styled.View`
  margin-left: 30px;
`;

const Title = styled.Text`
  font-weight: 600;
  color: ${TINT_COLOR};
  font-size: 18px;
  margin-bottom: 10px;
  width:80%;
`;

const MainContent = styled.View`
  padding-horizontal: 20px;
  margin-top: 25px;
`;

const ContentTitle = styled.Text`
  color: ${TINT_COLOR};
  font-weight: 600;
  margin-bottom: 10px;
`;

const ContentValue = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
  margin-bottom: 10px;
  width: 80%;
`;

const DataContainer = styled.View`
  margin-bottom: 10px;
`;

const Genres = styled.Text`
  color: ${TINT_COLOR};
  margin-top:10px;
  width:80%;
`;

const DetailPresenter = ({
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overview,
  loading,
  status,
  isMovie,
  date,
  genres
}) => (
  <Container>
    <Header>
      <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
      <LinearGradient
        colors={["transparent", "black"]}
        start={Platform.select({ ios: [0, 0] })}
        end={Platform.select({ ios: [0, 0.8], android: [0, 0.9] })}
      >
        <Content>
          <MoviePoster path={posterPhoto} />
          <Column>
            <Title>{title}</Title>
            <MovieRating votes={voteAvg} />
            {genres?<Genres>{genres.map((genre,index)=>index==genres.length -1 ?genre.name : `${genre.name}/`)}
            </Genres>:null}
          </Column>
        </Content>
      </LinearGradient>
    </Header>
    <MainContent>
      {overview ? (
        <DataContainer>
          <ContentTitle>Overview</ContentTitle>
          <ContentValue>{overview}</ContentValue>
        </DataContainer>
      ) : null}
      {status ? (
        <DataContainer>
          <ContentTitle>Status</ContentTitle>
          <ContentValue>{status}</ContentValue>
        </DataContainer>
      ) : null}
      {date ? (
        <DataContainer>
          <ContentTitle>{isMovie?"Release Date":"First Episode"}</ContentTitle>
          <ContentValue>{date}</ContentValue>
        </DataContainer>
      ) : null}
      {loading ? <Loader /> : null}
    </MainContent>
  </Container>
);

DetailPresenter.propTypes = {
  id: propTypes.number.isRequired,
  posterPhoto: propTypes.string.isRequired,
  backgroundPhoto: propTypes.string,
  title: propTypes.string.isRequired,
  voteAvg: propTypes.number,
  overview: propTypes.string,
  loading: propTypes.bool.isRequired,
  status:propTypes.string,
  isMovie:propTypes.bool.isRequired,
  date:propTypes.string,
  genres:propTypes.array
};

export default DetailPresenter;
