import { useEffect, useState } from "react";
import { FaMoon, FaLightbulb } from "react-icons/fa";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import Head from "next/head";
import styles from "./Layouts.module.css";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  const [openNavBarState, setOpenNavBarState] = useState(false);
  const handleNavbar = () => {
    setOpenNavBarState(!openNavBarState);
  };
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    if (theme === "dark") {
      saveTheme("light");
    } else {
      saveTheme("dark");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
    setTheme(localStorage.getItem("theme"));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Samuel Ayegbusi</title>
        <link rel="icon" href="/brand.png" />
      </Head>
      <div>
        <Navbar navbarState={openNavBarState} handleNavbar={handleNavbar} />
      </div>
      <main className={styles.main}>{children}</main>
      <div>
        <button onClick={switchTheme} className={styles.theme}>
          {theme === "light" ? (
            <FaMoon size={"2rem"} color={"#fff"} />
          ) : (
            <FaLightbulb size={"2rem"} color={"#fff"} />
          )}
        </button>

        <ScrollToTop />

        <footer className={styles.footer}>
          <div>
            <div>Made by Samuel Ayegbusi</div>
            Copyright &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
