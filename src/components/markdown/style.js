import styled from 'styled-components'

export const MarkdownWrapper = styled.div`

  ul {
    margin-left: 1.5rem;
  }
  
  ol {
    margin-left: 2.7rem;
  }
 
 ul li, ol li, a, strong, table td, table th {
   color: #c9cacc;
 }
 
 &>ul>li, &>ol>li{
    margin-bottom: 1rem;
 }
 
 strong {
   font-weight: 600;
 }
 
 a {
  padding: 0 .2rem;
 }
 
 blockquote {
    margin: 1rem 10px;
    padding: .5em 10px;
    background: inherit;
    color: #999;
    font-weight: 700;
    :before {
      margin-right: .25em;
      color: #999;
      content: "\\201C";
      vertical-align: -.4em;
      font-size: 2em;
      line-height: .1em;
    }
 }
 
 code {
  background-color: #212326;
  padding: .2rem;
  margin: 0 .2rem;
 }
 
 pre {
  background-color: #212326;
  padding: 1rem;
  margin: 2rem 0;
  overflow:scroll;
  code {
    background-color: inherit;
  }
  &::-webkit-scrollbar {
    display:none
  }
 }
 
 p {
  margin-bottom: 1rem;
 }
 
  
  h1, h2, h3, h4, h5, h6 {
    position: relative;
    display: block;
    margin-top: 2rem;
    margin-bottom: .5rem;
    color: #eee;
    font-weight: 700;
  }
  
  h1, h2, h3 {
    font-size: 1.6rem;
    :before {
      position: absolute;
      left: -1.3rem;
      color: #eee;
      content: "#";
      font-weight: 700;
      font-size: 1.6rem;
    }
  }
  
  img {
    position: relative;
    max-width: 100%;
  }
  
  table {
    max-width: 100%;
    border-top: solid 1px #fff;
    border-left: solid 1px #fff;
    th, td {
      padding: .5rem;
      border-bottom: solid 1px #fff;
      border-right: solid 1px #fff;
    }
  }

`
