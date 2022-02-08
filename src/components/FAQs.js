import React, { useState } from "react";
import { Faqs } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const FrequentlyAskedQuestionSection = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 70%;
  @media screen and (max-width: 414px) {
    width: 91%;
    .topic {
      font-weight: 800;
      color: #00a650;
    }
  }
  @media only screen and (min-width: 415px) and (max-width: 720px) {
    width: 81%;
    .topic {
      font-weight: 800;
      color: #00a650;
    }
  }
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    76.91deg,
    rgba(76, 74, 149, 0.4) 22.53%,
    rgba(183, 48, 24, 0.2) 141.14%
  );
  backdrop-filter: blur(200px);
  color: #f0f0f0;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  border-radius: 10px;
  height: 60px;
  cursor: pointer;
  margin-top: 30px;
  h2 {
    font-size: 14px;
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    h2 {
      font-size: 14px;
    }
  }
`;
const Dropdown = styled.div`
  padding: 20px;
  background: linear-gradient(
    76.91deg,
    rgba(76, 74, 149, 0.4) 22.53%,
    rgba(183, 48, 24, 0.2) 141.14%
  );
  backdrop-filter: blur(200px);
  p {
    font-size: 14px;
    margin: 0;
    line-height: 20px;
  }
`;

const Faq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#fff", size: "15px" }}>
      <FrequentlyAskedQuestionSection className="container">
        <Container>
          {Faqs.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h2>{item.question}</h2>
                  <span>
                    {clicked === index ? <FaAngleDown /> : <FaAngleRight />}
                  </span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </FrequentlyAskedQuestionSection>
    </IconContext.Provider>
  );
};

export default Faq;
