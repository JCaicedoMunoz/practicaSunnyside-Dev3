import { Testimonial } from "./Testimonial"

import emiliPhoto from "../assets/images/image-emily.jpg"
import thomasPhoto from "../assets/images/image-thomas.jpg"
import jenniePhoto from "../assets/images/image-jennie.jpg"

export const TestimonialContainer = () => {
  return (
    <section className="bg-white pt-16">
      <h2 className="text-center uppercase font-fraunces mb-16 text-grayish-blue">Client Testimonial</h2>
      <div className="lg:flex lg:w-[900px] lg:mx-auto xl:w-[1110px]">
        <Testimonial
        img={emiliPhoto}
        testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
         name="Emily R."
         position="Marketing Director"
        />
        <Testimonial
        img={thomasPhoto}
        testimonial="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
         name="Thomas S."
         position="Chief Operating Officerr"
        />
        <Testimonial
        img={jenniePhoto}
        testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
         name="Jennie F."
         position="Business Owner"
        />
      </div>
    </section>
  )
}
