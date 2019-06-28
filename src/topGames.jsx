import React from 'react';
import styled from 'styled-components';

const Video = styled.img`
  padding-left: 20px;
  padding-right: 20px;
`;

const TopGames = (props) => {
  console.log('props --->', props.data);
  var game1 = props.data[0].box_art_url;
  var gameImg1 = game1.replace("{height}", "250").replace("{width}", "188");
  var game2 = props.data[1].box_art_url;
  var gameImg2 = game2.replace("{height}", "250").replace("{width}", "188");
  var game3 = props.data[2].box_art_url;
  var gameImg3 = game3.replace("{height}", "250").replace("{width}", "188");

  console.log(game1);
  return (
    <div>
      <div>Top Games Component</div>  
      <Video src={gameImg1}></Video>
      <Video src={gameImg2}></Video>
      <Video src={gameImg3}></Video>
    </div>
  )
};

export default TopGames;