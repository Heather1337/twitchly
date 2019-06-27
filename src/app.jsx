import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import TopGames from './topGames.jsx';
import GameOneClips from './gameOneClips.jsx';
const reqHeader = '74adg56gxuy8p8vk8h3s46egh70mqj';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }

  getGames() {
    $.ajax ({
        url: 'https://api.twitch.tv/helix/games/top',
        headers: {'Client-ID': reqHeader},
        method: 'GET',
        error: (err) => {
          if (err) console.log('Error getting videos from Twitch API');
        },
        success: (data) => {
          console.log('Results from getGames ----->', data);
          console.log('Data[0]', data.data[0], data.data[1], data.data[2]);
          this.setState({
            games: [data.data[0], data.data[1], data.data[2]]
          });
          console.log('state', this.state);
        }
    });
  }

  componentDidMount() {
    this.getGames();
  }

  render() {
    return (
      <div>
        <textarea></textarea>
        <div>{this.state.games.length ?  <TopGames data={this.state.games}/>: null}</div>
        <div>{this.state.games.length ? <GameOneClips data={this.state.games[0].id}/> : null}</div>
      </div>
    )
  }

};

ReactDOM.render(<App></App>, document.getElementById('app'));



