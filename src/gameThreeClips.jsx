import React from 'react';

const GameThreeClips = (props) => {
  const clips = props.clips;
  console.log('clips from game Three clips', clips)

  return (
    <div>
    <div>Top Clips Game Two Component</div>
    <iframe crossOrigin="true" src={clips[0]}></iframe>
    <iframe crossOrigin="true" src={clips[1]}></iframe>
    <iframe crossOrigin="true" src={clips[2]}></iframe>
    </div>
  )
};

export default GameThreeClips;