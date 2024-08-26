import Navbar from "@/components/Navbar";
import Banner from "@/components/banner";
import Experience from "@/components/experience";
import WhyBuzzvel from "@/components/whyBuzzvel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/grid";
import Project from "@/components/project";
import CareerTimeline from "@/components/careerCards";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Experience />
      <WhyBuzzvel />
      <Project />
      <CareerTimeline />
      <Footer />
    </>
  );
}
