import React from "react";
import { Text } from "react-native";
import propTypes from "prop-types";
import Loader from "../../components/Loader";

const TVPresenter = ({ loading,popular,topRated,airingToday }) =>
  loading ? <Loader /> : <Text>TV</Text>;

TVPresenter.propTypes = {
  loading: propTypes.bool.isRequired,
  popular : propTypes.array,
  topRated : propTypes.array,
  airingToday :propTypes.array
};

export default TVPresenter;
