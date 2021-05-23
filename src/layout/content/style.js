import styled from 'styled-components';

export const SectionMainWrapper = styled.section`
  min-height: 80vh;
`

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  
  
.card-enter,.card-appear{
    opacity: 0;
    transform:scale(.4);
}
.card-enter-active,.card-appear-active{
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms,transform 300ms;
}
.card-exit{
    opacity: 1;
    transform: scale(1);
}
.card-exit-active{
    opacity: 0;
    transform: scale(.4);
    transition: opacity 300ms,transform 300ms;
}
.card-exit-done{
    opacity: 0;
}
  
`
