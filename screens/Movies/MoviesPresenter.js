import React from "react";
import { Text } from "react-native";
import propTypes from "prop-types";
import Loader from "../../components/Loader";

const MoviesPresenter = ({ loading,upcoming,popular,nowPlaying }) =>
  loading ? <Loader /> : <Text>Movies</Text>;

MoviesPresenter.propTypes = {
  loading: propTypes.bool.isRequired,
  upcoming : propTypes.array,
  popular : propTypes.array,
  nowPlaying :propTypes.array
};

export default MoviesPresenter;
