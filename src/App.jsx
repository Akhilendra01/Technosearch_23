import DrawerAppBar from "src/components/Navbar";
import Landing from "src/pages/Landing";
import About from "src/pages/About";
import Footer from "src/components/Footer";
// import CustomThemeProvider from "src/providers/theme/ThemeProvider";

function App() {
  return (
    <>
      {/* <CustomThemeProvider> */}
        <DrawerAppBar />
        <Landing />
        <About />
        <Footer/>
      {/* </CustomThemeProvider> */}
    </>
  );
}

export default App;
