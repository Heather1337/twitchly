import React from 'react';
import styled from 'styled-components';

const Video = styled.div`
  display: inline-block;
  margin-left: 20px;
`;

const GameThreeClips = (props) => {
  const clips = props.clips;
  console.log('clips from game Three clips', clips)

  return (
    <Video>
    <div>Top Clips Game Three Component</div>
    <iframe crossOrigin="true" src={clips[0]}></iframe>
    {/* <iframe crossOrigin="true" src={clips[1]}></iframe>
    <iframe crossOrigin="true" src={clips[2]}></iframe> */}
    </Video>
  )
};

export default GameThreeClips;