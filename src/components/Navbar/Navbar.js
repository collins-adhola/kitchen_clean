



import React from "react";
import styled from "styled-components";
import DropDownDeep from "./DropDownDeep";
import DropDownOther from "./DropDownOther";
import GetQuote from "./GetQuote";



const Wrapper = styled.section`
  background-color: #f4f4f4;
  display: flex;
  justify-content:center;
  gap: 10px;
  padding: 20px;
  color:black;
  padding-right:40px;
  

  a {
    text-decoration: none;
    color: black;
    padding-top: 8px
  }
`;



function Navbar(){
  return (
    <>
      <Wrapper>
        <a href="#"> HOME </a>
        <a href="#"> ABOUT </a>

        <DropDownDeep />

        <DropDownOther />

        <a href="#"> NEWS </a>

        <GetQuote />
      </Wrapper>
    </>
  );
}

export default Navbar
