import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Rules from "../components/Rules";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

function Home() {
  const [openRules, setOpenRules] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const navigationEntries = performance.getEntriesByType("navigation");
    if (
      navigationEntries.length > 0 &&
      navigationEntries[0].type === "reload"
    ) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <StyledHome>
      <Header />
      <Outlet />
      <Footer setOpenRules={setOpenRules} />
      <Rules setOpenRules={setOpenRules} openRules={openRules} />
    </StyledHome>
  );
}

export default Home;
