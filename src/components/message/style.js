import styled from 'styled-components'

export const MessageWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
`

export const MainWrapper = styled.div`
  position: relative;
  top: 50%;
  width: 20rem;
  height: auto;
  margin: auto;
  border-radius: .3rem;
  overflow: hidden;
`

export const ContentWrapper = styled.div`
  background-color: #444;
  padding: 0.5em;
  text-align: center;
  color: #eee;
`
