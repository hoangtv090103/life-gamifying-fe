import Header from "../components/Header";
import Footer from "../components/Footer";
import Habit from "../components/Habit";

const Main: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Habit />

      <Footer />
    </div>
  );
};

export default Main;
