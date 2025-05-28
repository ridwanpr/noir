import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
