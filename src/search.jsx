import React from 'react';
import styled from 'styled-components';


const ButtonHeader = styled.div`
  background-color: #6441a5;
  height: 50px;
`
const ButtonStyle = styled.button`
  border-radius: 25px;
  background-color: #8F58B9;
  color: white;
  font-size: 12px;
  margin-top: 15px;
`

const InputStyle = styled.input`
  border: 1px solid #8F58B9;
  margin-top: 15px;
  margin-left: 5px;
`

const NavText = styled.text`
  margin-top: 23px;
  margin-left: 23%;
  font-size: 28px;
  color: white;
  text-shadow: 3px 3px #3C1E52;
`

const Search = (props) => {
  const handleSearch = props.search;
  return (
    <ButtonHeader id="input">
      <InputStyle id="search" type="text"></InputStyle>
      <ButtonStyle onClick={handleSearch}>Search by game name</ButtonStyle>
      <NavText>Twitch Top Clips</NavText>
    </ButtonHeader>
  );
};

export default Search;