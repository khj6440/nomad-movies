import React from "react";
import propType from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../utills/makePhotoUrl";
import Layout from "../constants/Layout";
import MoviePoster from "./MoviePoster";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";
import MovieRating from "./MovieRating";

//네이티브에서는 이미지를 넣으려면 Image컴포넌트를 사용해야한다
const Container = styled.View`
  flex: 1;
  position:relative;
`;

const Column = styled.View`
  width:60%;
  align-items:flex-start;
`;

const Title = styled.Text`
  color :${TINT_COLOR};
  font-weight :600;
`;

const Overview = styled.Text`
  color:${TINT_COLOR};
  font-size :12px;
  margin-bottom:10px;
`;

const VoteContainer = styled.View`
  margin :10px 0px;
`;

const Content = styled.View`
  flex:1;
  flex-direction : row;
  align-items : center;
  padding-horizontal :30px;
  justify-content : space-between;
`;

const BgImage = styled.Image`
  width: ${Layout.width};
  height: ${Layout.height / 3};
  opacity :0.3;
  position: absolute;
`;

const BtnContainer = styled.TouchableOpacity`
  background-color:#e74c3c; 
  padding:5px;
  border-radius:2.5px;
`;

//View에는 따로 색을 줄수없음
const BtnText = styled.Text`
  color :white;
  font-size :12px;
`;


const MovieSlide = ({
  posterPhoto,
  backgroundPhoto,
  title,
  voteAvg,
  overView
}) => (
  <Container>
    <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
    <Content>
      <MoviePoster path={posterPhoto}/>
        <Column>
          <Title>{title}</Title>
          {voteAvg?<VoteContainer><MovieRating votes={voteAvg} inSlide={true}/></VoteContainer>:null}
          {overView? <Overview>{overView.length > 117?`${overView.substring(0,120)}...`:overView}</Overview>:null}
          <BtnContainer>
            <BtnText>More Details</BtnText>
          </BtnContainer>
        
        
        </Column>
    </Content>
  </Container>
);

MovieSlide.propType = {
  id: propType.number.isRequired,
  posterPhoto: propType.string.isRequired,
  backgroundPhoto: propType.string.isRequired,
  title: propType.string.isRequired,
  voteAvg: propType.number.isRequired,
  overView: propType.string.isRequired
};

export default MovieSlide;
