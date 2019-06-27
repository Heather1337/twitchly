import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
const reqHeader = '74adg56gxuy8p8vk8h3s46egh70mqj';
const width = 385;
const height = 280;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game1: '',
      game2: '',
      game3: '',
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
            game1: data.data[0],
            game2: data.data[1],
            game3: data.data[2]
          });
        }
    });
  }

  componentDidMount() {
    this.getGames();
  }

  render() {
    return (
      <div>
        <img src={this.state.game1.box_art_url}></img>
        <img src={this.state.game2.box_art_url}></img>
        <img src={this.state.game3.box_art_url}></img>
      </div>
    )
  }

};

ReactDOM.render(<App></App>, document.getElementById('app'));



