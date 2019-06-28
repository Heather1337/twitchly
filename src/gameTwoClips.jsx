import React from 'react';
import styled from 'styled-components';

const Video = styled.div`
  display: inline-block;
  margin-left: 20px;
`;

const GameTwoClips = (props) => {
  const clips = props.clips;
  console.log('clips from game on clips', clips)

  return (
    <Video>
    <div>Top Clips Game Two Component</div>
    <iframe crossOrigin="true" src={clips[0]}></iframe>
    {/* <iframe crossOrigin="true" src={clips[1]}></iframe>
    <iframe crossOrigin="true" src={clips[2]}></iframe> */}
    </Video>
  )
};

export default GameTwoClips;