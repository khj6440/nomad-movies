import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movies, tv } from "../../api";

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  constructor(props) {
    super(props);
    const {
      navigation: {
        state: {
          params: {
            isMovie,
            id: id,
            posterPhoto: posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview
          }
        }
      }
    } = props;

    this.state = {
      isMovie,
      id, //id:id
      posterPhoto, //posterPhoto:posterPhoto
      backgroundPhoto,
      title,
      voteAvg,
      overview,
      loading: true
    };
  }

  async componentDidMount() {
    let error, genres, overview, status, date, backgroundPhoto;
    const { isMovie, id } = this.state;
    try {
      if (isMovie) {
        ({
          data: {
            genres,
            overview,
            status,
            release_date: date,
            backdrop_path:backgroundPhoto
          }
        } = await movies.getMovie(id));
      } else {
        ({
          data: {
            genres,
            overview,
            status,
            first_air_date: date,
            backdrop_path: backgroundPhoto
          }
        } = await tv.getShow(id));
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false, genres, overview, status, date,backgroundPhoto });
    }
  }

  render() {
    const {
      isMovie,
      id: id,
      posterPhoto: posterPhoto,
      backgroundPhoto: backgroundPhoto,
      title: title,
      voteAvg,
      overview,
      loading,
      date,
      status,
      genres
    } = this.state;
    return (
      <DetailPresenter
        id={id}
        posterPhoto={posterPhoto}
        backgroundPhoto={backgroundPhoto}
        title={title}
        voteAvg={voteAvg}
        overview={overview}
        loading={loading}
        status={status}
        date={date}
        isMovie={isMovie}
        genres={genres}
      />
    );
  }
}
