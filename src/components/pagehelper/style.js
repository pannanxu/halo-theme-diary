import styled from 'styled-components';

export const PageHelperWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const PageNavWrapper = styled.div`
  
  ul {
    display: flex;
    justify-content: center;
    li {
      list-style: none;
      a {
        text-decoration: none;
        padding: 0.5rem 1rem;
        svg {
          width: 3.2rem;
        }
      }
    }
    .active {
      color: red;
    }
  }

`
