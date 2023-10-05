import React from 'react'
import DrawerAppBar from "../components/Navbar";
import About from "./About";
import Landing from "./Landing";
import Footer from "../components/Footer";
function Layout() {
  return (
    <>
      {/* <CustomThemeProvider> */}
        <DrawerAppBar />
        <Landing />
        <About />
        <Footer/>
      {/* </CustomThemeProvider> */}
    </>
  )
}

export default Layout