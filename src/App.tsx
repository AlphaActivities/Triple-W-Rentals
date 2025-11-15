import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FleetShowcase from './components/FleetShowcase';
import LuxuryInteriors from './components/LuxuryInteriors';
import WhyPeopleRentRVs from './components/WhyPeopleRentRVs';
import WhyChooseUs from './components/WhyChooseUs';
import ExperienceStrip from './components/ExperienceStrip';
import BookingForm from './components/BookingForm';
import ReviewsCarousel from './components/ReviewsCarousel';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <WhyPeopleRentRVs />
      <FleetShowcase />
      <LuxuryInteriors />
      <WhyChooseUs />
      <ExperienceStrip />
      <BookingForm />
      <ReviewsCarousel />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;
