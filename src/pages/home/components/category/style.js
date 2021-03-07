import styled from 'styled-components';

export const CategoryWrapper = styled.nav`
  margin-bottom: 3rem;
  ul {
    display: flex;
    li {
      list-style: none;
      margin-right: .3rem;
      a {
        text-decoration: none;
        padding: .3rem .5rem;
        cursor: pointer;
      }
    }
    .active {
      background-color: #444;
      border-radius: .3rem;
    }
  }
`
