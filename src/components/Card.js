import "./Card.css";
import { useSelector } from "react-redux";

import React from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../redux/actions";

class Card extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCharacters());
  }

  render() {
    const { error, loading, characters } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  characters: state.characters.name,
  loading: state.characters.loading,
  error: state.characters.error,
});

export default connect(mapStateToProps)(Card);
