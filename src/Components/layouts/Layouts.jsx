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
        <link rel="manifest" href="/manifest.json" />
        <link href="/brand.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/brand.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#2088ff" />
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
          <div>Copyright &copy; {new Date().getFullYear()} Samuel Ayegbusi</div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
