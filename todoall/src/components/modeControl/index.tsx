import React from "react";
import styled from "styled-components";

const StyledModeButtonBG = styled.span`
  z-index: 0;
  position: absolute;
  width: 100px;
  height: 36px;
  background-color: var(--rgba-deep-gray);
  border-radius: 20px;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
  transition: left 0.4s ease-out;
`;

function ModeButtonBG() {
  return (
    <>
      <StyledModeButtonBG className="modelButtonBG"></StyledModeButtonBG>
    </>
  );
}

let bg: HTMLSpanElement | null = document.querySelector(".modelButtonBG");

interface ImodeButton {
  children: React.ReactNode;
  event: (e: React.MouseEvent) => void;
}

function getXY(e: React.MouseEvent) {
  if (bg && e.currentTarget) {
    bg.style.left = `${(e.currentTarget as HTMLButtonElement).offsetLeft}px`;
  }
  return;
}

const StyledModeButton = styled.button`
  z-index: 2;
  width: 100px;
  height: 36px;
  border: none;
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--rgba-light-gray);
  }
`;

function ModeButton({ children, event }: ImodeButton) {
  return (
    <>
      <StyledModeButton className="pointer" onClick={event}>
        {children}
      </StyledModeButton>
    </>
  );
}

const StyledModeControl = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  background-color: var(--rgba-light-gray);
  border-radius: 40px;
`;

function ModeControl() {
  return (
    <>
      <StyledModeControl>
        <ModeButton event={getXY}>
          <span className="capitalize">all</span>
        </ModeButton>
        <ModeButton event={getXY}>
          <span className="capitalize">board</span>
        </ModeButton>
        <ModeButton event={getXY}>
          <span className="capitalize">calendar</span>
        </ModeButton>
        <ModeButton event={getXY}>
          <span className="capitalize">list</span>
        </ModeButton>
        <ModeButtonBG />
      </StyledModeControl>
    </>
  );
}

export { ModeControl };
