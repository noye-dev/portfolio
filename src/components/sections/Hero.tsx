"use client";

import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (window.innerWidth <= 768) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    const aboutSection = document.getElementById("about");
    const activitySection = document.getElementById("activity");

    if (aboutSection) observer.observe(aboutSection);
    if (activitySection) observer.observe(activitySection);

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper>
      <FluidShapeCenter />

      <Content>
        <Title>Frontend Developer</Title>
        <Subtitle>welcome to my page.</Subtitle>

        <Nav>
          <NavItem href="#about" $isActive={activeSection === "about"}>
            About
          </NavItem>
          <NavItem href="#activity" $isActive={activeSection === "activity"}>
            Activity
          </NavItem>
        </Nav>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const morph = keyframes`
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`;

const FluidShapeCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: #4ade80;
  z-index: 0;
  pointer-events: none;
  animation: ${morph} 8s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 4vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: #111;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-top: 1rem;
  font-weight: 400;
  letter-spacing: 0.05em;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
    gap: 1rem;
  }
`;

const NavItem = styled.a<{ $isActive: boolean }>`
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  color: ${({ $isActive }) => ($isActive ? "#111" : "#aaa")};

  @media (max-width: 768px) {
    font-size: 0.85rem;
    color: #444;

    &:active {
      color: #111;
    }
  }

  &:hover {
    @media (min-width: 769px) {
      color: #111;
      transform: translateX(4px);
    }
  }
`;
