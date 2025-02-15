import styled from "styled-components";

function Footer({ setOpenRules }) {
  const StyledFooter = styled.div`
    & > button {
      display: flex;
      color: white;
      padding: 1rem 3.4rem;
      font-size: 1.6rem;
      margin: 0 auto;
      font-weight: 500;
      letter-spacing: 1.6px;
      border: 1.5px solid white;
      background-color: inherit;
      border-radius: 0.7rem;
      cursor: pointer;
      @media (min-width: 43.74em) {
        margin: unset;
        margin-left: auto;
        margin-right: 4rem;
      }
    }
  `;
  return (
    <StyledFooter>
      <button onClick={() => setOpenRules(true)}>RULES</button>
    </StyledFooter>
  );
}

export default Footer;
