import styled from "styled-components";
import bull from "./assets/She-Soul-Tokens.GIF";
import circle from "./assets/Circles.png";

export const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  color: #fff;
  position: relative;
  .header {
    width: 100%;
    //border: 1px solid white;
    height: 120px;
    padding: 30px 150px 0 150px;
    display: flex;
    justify-content: space-between;
    a {
      color: #fefefe;
      i {
        font-size: 35px;
        margin-left: 40px;
        transition: 0.2s ease-in;
      }
      i:hover {
        color: #c83e2e;
      }
    }

    .logo {
      width: 90px;
      height: 65px;
      img {
        object-fit: cover;
        width: 100%;
        height: auto;
      }
    }
  }
  .container {
    display: flex;
    padding: 0 150px;
    margin-top: 40px;
    justify-content: space-between;
    .text {
      width: 40%;
      h1 {
        font-size: 80px;
        margin-bottom: 0;
        font-weight: 500;
        margin-top: 40px;
      }
      p {
        margin-top: 15px;
        line-height: 35px;
      }
      button {
        background: linear-gradient(
          76.91deg,
          rgba(76, 74, 149, 0.4) 22.53%,
          rgba(183, 48, 24, 0.2) 141.14%
        );
        backdrop-filter: blur(200px);
        height: 40px;
        color: #fff;
        border: none;
        padding: 5px 30px;
        cursor: pointer;
        border-radius: 10px;
        font-size: 15px;
        margin-top: 30px;
        font-family: "Raleway", sans-serif;
      }
    }
    .image {
      width: 40%;
      background-image: url(${circle});
      height: 500px;
      display: flex;
      background-size: cover;
      background-position: center;
      justify-content: center;
      align-items: center;
      .nft-image {
        width: 350px;
        background-image: url(${bull});
        height: 350px;
        background-size: cover;
        background-position: center;
        border-radius: 150px;
        position: relative;
        .title-container {
          width: 100%;
          position: absolute;
          bottom: 0;
          margin-bottom: -40px;
        }
        .title {
          width: 60%;
          //border:1px solid red;
          margin: auto;
          height: 90px;
          border-radius: 20px;
          padding: 28px 0 0 40px;
          background: linear-gradient(
            20.62deg,
            rgba(255, 255, 255, 0.04) 19.09%,
            rgba(255, 255, 255, 0.01) 79.23%
          );
          backdrop-filter: blur(60px);
          h5 {
            font-weight: 500;
            font-size: 16px;
          }
          p {
            font-size: 12px;
          }
        }
      }
    }
  }

  .editorial {
    display: block;
    width: 100%;
    height: 60px;
    max-height: 60px;
    margin: 0;
    z-index: 5;
    bottom: 0;
    position: absolute;
    left: 0px;
    float: left;
    //transform: rotateX(180deg);
  }

  @media only screen and (max-width: 414px) {
    height: auto;
    .header {
      padding: 30px 20px 10px 20px;
      height: 100px;
      .logo {
        width: 50px;
        height: 50px;
      }
      a {
        i {
          font-size: 30px;
        }
      }
    }
    .container {
      padding: 0 20px;
      flex-direction: column;
      margin-top: 0px;
      .text,
      .image {
        width: 100%;
        h1 {
          font-size: 50px;
          margin-top: 20px;
        }
      }
      .image {
        margin: 70px 0 50px 0;
        height: 300px;

        margin-bottom: 50px;
        .nft-image {
          background-size: contain;
        }
      }
    }
  }
  @media only screen and (min-width: 415px) and (max-width: 720px) {
    height: auto;
    .header {
      padding: 30px 40px;
      height: 100px;
      .logo {
        width: 50px;
        height: 50px;
      }
      a {
        i {
          font-size: 30px;
        }
      }
    }
    .container {
      padding: 0 40px;
      flex-direction: column;
      margin-top: 0px;
      .text,
      .image {
        width: 100%;
        h1 {
          font-size: 50px;
          margin-top: 20px;
        }
      }
      .image {
        margin: 70px 0 30px 0;
        height: 300px;
        margin-bottom: 80px;
      }
    }
  }
`;

export const WalletInfo = styled.div`
  color: #fff;
`;

export const MarqueeImage = styled.div`
  text-align: center;
  padding: 100px 0;
  color: #fff;
  height: 400px;
  .images {
    width: 200px;
    height: 200px;
    background-size: cover;
    margin-right: 40px;
    border-radius: 70px;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
    padding: 40px 0px;
  }
