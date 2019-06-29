import React from 'react';
import styled from 'styled-components';


const Video = styled.div`
  margin-left: 85px;
`

const ClipsBlock = styled.span`
  display: inline-block;
  margin-left: 15px;
`

const ClipImage = styled.img`
  height: 169px;
  width: 300px;
  border: 1px solid light-grey;
`

const Vidtext = styled.div`
  color: #664a9c;
`

const Gamenameone = styled.div`
  margin-left: 38%;
  font-size: 20px;
  font-weight: bold;
  color: #664a9c;
`

const GameOneClips = (props) => {
  var clip1;
  var click1;
  var name1;
  var views1;
  var clip2;
  var click2;
  var name2;
  var views2;
  var clip3;
  var click3;
  var name3;
  var views3;
  var clip4;
  var name4;
  var views4;
  var click4;
  if (props.clips[0]) {
    clip1 = props.clips[0].thumbnail_url;
    var vid1 = props.clips[0].url;
    name1 = props.clips[0].broadcaster_name;
    views1 = props.clips[0].view_count;

    var vid2 = props.clips[1].url;
    name2 = props.clips[1].broadcaster_name;
    views2 = props.clips[1].view_count;
    clip2 = props.clips[1].thumbnail_url;

    var vid3 = props.clips[2].url;
    name3 = props.clips[2].broadcaster_name;
    views3 = props.clips[2].view_count;
    clip3 = props.clips[2].thumbnail_url;

    var vid4 = props.clips[3].url;
    name4 = props.clips[3].broadcaster_name;
    views4 = props.clips[3].view_count;
    clip4 = props.clips[3].thumbnail_url;

    click1 = (e) => {
      e.preventDefault();
      window.location=vid1;
    }
    click2 = (e) => {
      e.preventDefault();
      window.location=vid2;
    }
    click3 = (e) => {
      e.preventDefault();
      window.location=vid3;
    }
    click4 = (e) => {
      e.preventDefault();
      window.location=vid4;
    }
  }
  console.log('clips1 and site ----', clip1)
  return (
    <Video>
      <Gamenameone>Top clips from {props.games}</Gamenameone>
      <ClipsBlock>
        <ClipImage src={clip1} onClick={click1}></ClipImage>
        <Vidtext>{name1}</Vidtext>
        <Vidtext>Views: {views1}</Vidtext>
      </ClipsBlock>

      <ClipsBlock>
        <ClipImage src={clip2} onClick={click2}></ClipImage>
        <Vidtext>{name2}</Vidtext>
        <Vidtext>Views: {views2}</Vidtext>
      </ClipsBlock>

      <ClipsBlock>
        <ClipImage src={clip3} onClick={click3}></ClipImage>
        <Vidtext>{name3}</Vidtext>
        <Vidtext>Views: {views3}</Vidtext>
      </ClipsBlock>

      <ClipsBlock>
        <ClipImage src={clip4} onClick={click4}></ClipImage>
        <Vidtext>{name4}</Vidtext>
        <Vidtext>Views: {views4}</Vidtext>
      </ClipsBlock>
    </Video>
  )
};

export default GameOneClips;
