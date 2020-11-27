import React from "react";
import "./Home.css";
import styled from "styled-components";

function Home() {
  return (
    <div className="CSSTest">
      home
      <Div>hello</Div>
    </div>
  );
}

const Div = styled.div`
  color: lightcoral;
`;

export default Home;
