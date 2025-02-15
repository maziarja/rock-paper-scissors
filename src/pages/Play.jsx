import styled from "styled-components";
import { useApp } from "../context/AppContext";
import Rock from "../ui/Rock";
import Scissors from "../ui/Scissors";
import Paper from "../ui/Paper";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const StyledPlay = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  min-height: 55rem;

  .competition {
    display: flex;
    justify-content: center;
    gap: 8rem;
    align-items: center;
    margin-bottom: 12rem;
    @media (min-width: 43.75em) {
      justify-content: space-around;
    }
  }
  h2 {
    color: white;
    font-weight: 600;
    margin: 0 auto;
    font-size: 6.4rem;
    letter-spacing: 1.6px;
    @media (min-width: 43.75em) {
      font-size: 4.6rem;
    }
    @media (min-width: 56.25em) {
      font-size: 3.2rem;

      position: absolute;
      top: 38%;
      left: 40%;
    }
    @media (min-width: 75em) {
      left: 43%;
    }
  }
  button {
    cursor: pointer;
    align-self: center;
    padding: 1.6rem 7rem;
    margin-top: 3rem;
    border-radius: 1rem;
    background-color: white;
    color: hsl(229, 25%, 31%);
    font-size: 1.6rem;
    letter-spacing: 1.6px;
    font-weight: 600;
    @media (min-width: 43.75em) {
      padding: 1.6rem 5rem;
    }
    @media (min-width: 56.25em) {
      padding: 1.4rem 3.2rem;
      font-size: 1.4rem;
      position: absolute;
      top: 40%;
      left: 38%;
    }
    @media (min-width: 75em) {
      left: 42%;
    }
  }
  .redText {
    color: hsl(349, 71%, 56%);
  }

  .youPickedContainer,
  .pcPickedContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    & > p {
      color: white;
      font-weight: 600;
      letter-spacing: 2px;
      margin-top: 1rem;
      font-size: 1.6rem;
    }

    .marginTop {
      margin-top: 14rem;
      @media (min-width: 43.75em) {
        margin-top: 12.5rem;
      }
    }
    .userPickedEffect {
      position: absolute;
      top: 14rem;
      border: 85px solid hsl(214, 47%, 22%);
      border-radius: 50%;
      z-index: -1;
      transition: all 300ms;
      &::before {
        content: "";
        position: absolute;
        top: -55px;
        left: -55px;
        right: -55px;
        bottom: -55px;
        border: 55px solid hsl(214, 47%, 24%);
        border-radius: 50%;
      }
      &::after {
        content: "";
        position: absolute;
        top: -25px;
        left: -25px;
        right: -25px;
        bottom: -25px;
        border: 25px solid hsl(214, 47%, 27%);
        border-radius: 50%;
      }
      @media (min-width: 43.75em) {
        top: 18.5rem;
      }
    }
  }
  .pcHand {
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    background-color: hsl(214, 47%, 20%);
  }
`;

function Play() {
  const { dispatch, userHand, pcHand, states } = useApp();
  const ref = useRef(false);
  const navigate = useNavigate();

  function handlePlayAgain() {
    dispatch({ type: "playAgain" });
    navigate("/");
  }

  useEffect(
    function () {
      if (ref.current) return;
      setTimeout(function () {
        if (userHand !== null && pcHand !== null) {
          if (
            (userHand === "paper" && pcHand === "rock") ||
            (userHand === "rock" && pcHand === "scissors") ||
            (userHand === "scissors" && pcHand === "paper")
          ) {
            dispatch({ type: "win" });
          } else if (userHand === pcHand) {
            dispatch({ type: "equal" });
          } else {
            dispatch({ type: "lose" });
          }
        }
      }, 1000);

      ref.current = true;
    },
    [userHand, pcHand, dispatch]
  );

  return (
    <StyledPlay>
      <div className="competition">
        <div className="youPickedContainer">
          <div className={` ${states === "win" && "userPickedEffect"}`}>
            {userHand === null && <div className="pcHand"></div>}
            {userHand && userHand === "rock" && <Rock />}
            {userHand && userHand === "scissors" && <Scissors />}
            {userHand && userHand === "paper" && <Paper />}
          </div>
          <p className={` ${states === "win" && "marginTop"}`}>YOU PICKED</p>
        </div>
        <div className="pcPickedContainer">
          <div className={` ${states === "lose" && "userPickedEffect"}`}>
            {pcHand === null && <div className="pcHand"></div>}
            {pcHand && pcHand === "paper" && <Paper />}
            {pcHand && pcHand === "scissors" && <Scissors />}
            {pcHand && pcHand === "rock" && <Rock />}
          </div>
          <p className={` ${states === "lose" && "marginTop"}`}>
            THE HOUSE PICKED
          </p>
        </div>
      </div>
      {states === "win" && <h2>YOU WIN</h2>}
      {states === "lose" && <h2>YOU LOSE</h2>}
      {states === "equal" && null}
      {states && (
        <button
          className={` ${states === "lose" && "redText"}`}
          onClick={handlePlayAgain}
        >
          PLAY AGAIN
        </button>
      )}
    </StyledPlay>
  );
}

export default Play;
