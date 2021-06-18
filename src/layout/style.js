import styled from 'styled-components';

export const MainWrapper = styled.main`
  position: relative;
  max-width: 860px;
  height: 100%;
  padding: 1.5rem;
  margin: auto;
  overflow: hidden;
`

export const PageNavFixedBox = styled.div`
  position: fixed;
  z-index: 99;
  right: ${(props) => props.right}rem;
  top: 0;
  width: 26rem;
  height: 100vh;
  background-color: #444;
  transition: right .5s;
  ul {
    padding: 2.5rem;
    li {
      background-color: #3E3E3E;
      padding: .2rem .5rem;
      border-radius: .3rem;
      margin-bottom: .5rem;
      a {
        text-decoration: none;
        font-size: 1.6rem;
        display: block;
        color: #c9cacc;
        &.active {
          color: #eee;
        }
      }
    }
  }
  @media (min-width: 768px) {
    
  }
`

export const PageNavFixedBoxOverlay = styled.div`
  position: absolute;
  z-index: 98;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(120,129,147,.22);
  cursor: pointer;
  display: ${props => props.isShow ? 'block': 'none'};
  transition: all .5s ease-in-out;
`
