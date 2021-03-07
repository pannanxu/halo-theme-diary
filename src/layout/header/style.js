import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  margin-bottom: 3rem;
  .header-box {
    display: flex;
  }
  
  .header-logo {
    width: 5rem;
    height: 5rem;
    img {
      width: 100%;
      height: 100%;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }
  
  .header-info {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding-left: 2rem;
    .header-desc {
      h2 a{
        color: #c9cacc;
        letter-spacing: .01em;
        font-weight: 700;
        font-style: normal;
        font-size: 2rem;
        line-height: 3.5rem;
        text-decoration: none;
      }
      p {
        line-height: 1.5rem;
      }
    }

  }
  

`

export const MHeaderFootFixedBox = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 1;
  .fixed-box {
    overflow:scroll;
    border-radius: 1rem;
    background-color: rgba(0,0,0, .7);
    padding: 1rem;
    &::-webkit-scrollbar {
      display:none
    }
    ul {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      li {
        width: 2rem;
        height: 2rem;
        &:first-of-type {
          margin-left: 0;
        }
      }
    }
  }
  
  @media screen and (max-width: 620px) {
    display: block;
  }
`
