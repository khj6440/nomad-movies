import TVPresenter from "./TVPresenter";
import React from "react";
import { tv } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    airingThisWeek: null,
    airingToday: null
  };

  async componentDidMount() {
    let popular, airingThisWeek, airingToday, error;
    try {
      ({
        data: { results: popular }
      } = await tv.getPopular());
      ({
        data: { results: airingThisWeek }
      } = await tv.getAiringThisWeek());
      ({
        data: { results: airingToday }
      } = await tv.getAiringToday());
    } catch (error) {
      console.log(error);
      error = "Can't get TV.";
    } finally {
      this.setState({ loading: false, popular, airingToday, airingThisWeek });
    }
  }

  render() {
    const { loading, popular, airingThisWeek, airingToday } = this.state;
    return (
      <TVPresenter
        loading={loading}
        popular={popular}
        airingThisWeek={airingThisWeek}
        airingToday={airingToday}
      />
    );
  }
}
