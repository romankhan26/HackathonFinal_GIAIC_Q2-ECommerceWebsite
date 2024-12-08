import ChooseFood from "@/components/choosefoodItem";
import FoodyProduct from "../components/foodyproduct";
import Header from "../components/header";
import Hero from "../components/hero";
import ExtraOrdinary from "@/components/extra-ordinary-taste";
import ProfessionalChefs from "@/components/professionchefs";
import FormOurMenu from "@/components/fromOurMenu";
import Menulistitem from "@/components/menulistitem";
import MeetOurChef from "@/components/meetOurChefs";
import Testimonials from "@/components/testimonials";
import ActiveProcess from "@/components/restaurantActiveProcess";
import { Menulistitem2 } from "@/components/menulistitem";


export default function Home() {
  return (
    <div className="h-fit
     p-8 pb-20 sm:p-2 bg-black">
      <Header />
      <Hero />
      <FoodyProduct />
      <ChooseFood/>
      <ExtraOrdinary/>
      <ProfessionalChefs/>
      <FormOurMenu/>
      <MeetOurChef/>
      <Testimonials/>
      <ActiveProcess/>
    </div>
  );
}
