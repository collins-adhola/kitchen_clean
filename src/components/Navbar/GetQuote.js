import React from 'react'
import styled from 'styled-components'


const Quote = styled.div`
background-color: green;
border-radius: 50%;
padding-top: 10px;
margin:10px 30 px


`
function GetQuote() {
  return (
    <div>
      <Quote>
        <a href="#">GET A QUOTE</a>
      </Quote>
    </div>
  );
}

export default GetQuote