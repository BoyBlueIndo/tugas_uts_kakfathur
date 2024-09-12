import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { InfoSelection } from "./components/info-selection1";
import { InfoSelection2 } from "./components/info-selection2";
import { Mockup } from "./components/mockup";
import { Review } from "./components/review";

export default function Home() {
  return (
    // relative min-h-screen bg-[url('/images/background2.png')] bg-cover bg-center
    <div>
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-purple-to-transparent z-10" /> */}

      {/* Content */}
      {/* relative z-20 */}
      <div className="relative min-h-screen bg-[url('/images/background2.png')] bg-cover bg-center">
        <Navbar />
        <Hero />
      </div>
      <Mockup />
      <InfoSelection />
      <InfoSelection2 />
      <Review />
      <Footer />
    </div>
  );
}
