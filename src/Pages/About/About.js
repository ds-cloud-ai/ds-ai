import React from "react";
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegCalendarAlt,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import aboutImage from "../../assets/images/about/about.jpg";
import "../../Share/Style.css";
import Footer from "../../Share/Footer";
import UseData from "../../Hooks/UseData";
import SliderCommon from "../../Share/SliderCommon";
import AboutCard from "./AboutCard";
import PageTitle from "../../Share/PageTitle";

const About = () => {
  const { local, serviceArray } = UseData();
  return (
    <>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <section>
        <div className="container lg:rounded-2xl bg-white dark:bg-[#111111]  px-4 sm:px-5 md:px-10 lg:px-20">
          <div data-aos="fade">
            <div className="py-12">
              {/* Page Title */}
              <h2 className="after-effect after:left-52 mt-12 lg:mt-0 ">
                About Me
              </h2>
              <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                <div className="col-span-12 md:col-span-4">
                  {/* personal images for about page  */}
                  <img
                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                    src={aboutImage}
                    alt=""
                  />
                </div>
                <div className="col-span-12 md:col-span-8 space-y-2.5">
                  {/* About me information */}
                  <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
                      Who am I?
                    </h3>
                    <p className="text-gray-lite  dark:text-color-910 leading-7">
                      A highly skilled AI developer with 10+ years of experience in 
                      developing and deploying production AI systems end to end.

                      My expertise lies in Generative AI, RAG, and Data Science, where I 
                      create scalable, innovative, and impact-driven solutions that enhance 
                      business efficiency and drive growth.
                    </p>
                    <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                      As a business-oriented software engineer, my aim is to help startups 
                      and SMBs turn ideas into production web applications.
                    </p>
                  </div>

                  {/* personal information */}
                  <div>
                    <h3 className="text-4xl font-medium my-5 dark:text-white">
                      Personal Info
                    </h3>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex">
                        <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaMobileAlt />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Phone
                          </p>
                          <h6 className="font-medium dark:text-white">
                            <a
                              className="hover:text-[#FA5252] duration-300 transition"
                            >
                              +1 (920) 309-6223
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-oriange-lite dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaTelegram />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Telegram
                          </p>
                          <h6 className="font-medium dark:text-white">
                            <a
                              className="hover:text-[#FA5252] duration-300 transition"
                              href="https://t.me/dolynster"
                              target="_blank"
                            >
                            @dolynster
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-green dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaEnvelopeOpenText />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Email
                          </p>
                          <h6 className="font-medium dark:text-white">
                            <a
                              className="hover:text-[#FA5252] duration-300 transition"
                              href="mailto:dolynster@gmail.com"
                            >
                              dolynster@gmail.com
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="text-color-50 dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <FaDiscord />
                        </span>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-lite dark:text-color-910">
                            Discord
                          </p>
                          <h6 className="font-medium dark:text-white">
                            <a
                              className="hover:text-[#FA5252] duration-300 transition"
                              href="https://discordapp.com/users/1548830407695273984"
                              target="_blank"
                            >
                            dolynster
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End personal information */}
                </div>
              </div>
            </div>

            <div className="  pb-12 ">
              <h3 className="text-[35px] dark:text-white font-medium pb-5">
                What I do!
              </h3>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                {/* Experience information  */}

                {serviceArray.map((item, i) => (
                  <AboutCard key={i} item={item} local={local} />
                ))}
              </div>
            </div>

            <div>
              {/* Slick Slider call here  */}
              {/* <SliderCommon /> */}
            </div>

            {/* Common Footer call here */}
            <Footer condition={false} bg={"#FFFF"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
