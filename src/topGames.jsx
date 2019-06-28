import React from 'react';
import styled from 'styled-components';

const Video = styled.img`
  display: inline-block;
  padding-left 5%;
`;

const Video1 = styled.img`
  dipslay: inline-block;
  padding-left: 25%;
  padding-right: 5%;
`;

const TopDiv = styled.div`
  padding-left: 5px;
`;

const GamesText = styled.div`
  color: #443168;
  font-weight: bold;
  text-align: center;
  font-size: 25px;
  font-family: "HelveticaNeue-Light"; 
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
    <TopDiv>
      <GamesText>Top live channels</GamesText>  
      <Video1 src={gameImg1} onClick={props.click}></Video1>
      <img src={gameImg2}></img>
      <Video src={gameImg3}></Video>
    </TopDiv>
  )
};

export default TopGames;