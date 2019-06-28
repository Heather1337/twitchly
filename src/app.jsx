import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import TopGames from './topGames.jsx';
import GameOneClips from './gameOneClips.jsx';
import GameTwoClips from './gameTwoClips.jsx';
import GameThreeClips from './gameThreeClips.jsx';
const reqHeader = '74adg56gxuy8p8vk8h3s46egh70mqj';

const VideoDiv = styled.div`
  border-top: 1px solid lightgrey; 
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      clips1: [],
      clips2: [],
      clips3: [],
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1(e) {
    e.preventDefault();
    console.log('Game1 was clicked!!!');
    const game = this.state.games[0].name;
    window.location=`https://www.twitch.tv/directory/game/${game}`;
  }

  handleClick2(e) {
    e.preventDefault();
    console.log('Game2 was clicked!!!');
    const game = this.state.games[1].name;
    window.location=`https://www.twitch.tv/directory/game/${game}`;
  }

  handleClick3(e) {
    e.preventDefault();
    console.log('Game3 was clicked!!!');
    const game = this.state.games[2].name;
    window.location=`https://www.twitch.tv/directory/game/${game}`;
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
          this.getClipsOne();
          console.log('state', this.state);
        }
    });
  }

  getClipsOne() {
    $.ajax ({
        url: `https://api.twitch.tv/helix/clips?game_id=${this.state.games[0].id}`,
        headers: {'Client-ID': reqHeader},
        method: 'GET',
        error: (err) => {
            if (err) console.log('Error getting videos from Twitch API');
        },
        success: (data) => {
          console.log('Results from getGameOneClips ----->', data);
          this.setState({
            clips1: [data.data[0].embed_url, data.data[1].embed_url, data.data[2].embed_url, data.data[3].embed_url, data.data[4].embed_url, data.data[5].embed_url]
          });
          this.getClipsTwo();
          console.log('state after clips call', this.state);
        }  
    });
  }

  getClipsTwo() {
    $.ajax ({
        url: `https://api.twitch.tv/helix/clips?game_id=${this.state.games[1].id}`,
        headers: {'Client-ID': reqHeader},
        method: 'GET',
        error: (err) => {
            if (err) console.log('Error getting videos from Twitch API');
        },
        success: (data) => {
          console.log('Results from getGameTwoClips ----->', data);
          this.setState({
            clips2: [data.data[0].embed_url, data.data[1].embed_url, data.data[2].embed_url, data.data[3].embed_url, data.data[4].embed_url, data.data[5].embed_url]
          });
          this.getClipsThree();
          console.log('state after clips call', this.state);
        }  
    });
  }

  getClipsThree() {
    $.ajax ({
        url: `https://api.twitch.tv/helix/clips?game_id=${this.state.games[2].id}`,
        headers: {'Client-ID': reqHeader},
        method: 'GET',
        error: (err) => {
            if (err) console.log('Error getting videos from Twitch API');
        },
        success: (data) => {
          console.log('Results from getGameOneClips ----->', data);
          this.setState({
            clips3: [data.data[0].embed_url, data.data[1].embed_url, data.data[2].embed_url, data.data[3].embed_url, data.data[4].embed_url, data.data[5].embed_url]
          });
          console.log('state after clips call', this.state);
        }  
    });
  }

  componentDidMount() {
    this.getGames();
  }

  render() {
    return (
      <div>
        <div>{this.state.games.length ? <TopGames data={this.state.games} click={this.handleClick1} click2={this.handleClick2} click3={this.handleClick3}/>: null}</div>
        <VideoDiv>{this.state.games.length ? <GameOneClips clips={this.state.clips1}/> : null}</VideoDiv>
        <VideoDiv>{this.state.games.length ? <GameTwoClips clips={this.state.clips2}/> : null}</VideoDiv>
        <VideoDiv>{this.state.games.length ? <GameThreeClips clips={this.state.clips3}/> : null}</VideoDiv>
      </div>
    )
  }

};

ReactDOM.render(<App></App>, document.getElementById('app'));



