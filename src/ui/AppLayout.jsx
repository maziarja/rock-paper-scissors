import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Rules from "../components/Rules";
import { Outlet, useNavigate } from "react-router-dom";

function Home() {
  const [openRules, setOpenRules] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer setOpenRules={setOpenRules} />
      <Rules setOpenRules={setOpenRules} openRules={openRules} />
    </>
  );
}

export default Home;
