import React from 'react';
import styled from 'styled-components';

const Video2 = styled.div`
  margin-left: 85px;
`

const ClipsBlock2 = styled.span`
  display: inline-block;
  margin-left: 15px;
`

const ClipImage2 = styled.img`
  height: 169px;
  width: 300px;
  border: 1px solid light-grey;
`

const Vidtext2 = styled.div`
  color: #664a9c;
`

const Gamenametwo = styled.div`
  margin-left: 38%;
  font-size: 20px;
  font-weight: bold;
  color: #664a9c;
`

const GameTwoClips = (props) => {
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
  var clickStream1;
  var clickStream2;
  var clickStream3;
  var clickStream4;

  if (props.clips[0]) {
    clip1 = props.clips[0].thumbnail_url;
    var vid1 = props.clips[0].url;
    name1 = props.clips[0].broadcaster_name;
    views1 = props.clips[0].view_count;

    name2 = props.clips[1].broadcaster_name;
    views2 = props.clips[1].view_count;
    clip2 = props.clips[1].thumbnail_url;
    var vid2 = props.clips[1].url;

    name3 = props.clips[2].broadcaster_name;
    views3 = props.clips[2].view_count;
    clip3 = props.clips[2].thumbnail_url;
    var vid3 = props.clips[2].url;

    name4 = props.clips[3].broadcaster_name;
    views4 = props.clips[3].view_count;
    clip4 = props.clips[3].thumbnail_url;
    var vid4 = props.clips[3].url;

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
    clickStream1 = (e) => {
      e.preventDefault();
      window.location=`https://www.twitch.tv/${name1}`;
    }
    clickStream2 = (e) => {
      e.preventDefault();
      window.location=`https://www.twitch.tv/${name2}`;
    }
    clickStream3 = (e) => {
      e.preventDefault();
      window.location=`https://www.twitch.tv/${name3}`;
    }
    clickStream4 = (e) => {
      e.preventDefault();
      window.location=`https://www.twitch.tv/${name4}`;
    }
  }

  return (
    <Video2>
      <Gamenametwo>Top clips from {props.games}</Gamenametwo>
      <ClipsBlock2>
        <ClipImage2 src={clip1} onClick={click1}></ClipImage2>
        <Vidtext2 onClick={clickStream1}>{name1}</Vidtext2>
        <Vidtext2>Views: {views1}</Vidtext2>
      </ClipsBlock2>

      <ClipsBlock2>
        <ClipImage2 src={clip2} onClick={click2}></ClipImage2>
        <Vidtext2 onClick={clickStream2}>{name2}</Vidtext2>
        <Vidtext2>Views: {views2}</Vidtext2>
      </ClipsBlock2>

      <ClipsBlock2>
        <ClipImage2 src={clip3} onClick={click3}></ClipImage2>
        <Vidtext2 onClick={clickStream3}>{name3}</Vidtext2>
        <Vidtext2>Views: {views3}</Vidtext2>
      </ClipsBlock2>

      <ClipsBlock2>
        <ClipImage2 src={clip4} onClick={click4}></ClipImage2>
        <Vidtext2 onClick={clickStream4}>{name4}</Vidtext2>
        <Vidtext2>Views: {views4}</Vidtext2>
      </ClipsBlock2>
    </Video2>
  )
};

export default GameTwoClips;