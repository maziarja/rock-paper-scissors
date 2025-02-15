import styled from "styled-components";
import triangle from "../../public/images/bg-triangle.svg";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Paper from "../ui/Paper";
import Rock from "../ui/Rock";
import Scissors from "../ui/Scissors";

const StyledMain = styled.main`
  display: flex;
  margin-top: 8rem;
  min-height: 38rem;
  justify-content: center;
  & > div {
    position: relative;
  }
  .triangle {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, 40%);
    width: 25rem;
  }
`;

function AppMain() {
  const { dispatch } = useApp();
  const navigate = useNavigate();

  return (
    <StyledMain>
      <div>
        <img className="triangle" src={triangle} alt="triangle icon" />
        <Paper
          position={"absolute"}
          top="5rem"
          left="-14rem"
          onClick={() => {
            navigate("/play");
            dispatch({ type: "userPick", payload: "paper" });
            dispatch({
              type: "pcPick",
              payload: ["paper", "rock", "scissors"].at(
                Math.floor(Math.random() * 3)
              ),
            });
          }}
        />
        <Scissors
          position={"absolute"}
          top="5rem"
          left="5rem"
          onClick={() => {
            navigate("/play");
            dispatch({ type: "userPick", payload: "scissors" });
            dispatch({
              type: "pcPick",
              payload: ["paper", "rock", "scissors"].at(
                Math.floor(Math.random() * 3)
              ),
            });
          }}
        />
        <Rock
          position={"absolute"}
          top="22rem"
          left="-4rem"
          onClick={() => {
            navigate("/play");
            dispatch({ type: "userPick", payload: "rock" });
            dispatch({
              type: "pcPick",
              payload: ["paper", "rock", "scissors"].at(
                Math.floor(Math.random() * 3)
              ),
            });
          }}
        />
      </div>
    </StyledMain>
  );
}

export default AppMain;
