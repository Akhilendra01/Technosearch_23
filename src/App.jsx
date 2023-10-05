import DrawerAppBar from "src/components/Navbar";
import Landing from "src/pages/Landing";
import Layout from "src/pages/Layout";
import About from "src/pages/About";
import Events from "src/pages/Events";
import Footer from "src/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CustomThemeProvider from "src/providers/theme/ThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
