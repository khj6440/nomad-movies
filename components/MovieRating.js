import React from "react";
import propType from "prop-types";
import styled from "styled-components";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";

const Vote = styled.Text`
    color : ${props=>props.inSlide? TINT_COLOR:GREY_COLOR};
    font-size : ${props=>props.inSlide? "10px": "8px" };
    font-weight :600;
`;

const MovieRating = ({votes,inSlide=false}) =><Vote inSlide={inSlide}>⭐ {`${votes}/10`}</Vote>


MovieRating.propType={
    votes: propType.number.isRequired,
    inSlide : propType.bool
};

export default MovieRating;