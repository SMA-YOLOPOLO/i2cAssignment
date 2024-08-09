import "./App.css";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import RegistrationForm from "./Sections/RegistrationForm";
import ClientSection from "./Sections/ClientSection";
import Perks from "./Sections/PerksSection/Perks";
import LandingPage from "./Sections/LandingPage";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <LandingPage />
        <Perks />
        <ClientSection />
        <RegistrationForm />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
