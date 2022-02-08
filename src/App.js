import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import {
  HeroSection,
  AboutSection,
  FrequentlyAskedQuestions,
  Footer,
  MarqueeImage,
  Team,
  WalletInfo,
  HistorySection,
  MintSection,
} from "../src/style";

import Faq from "../src/components/FAQs";
import MarqueeNft from "../src/components/MarqueeNft";
import { TeamInfo } from "../src/components/Data";
import logo from "../src/assets/FountainheadLogo-1.png";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #fff;
  font-weight: bold;
  color: #000;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click Mint Now to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit https://opensea.io/ to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <>
      <HeroSection>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/* <div className="icons">
            <a href="https://discord.gg/7AfjqZuwgG">
              <i className="fab fa-discord"></i>
            </a>
            <a href="https://twitter.com/metabulls_">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/BULLSNFT/">
              <i className="fab fa-instagram"></i>
            </a>
            {!wallet ? (
              <ConnectButton>Connect Wallet</ConnectButton>
            ) : wallet ? (
              <ConnectButton disabled>Wallet Connected</ConnectButton>
            ) : null}
          </div> */}
        </div>

        <div className="container">
          <div className="text">
            <h1>Ini Oluwa’s NFTs</h1>
            <p>
              The first drop from the Fountainhead project. 225 She-Soul tokens
              launching on the 31st of January, 2022 on the Polygon blockchain
              for 33 MATIC(Polygon) each!
            </p>

            <a href="https://discord.gg/aA5bbD7Bxj">
              <button>Join Discord</button>
            </a>
          </div>
          <div className="image">
            <div className="nft-image">
              <div className="title-container">
                <div className="title">
                  <h5>She-Soul Tokens</h5>
                  <p>
                    Current bid: <b>33 MATIC </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroSection>

      <MintSection>
        <div className="connect">
          <h1>Wallet</h1>
          <s.SpacerSmall />
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <p style={{ color: "var(--accent-text)" }}>The sale has ended.</p>
              <p style={{ color: "var(--accent-text)" }}>
                You can still find {CONFIG.NFT_NAME} on
              </p>
            </>
          ) : (
            <>
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <div>
                  <p
                    style={{
                      color: "var(--accent-text)",
                    }}
                  >
                    Connect to the {CONFIG.NETWORK.NAME} network
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    Connect Wallet
                  </button>
                  {blockchain.errorMsg !== "" ? (
                    <>
                      <p
                        style={{
                          color: "var(--accent-text)",
                        }}
                      >
                        {blockchain.errorMsg}
                      </p>
                    </>
                  ) : null}
                </div>
              ) : (
                <>
                  <p
                    style={{
                      color: "var(--accent-text)",
                    }}
                  >
                    {feedback}
                  </p>
                  <div className="increasement">
                    <button
                      style={{ lineHeight: 0.4 }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      -
                    </button>
                    <s.SpacerMedium />
                    <p
                      style={{
                        color: "var(--accent-text)",
                      }}
                    >
                      {mintAmount}
                    </p>
                    <button
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? "Minting" : "Mint Now"}
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="detail">
          <h1>
            {data.totalSupply} / {CONFIG.MAX_SUPPLY}
          </h1>
          <s.SpacerSmall />

          <p style={{ color: "var(--accent-text)" }}>
            1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
            {CONFIG.NETWORK.SYMBOL}.
          </p>
          <button
            onClick={(e) => {
              window.open(CONFIG.MARKETPLACE_LINK, "_blank");
            }}
          >
            {CONFIG.MARKETPLACE}
          </button>
        </div>
      </MintSection>

      <MarqueeImage>
        <MarqueeNft />
      </MarqueeImage>

      <AboutSection>
        <h1>About</h1>
        <p>
          Ini Oluwa, popularly known as the Billionaire Artist, is a visual
          artist and has been so for the past 10 years. He spends his time
          making art with acrylic on canvas in his personal painting studio. He
          describes himself as a painter of essence on mood.
        </p>

        <p>
          You are welcome to explore his NFTs, which are digitally altered
          pieces of his masterful paintings. By placing the subjects of these
          paintings in new digitally imagined environments, he has given more
          room to the expression of the different realities of our human
          experience.
        </p>

        <p>
          Ini also intends on building the largest NFT Community out of Africa,
          which leads on to a metaverse where creatives can express, explore,
          and interact with each other’s creations. This is very similar to a
          physical community of about 200 members he currently runs, called
          Midiums.
        </p>
      </AboutSection>

      <HistorySection>
        <h1>The Fountainhead Project</h1>

        <p>
          The first of many such projects to come. The Fountainhead NFT
          collection is a series of digitally altered paintings from the
          Fountainhead series of paintings done by Ini in his studio between
          2020 & 2021.
        </p>

        <p>
          Between January 2022 and March 2023, there will be 15 NFT drops from
          this collection – at the end of each month. 225 tokens per month!
        </p>

        <p>
          For each NFT that you purchase, you would get an originally signed
          print of the NFT, and all you would have to pay for is the framing and
          shipping. Furthermore, for every 5 NFTs that you purchase, you would
          get one free NFT from the next drop!
        </p>

        <p>
          The funds from the Fountainhead project are going into creating a
          virtual world for creatives out of Africa, a metaverse called Midiums.
        </p>
      </HistorySection>

      <Team>
        <h1>The Team</h1>
        <div className="team-container">
          {TeamInfo.map((item) => {
            return (
              <div className="team-info">
                <div
                  style={{ backgroundImage: `url(${item.pic})` }}
                  className="team-pic"
                ></div>
                <h4>{item.name}</h4>
                <p>{item.postion}</p>
              </div>
            );
          })}
        </div>
      </Team>

      <FrequentlyAskedQuestions>
        <h1>FAQs</h1>
        <Faq />
      </FrequentlyAskedQuestions>

      <Footer>
        <div className="text">
          <p>
            Copyright © 2022 Fountainhead
            <br />
            All rights reserved
          </p>
        </div>

        <div className="socials">
          <a href="https://discord.gg/aA5bbD7Bxj">
            <i className="fab fa-discord"></i>
          </a>
          <a href="https://twitter.com/ini_oluwa_">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/ini.oluwa/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCaw6e3V5mTlV_Ihu2BWE8aQ">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Footer>
    </>
  );
}

export default App;
