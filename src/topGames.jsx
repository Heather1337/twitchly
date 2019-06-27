import React from 'react';
const width = 385;
const height = 280;

// const game1 = props.data[0].box_art_url;
// game1.replace("{height}", height)
// game1.replace("{width}", width);

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
      <div><img src={gameImg1}></img></div>
      <div><img src={gameImg2}></img></div>
      <div><img src={gameImg3}></img></div>
    </div>
  )
}

export default TopGames;