`;

export const AboutSection = styled.div`
  padding: 30px 150px;
  color: #fff;
  height: 400px;
  h1 {
    font-size: 30px;
    font-weight: 500;
  }

  p {
    margin-top: 30px;
    line-height: 28px;
  }

  @media only screen and (max-width: 414px) {
    height: auto;
    padding: 20px;
    p {
      font-size: 14px;
      margin-top: 20px;
    }
  }
  @media only screen and (min-width: 415px) and (max-width: 720px) {
    height: auto;
    padding: 20px 40px;
    p {
      font-size: 14px;
      margin-top: 20px;
    }
  }
`;

export const HistorySection = styled.div`
  padding: 70px;
  width: 78%;
  height: auto;
  margin: 30px auto;
  border-radius: 40px;
  color: #fff;
  background: linear-gradient(
    20.62deg,
    rgba(255, 255, 255, 0.08) 19.09%,
    rgba(255, 255, 255, 0.02) 79.23%
  );
  backdrop-filter: blur(300px);

  h1 {
    font-size: 29px;
    font-weight: 400;
  }

  p {
    margin-top: 30px;
    line-height: 28px;
  }

  @media only screen and (max-width: 414px) {
    height: auto;
    padding: 40px 20px;
    width: 90%;
    h1 {
      font-size: 22px;
      font-weight: 400;
    }
    p {
      font-size: 14px;
      margin-top: 10px;
    }
  }
  @media only screen and (min-width: 415px) and (max-width: 720px) {
    height: auto;
    padding: 40px;
    width: 80%;
    h1 {
      font-size: 28px;
      font-weight: 400;
    }
    p {
      font-size: 14px;
      margin-top: 10px;
    }
  }
`;

export const MintSection = styled.div`
  padding: 120px 150px;
  width: 78%;
  height: auto;
  margin: 30px auto;
  border-radius: 40px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    20.62deg,
    rgba(255, 255, 255, 0.08) 19.09%,
    rgba(255, 255, 255, 0.02) 79.23%
  );
  backdrop-filter: blur(300px);
  h1 {
    font-size: 50px;
    font-weight: 400;
  }
  button {
    background: linear-gradient(
      76.91deg,
      rgba(76, 74, 149, 0.4) 22.53%,
      rgba(183, 48, 24, 0.2) 141.14%
    );
    backdrop-filter: blur(200px);
    color: #fff;
    padding: 15px 25px;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    font-family: "Raleway", sans-serif;

   
  }
  .increasement{
      display: flex;
      padding-top:15px;
      p{
        margin:0 20px 0 0;
      }
      button{
        margin-top: 0;
        padding:5px 14px;
        cursor: pointer;
        font-weight: 700;
        font-size:15px;
      }

    }

  @media only screen and (max-width: 414px) {
    height: auto;
    padding: 40px 20px;
    flex-direction:column;
    width: 90%;
    margin-top:70px;

    h1{
      font-size: 30px;
    }
    .detail{
      margin-top:30px;
    }
    
  }
  @media only screen and (min-width: 415px) and (max-width: 720px) {
    height: auto;
    padding: 40px;
    flex-direction:column;
    width: 90%;
    margin-top:70px;

    h1{
      font-size: 30px;
    }
    .detail{
      margin-top:30px;
    }
  }
`;

export const Team = styled.div`
  padding: 70px 150px 60px 150px;
  h1 {
    font-size: 35px;
    color: #fff;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }
  .team-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .team-info {
    width: 33%;
    text-align: center;
    .team-pic {
      width: 150px;
      height: 150px;
      border-radius: 100%;
      margin: 30px auto;
      background-size: cover;
    }
    h4 {
      color: #fff;
      margin-top: 0;
      font-weight: 500;
    }
    p {
      color: #fff;
      font-size: 10px;
      margin-top: 5px;
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 30px;
    .team-container {
      flex-direction: column;
      .team-info {
        width: 100%;
      }
    }
  }
`;
export const FrequentlyAskedQuestions = styled.div`
  background-color: transparent;
  padding: 30px 0 80px 0;
  color: #fff;
  height: auto;
  margin-top: 50px;
  h1 {
    font-size: 35px;
    text-align: center;
    font-weight: 500;
  }
`;

export const Footer = styled.div`
  background-color: transparent;
  padding: 40px 150px;
  color: #fff;
  border-top: 1px solid #788a90;
  height: 100px;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 65px;
    height: 65px;
    img {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }
  .socials {
    width: 15%;
    display: flex;
    justify-content: space-between;
    i {
      color: #fff;
      font-size: 25px;
    }
  }
  @media only screen and (max-width: 414px) {
    padding: 30px 20px 0 20px;
    height: auto;
    flex-direction: column;
    .socials {
      width: 50%;
      margin: 20px 0;
    }
  }
  @media only screen and (min-width: 415px) and (max-width: 720px) {
    padding: 30px 40px 0 40px;
    height: auto;
    flex-direction: column;
    .socials {
      width: 50%;
      margin: 20px 0;
    }
  }
`;
