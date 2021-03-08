import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  .loading-main {
    //position: relative;
  }
  .loading {
    //position: relative;
    margin-bottom: 3rem;
    div {
      height: 2rem;
      background-color: #444;
      border-radius: .3rem;
      margin-bottom: 1rem;
    }
    .title {
      width: 50%;
    }
    .desc:nth-of-type(3){
      width: 90%;
    }
    .icons {
      width: 40%;
    }
  }
  .animation-box {
    position: relative;
    overflow: hidden;
  }
  
  .loading-animation {
    position: absolute;
    padding: 1rem;
    //top: -30vh;
    left: -10vw;
    width: 100%;
    height: 100vh;
    background-color: #eee!important;
    filter: blur(70px);
    transform: rotate(50deg);
    animation-name: loading-animation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  
  @keyframes loading-animation {
    from {transform: translateX(-10vw) rotate(50deg);}
    to {transform: translateX(100vw) rotate(50deg);}
  }

`
