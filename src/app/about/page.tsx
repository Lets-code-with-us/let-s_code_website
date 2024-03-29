import React from "react";
import { AnimatedTooltipPreview } from "@/components/component/Developers";
import {AboutPageOne} from "@/components/component/About";
import Image from "next/image";

function page() {
  return (
    <>
   <section className="bg-slate-50">

      <div className="flex flex-col items-center justify-center text-4xl ">
        <div className="bg-cover bg-center">
          <Image
          loading='eager'
          width={2200}
          height={2200}
            className="blur-sm"
            src="https://www.lets-code.co.in/images/banner/9.jpg"
            alt=""
            />
        </div>
        <h1 className="absolute text-4xl font-bold">About Company</h1>
      </div>
      <div>
        <AboutPageOne/>
      </div>
     
      <div className="mt-20 pb-20">
        <AnimatedTooltipPreview />
      </div>
            </section>
    </>
  );
}

export default page;
