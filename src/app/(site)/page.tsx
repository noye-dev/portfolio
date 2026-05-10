"use client";

import styled from "styled-components";
import { Hero } from "@/components/sections/Hero";
import { TimeLine } from "@/components/sections/TimeLine";
import { AboutMe } from "@/components/sections/AboutMe";

const Page = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <Hero />
      </LeftContainer>
      <RightContainer>
        <AboutMe />
        <TimeLine />
      </RightContainer>
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  max-width: 1280px;
  margin-inline: auto;
  display: flex;
  height: 100dvh;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 100dvh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
  }
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    overflow-y: visible;
    scroll-snap-type: none;
  }
`;
