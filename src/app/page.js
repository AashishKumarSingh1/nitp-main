import Gallery from "@/components/landing/gallery";
import SocialHandles from "@/components/landing/socialHandles";
import DirectorCard from "@/components/landing/directorCard";
import VisionMission from "@/components/landing/visionMission";
import Slider from "@/components/landing/slideshow";
import Popbuttons from "@/components/landing/quickLinks";
import Details from "@/components/landing/notice-event-academic";
import Research from "@/components/landing/research";
import { ClubGallery } from "@/components/landing/club_gallery";
import NumbersNitp from "@/components/landing/numbersNitp";
import Imagefooter from "@/components/Imagefooter";
import Footer from "@/components/footer";
import { Topbar } from "@/components/navbar";
import { Middle } from "@/components/navbar";
import { BottomNav } from "@/components/navbar";
// import NewFooter from "@/components/landing/newFooter";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section>
        <Slider />
      </section>
      <section className="">
        <VisionMission />
      </section>
      <section className="">
        <Details />
      </section>
        <section
      id="institute-numbers"
      className="relative scroll-mt-32 py-8 bg-[url('https://i.postimg.cc/bwy2BtkJ/nit-patna-001.jpg')] bg-cover bg-fixed bg-center bg-no-repeat"
    >
        <div className="relative z-10">
          <DirectorCard />
        </div>
      </section>
      <section className="py-6">
        <Popbuttons />
      </section>
      <section className="py-6">
        <NumbersNitp/>
      </section>
      
      <section className="py-6">
        <Research />
      </section>
     
      <section className="py-6">
        <ClubGallery />
      </section>
    </div>
  );
}
