import React from "react";
import { TestimonialCard } from "@/components/component/TestonialCard";
function Testonial() {
  return (
    <>
    <div>
      <h1 className="text-6xl pb-40 text-center font-bold">Testimonials</h1>
    </div>
    <div className="h-[300px] m-auto overflow-hidden relative w-auto">
      <div className="flex w-[calc(250px*25)] animate-scroll ">
        <TestimonialCard
          title="I want to express my deepest gratitude to each and every member of this Let's Code 🤗 community (Avinash sir especially)."
          content="Kuldeep Panwar"
        />
        <TestimonialCard title="Thank you sir for providing with all that essential materials and for actively providing us the materials and updates with internship opportunities. Your efforts were very helpful and worth praising." content="Saurabh Yadav " />

        <TestimonialCard title="Realy very helpful resources. Through this i am able to boost my preparation." content="Abhijeet Singh" />
        <TestimonialCard title="Sir you are really a great help for us , sir make any site which can provide these sources on the basis of the companies/organization like gfg, codewithharry,etc." content="AYUSH PRIYADARSHI " />
        <TestimonialCard title="It is very helpful for us; all study material, resources, and job openings are found in one place. I'm very thankful to all who can do hard work for us." content="Prachi kesharwani" />
        <TestimonialCard title="It's good posting the jobs or internships daily it will help for all those who is needed." content="Vikas " />
        <TestimonialCard title="A Work of Let's Code is very helpful who are Freshers or Job Seeker. I wish Let's Code Grow More." content="Tejas Arun Jaybhaye" />
        {/* <TestimonialCard title="" content="" />
        <TestimonialCard title="" content="" />
        <TestimonialCard title="" content="" />
        <TestimonialCard title="" content="" />
        <TestimonialCard title="" content="" />
        <TestimonialCard title="" content="" /> */}
      </div>
    </div>
    </>
  );
}

export default Testonial;
