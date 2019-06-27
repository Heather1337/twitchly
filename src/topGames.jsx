import React from 'react';
const width = 385;
const height = 280;

// const game1 = props.data[0].box_art_url;
// game1.replace("{height}", height)
// game1.replace("{width}", width);

const TopGames = (props) => {
  console.log('props --->', props.data);
  var game1 = props.data[0].box_art_url;
  var gameImg = game1.replace("{height}", "250").replace("{width}", "188");
  console.log(game1);
  return (
    <div>
      <div>Top Games Component</div>  
      <img src={gameImg}></img>
    </div>
  )
}

export default TopGames;