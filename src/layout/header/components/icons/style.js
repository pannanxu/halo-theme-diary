import styled from 'styled-components'
export const HeaderIconsWrapper = styled.div`

  ul {
    display: flex;
    li {
      list-style: none;
      margin-left: 2rem;
      svg {/* color: #bfbfbf; */
        width: 1.8rem;
        height: 1.8rem;
      }
      div {
        cursor: pointer;
      }
    }
  }
  
  @media screen and (max-width: 620px) {
    display: ${props => props.display};  
  }
`
