import React from 'react';

const GameTwoClips = (props) => {
  const clips = props.clips;
  console.log('clips from game on clips', clips)

  return (
    <div>
    <div>Top Clips Game Two Component</div>
    <iframe crossOrigin="true" src={clips[0]}></iframe>
    <iframe crossOrigin="true" src={clips[1]}></iframe>
    <iframe crossOrigin="true" src={clips[2]}></iframe>
    </div>
  )
};

export default GameTwoClips;