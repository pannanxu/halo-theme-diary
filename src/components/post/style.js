import styled from 'styled-components';

export const ArticleWrapper = styled.article`
  margin-bottom: 1rem;
  h2, p {
    word-break:break-all;
    word-wrap:break-word; 
    white-space:normal; 
  }
  ul {
    display: flex;
    padding: .3rem 0;
    li {
      list-style: none;
      margin-right: 1rem;
      svg {
        position: relative;
        top: .3rem;
        width: 1.6rem;
        height: 1.6rem;
      }
      span {
        padding-left: .4rem;
        font-size: 1.2rem;
      }
    }
  }
`
