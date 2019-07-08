import React from "react";
import styled from "styled-components";
import propType from "prop-types";
import makePhotoUrl from "../utills/makePhotoUrl";

const Image = styled.Image`
    width :110px;
    height: 160px;    
    border-radius: 2.5px;
`;

const MoviePoster = ({path}) => <Image source={{uri :makePhotoUrl(path)}}/>

MoviePoster.propType = {
    path : propType.string
}

export default MoviePoster;