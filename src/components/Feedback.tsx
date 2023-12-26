import { motion, AnimatePresence } from "framer-motion";
// settings
import { transitions } from "../settings/transittion";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

interface Data {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

export interface ITestimonialProps {
  data: Data;
  previous?: Function;
  next?: Function;
  isVisible?: Boolean;
  variants: string;
}



function Testimonial({
  data,
  previous = () => {},
  next = () => {},
  isVisible = true,
  variants,
}: ITestimonialProps) {
  const { mode } = useContext(ThemeContext);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={String(Math.random())}
          variants={transitions[variants]}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="w-[100%] h-auto p-[0px] mt-0 mx-[50px]">
          <h1
            className={`text-3xl font-bold font-serif  shadow-inner shadow-black w-fit ${
              mode === "light" ? "text-red-700" : "text-white"
            }`}
          >
            What Our Clients Says
          </h1>
          </div>
         
          <h1 className="font-bold font-serif text-red-800 text-3xl relative top-[210px] left-[130px] max-sm:left-0 max-sm:top-10">
            Feedback
          </h1>
          <article
            className={
              'mt-0 overflow-auto bg-[url("https://tse4.mm.bing.net/th?id=OIP.n6d-cBDHxre9Ky6RWTv88QHaEK&pid=Api&P=0&h=180)] bg-[length:87%] bg-[center_top_1.6rem] bg-no-repeat md:relative md:isolate md:mt-0 md:flex md:h-full md:w-full md:items-center md:justify-start md:bg-[length:48%] md:bg-testimonial'
            }
          >
            <div className="relative mx-auto max-sm:h-auto mt-14 aspect-square w-[67.5%] md:absolute md:top-[48%] md:right-[11.5%] md:-z-[1] md:mt-0 md:h-[67.5%] md:w-auto md:-translate-y-1/2">
              <img
                alt={data.name}
                aria-hidden="true"
                src={data.image}
                className="max-h-full max-w-full w-[300px] ml-20 rounded-lg object-cover shadow-xl"
              />
              <div className="absolute -bottom-[6%] left-0 right-0 mx-auto flex h-[2.5rem] w-[5rem] overflow-hidden rounded-full border-[1px] border-grayishBlue/50 bg-white shadow-xl hover:border-grayishBlue sm:h-[11%] sm:w-[21%] md:left-[11.5%] md:right-auto [&>button]:flex [&>button]:basis-1/2 [&>button]:items-center [&>button]:justify-center [&>button]:bg-white [&>button]:transition-all [&>button]:duration-500 hover:[&>button]:shadow-xl hover:[&>button]:brightness-75">
                <button aria-label="Previous Slide" onClick={() => previous()}>
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.jeF9EMWhxTT3COBiI1k0QQHaHa&pid=Api&P=0&h=180"
                    alt="Previous"
                    aria-hidden="true"
                    className="h-[0.8rem] sm:h-auto md:h-[0.8rem] lg:h-auto"
                  />
                </button>
                <button aria-label="Next Slide" onClick={() => next()}>
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.SAP94TyTI2kemWJUUj3XyQHaHa&pid=Api&P=0&h=180"
                    alt="Next"
                    aria-hidden="true"
                    className="h-[0.8rem] sm:h-auto md:h-[0.8rem] lg:h-auto"
                  />
                </button>
              </div>
            </div>
            <div className="mx-auto mt-14 w-[86%] bg-[url('/images/pattern-quotes.svg')] bg-[length:19%] bg-top bg-no-repeat pt-6 text-center text-lg leading-6 md:mt-0 md:ml-[11.5%] md:h-[45%] md:w-[45%] md:bg-[left_18%_top] md:pt-[4%] md:text-left md:text-[0.65rem] lg:overflow-auto lg:text-[0.79rem] xl:text-base">
              <q className={`md:text-[2em] xl:leading-[2.725rem]  ${mode === "light"? 'text-black': 'text-white'}`}>
                &nbsp;{data.testimonial}&nbsp;
              </q>
              <div className="mt-4 gap-2 text-base md:mt-10 md:flex md:text-[1.25em]">
                <p className={`font-bold ${mode === 'light' ? "text-black" : "text-white"}`}>{data.name}</p>
                <p className={`${ mode === "light" ? "text-grayishBlue" : 'text-gray-600'}`}>{data.role}</p>
              </div>
            </div>
          </article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Testimonial;
