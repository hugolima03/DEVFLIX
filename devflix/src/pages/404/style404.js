import styled from 'styled-components';

export const Page404 = styled.div`
* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
          
}

body {
  padding: 0;
  margin: 0;
}

#notfound {
  position: relative;
  height: 100vh;
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 40%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

#notfound .notfound-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}

#notfound .notfound-bg>div {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: #000;
}

#notfound .notfound-bg>div:nth-child(1) {
  left: 20%;
}

#notfound .notfound-bg>div:nth-child(2) {
  left: 40%
}

#notfound .notfound-bg>div:nth-child(3) {
  left: 60%
}

#notfound .notfound-bg>div:nth-child(4) {
  left: 80%
}

#notfound .notfound-bg>div:after {
  content: '';
  position: absolute;
  top: 0px;
  left: -0.5px;
  -webkit-transform: translateY(-160px);
      -ms-transform: translateY(-160px);
          transform: translateY(-160px);
  height: 160px;
  width: 2px;
  background-color: #3CFF00;
}

@-webkit-keyframes drop {
  90% {
    height: 20px;
  }
  100% {
    height: 160px;
    -webkit-transform: translateY(calc(100vh + 160px));
            transform: translateY(calc(100vh + 160px));
  }
}

@keyframes drop {
  90% {
    height: 20px;
  }
  100% {
    height: 160px;
    -webkit-transform: translateY(calc(100vh + 160px));
            transform: translateY(calc(100vh + 160px));
  }
}

#notfound .notfound-bg>div:nth-child(1):after {
  -webkit-animation: drop 3s infinite linear;
          animation: drop 3s infinite linear;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}

#notfound .notfound-bg>div:nth-child(2):after {
  -webkit-animation: drop 2s infinite linear;
          animation: drop 2s infinite linear;
  -webkit-animation-delay: 0.7s;
          animation-delay: 0.7s;
}

#notfound .notfound-bg>div:nth-child(3):after {
  -webkit-animation: drop 3s infinite linear;
          animation: drop 3s infinite linear;
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}

#notfound .notfound-bg>div:nth-child(4):after {
  -webkit-animation: drop 2s infinite linear;
          animation: drop 2s infinite linear;
  -webkit-animation-delay: 1.2s;
          animation-delay: 1.2s;
}

.notfound {
  max-width: 520px;
  width: 100%;
  text-align: center;
}

.notfound .notfound-404 {
  height: 210px;
  line-height: 210px;
}

.notfound .notfound-404 h1 {
  font-family: 'Oswald', sans-serif;
  font-size: 188px;
  font-weight: 700;
  margin: 0px;
  text-shadow: 4px 4px 0px #000;
  color: #3CFF00;
}

.notfound h2 {
  font-family: 'Oswald', sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.6px;
}

.notfound p {
  font-family: 'Lato', sans-serif;
  color: #fff;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 25px;
}

.notfound a {
  font-family: 'Lato', sans-serif;
  padding: 10px 30px;
  display: inline-block;
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  -webkit-box-shadow: 0px 0px 0px 2px #fff, 2px 2px 0px 2px #fff;
          box-shadow: 0px 0px 0px 2px #fff, 2px 2px 0px 2px #fff;
  text-decoration: none;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.notfound a:hover {
  color: #000;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 0px 0px #fff, 0px 0px 0px 2px #3CFF00;
          box-shadow: 0px 0px 0px 0px #fff, 0px 0px 0px 2px #3CFF00;
}

.notfound-social {
  margin-top: 35px;
}

.notfound-social>a {
  width: 50px;
  height: 50px;
  line-height: 40px;
  padding: 0px;
  padding-top: 10px;
  margin: 0px 5px;
}

.notfound-social>a:hover {
  background-color: rgb(255, 255, 255);
  -webkit-box-shadow: 0px 0px 0px 0px #fff, 0px 0px 0px 2px #3CFF00;
          box-shadow: 0px 0px 0px 0px #fff, 0px 0px 0px 2px #3CFF00;
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 {
    height: 122px;
    line-height: 122px;
  }
  .notfound .notfound-404 h1 {
    font-size: 122px;
  }
  .notfound h2 {
    font-size: 26px;
  }
}
`