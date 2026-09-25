import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="bg-white">
      <div className=" bg-white fixed top-0 left-0 w-full h-15 md:h-20 z-10">
        <Navbar />
      </div>
      {/* container utama */}
      <div className="pt-15 md:pt-20">
        {/* // Hero Section */}
        <div className="bg-[#F2F3FF]">
          <div className="container h-full mx-auto justify-between items-center px-6 py-12 ">
            <div className="flex items-center w-fit gap-2.5 px-3.5 py-1.5 rounded-full bg-white text-black shadow-sm">
              <div className="flex">
                <div className="h-2.5 w-2.5  bg-[#57DFFE] rounded-full"></div>
                <div className="h-2.5 w-2.5  bg-[#00687A] rounded-full"></div>
              </div>
              <div className="text-[11px] md:text-[16px]">
                SPORT TECHNOLOGY{" "}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 mt-4">
              {/* container text */}
              <div className="grid grid-cols-1 ">
                <div className=" grid font-bold md:text-[56px] text-[28px] md:gap-0 leading-none">
                  <div>Train Smarter.</div>
                  <div className="text-[#2563EB]">Perform Better.</div>
                </div>
                <div className="text-[15px] md:text-[18px] mt-2">
                  VeloCore is a sport technology company that combines sports,
                  data, and technology to help athletes and active individuals
                  improve their performance.
                </div>
                <div className="flex flex-col gap-2 md:flex-row mt-4 ">
                  <Button
                    variant="outline"
                    className="bg-[#2563EB] text-white border-0 hover:text-white hover:bg-blue-400 font-semibold text-[15px] px-6 py-4 gap-2 flex justify-items-center"
                  >
                    View Our Services
                    <img src="/IconRightArrow.svg" alt="IconRightArrow" />
                  </Button>
                  <Button className="bg-[#FFFFFF] shadow-sm text-[#131B2E] hover:bg-gray-200 font-semibold text-[15px] px-6 py-4">
                    Learn About VeloCore
                  </Button>
                </div>
                <div className="hidden md:flex md:justify-between bg-white mt-6 p-4 rounded-sm">
                  <div className="grid grid-cols-1">
                    <div className="text-[11px] text-[#737686] font-bold">
                      SAMPLE FREQUENCY
                    </div>
                    <div className="flex gap-1 items-baseline">
                      <div className="text-[20px] font-bold">2.4</div>
                      <div className="text-[#2563EB] text-[12px] font-bold">
                        kHz
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div className="text-[11px] text-[#737686] font-bold">
                      BIODATA CHANNELS
                    </div>
                    <div className="flex gap-1 items-baseline">
                      <div className="text-[20px] font-bold">18</div>
                      <div className="text-[#2563EB] text-[12px] font-bold">
                        AXIS
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 ">
                    <div className="text-[11px] text-[#737686] font-bold">
                      ALGO LATENCY
                    </div>
                    <div className="flex gap-1 items-baseline">
                      <div className="text-[20px] font-bold">&lt; 0.8</div>
                      <div className="text-[#2563EB] text-[12px] font-bold">
                        ms
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* container foto */}
              <div className="flex relative md:mt-0 mt-4 justify-center">
                <img
                  src="/Cyclist.png"
                  alt="Cyclist"
                  className=" md:w-[80%] w-full h-auto "
                />
                <div className="bg-gray-500/90 absolute bottom-0 md:w-[80%] w-full text-white p-3 flex gap-2 items-center font-semibold">
                  <div className="h-2.5 w-2.5 bg-[#57DFFE] rounded-full"></div>
                  JAKARTA LABS // STREAM 01
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // Section 1*/}
        <div className="container h-full mx-auto justify-between items-center py-12 px-6 bg-white">
          <div className=" flex flex-col gap-2 md:items-center">
            <div className="text-[11px] md:text-[16px] text-[#00687A]">
              TELEMETRY & BIOMECHANICS
            </div>
            <div className="md:text-[40px] md:font-bold text-[20px] font-semibold">
              Technology Built Around Performance
            </div>
            <div className="text-[15px] text-[#434655]">
              VeloCore is a sport technology company based in Jakarta,
              Indonesia, focused on building digital solutions for athletes,
              coaches, and active individuals.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-3">
            <div className="flex flex-col bg-[#F2F3FF] p-4 rounded-[8px]">
              <div className="text-[12px] text-[#00687A]">ESTABLISHED</div>
              <div className="text-[32px] text-[#004AC6]">2022</div>
              <div className="text-[13px]">Founded in Jakarta</div>
            </div>
            <div className="flex flex-col bg-[#F2F3FF] p-4 rounded-[8px]">
              <div className="text-[12px] text-[#00687A]">ECOSYSTEM</div>
              <div className="text-[32px] text-[#004AC6]">5,000+</div>
              <div className="text-[13px]">Athletes Reached</div>
            </div>
            <div className="flex flex-col bg-[#F2F3FF] p-4 rounded-[8px]">
              <div className="text-[12px] text-[#00687A]">DEPLOYMENT</div>
              <div className="text-[32px] text-[#004AC6]">Southeast Asia</div>
              <div className="text-[13px]">Regional Footprint</div>
            </div>
          </div>
        </div>

        {/* // Section 2*/}
        <div className="bg-[#F2F3FF]">
          <div className="container h-full mx-auto justify-between items-center py-12 px-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid grid-col-1 gap-3 bg-white p-6">
                <img src="IconFlag.svg" alt="IconFlag" className="" />
                <div className="">
                  <div className="text-[11px] text-[#737686]">
                    OUR CORE MISSION
                  </div>
                  <div className="text-[20px] font-semibold">
                    Measurable Athletic Precision
                  </div>
                  <div className="text-[15px] text-[#737686]">
                    To make sports performance more measurable, accessible, and
                    meaningful through technology and data.
                  </div>
                </div>
              </div>
              <div className="grid grid-col-1 gap-3 bg-white p-6">
                <img src="IconVision.svg" alt="IconVision" className="" />
                <div className="">
                  <div className="text-[11px] text-[#737686]">
                    OUR LONG-TERM VISION
                  </div>
                  <div className="text-[20px] font-semibold">
                    Global Human Potential
                  </div>
                  <div className="text-[15px] text-[#737686]">
                    To empower people around the world to move better, train
                    smarter, and perform at their best.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // Section 3*/}
        <div className="bg-white">
          <div className="container h-full mx-auto justify-between items-center py-12 px-6 ">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2 items-center">
                <div className="text-[11px] md:text-[16px] text-[#2563EB]">
                  MODULAR ARCHITECTURE
                </div>
                <div className="text-[20px] md:text-[40px] font-semibold">
                  Technology for Every Stage of Performance
                </div>
              </div>
              <div className=" grid md:grid-cols-4 gap-4">
                <div className="grid grid-cols-1 bg-[#F2F3FF] p-4 gap-2 rounded-sm">
                  <div className="flex flex-row justify-between bg-[#F2F3FF]">
                    <div className="flex flex-row gap-1 whitespace-nowrap items-center">
                      <img
                        src="IconTrack.svg"
                        alt="IconTrack"
                        className="h-4 w-4"
                      />
                      <div className="text-[20px] font-semibold">
                        VeloCore Track
                      </div>
                    </div>
                    <div className="text-[12px]">MOD_01</div>
                  </div>
                  <div className="text-[15px]">
                    Track workouts, activities, and performance metrics in one
                    simple platform.
                  </div>
                  <div className="flex flex-row gap-2 text-[15px] items-center text-[#2563EB] font-semibold">
                    Explore VeloCore Track
                    <img
                      src="IconArrowRightBlue.svg"
                      alt="IconArrowRightBlue"
                      className="h-2.5 w-2.5"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 bg-[#F2F3FF] p-4 gap-2 rounded-sm">
                  <div className="flex flex-row justify-between bg-[#F2F3FF]">
                    <div className="flex flex-row gap-1 whitespace-nowrap items-center">
                      <img
                        src="IconCoach.svg"
                        alt="IconCoach"
                        className="h-4 w-4"
                      />
                      <div className="text-[20px] font-semibold">
                        VeloCore Coach
                      </div>
                    </div>
                    <div className="text-[12px]">MOD_02</div>
                  </div>
                  <div className="text-[15px]">
                    Plan, manage, and monitor athlete training programs from one
                    platform.
                  </div>
                  <div className="flex flex-row gap-2 text-[15px] items-center text-[#2563EB] font-semibold">
                    Explore VeloCore Coach
                    <img
                      src="IconArrowRightBlue.svg"
                      alt="IconArrowRightBlue"
                      className="h-2.5 w-2.5"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 bg-[#F2F3FF] p-4 gap-2 rounded-sm">
                  <div className="flex flex-row justify-between bg-[#F2F3FF]">
                    <div className="flex flex-row gap-1 whitespace-nowrap items-center">
                      <img
                        src="IconInsight.svg"
                        alt="IconInsight"
                        className="h-4 w-4"
                      />
                      <div className="text-[20px] font-semibold">
                        VeloCore Insights
                      </div>
                    </div>
                    <div className="text-[12px]">MOD_03</div>
                  </div>
                  <div className="text-[15px]">
                    Turn training data into meaningful insights that support
                    better performance decisions.
                  </div>
                  <div className="flex flex-row gap-2 text-[15px] items-center text-[#2563EB] font-semibold">
                    Explore VeloCore Insights
                    <img
                      src="IconArrowRightBlue.svg"
                      alt="IconArrowRightBlue"
                      className="h-2.5 w-2.5"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 bg-[#F2F3FF] p-4 gap-2 rounded-sm">
                  <div className="flex flex-row justify-between bg-[#F2F3FF]">
                    <div className="flex flex-row gap-1 whitespace-nowrap items-center">
                      <img
                        src="IconCustom.svg"
                        alt="IconCustom"
                        className="h-4 w-4"
                      />
                      <div className="text-[20px] font-semibold">
                        VeloCore Custom
                      </div>
                    </div>
                    <div className="text-[12px]">MOD_04</div>
                  </div>
                  <div className="text-[15px]">
                    Custom technology solutions built for sports organizations
                    and businesses.
                  </div>
                  <div className="flex flex-row gap-2 text-[15px] items-center text-[#2563EB] font-semibold">
                    Explore VeloCore Custom
                    <img
                      src="IconArrowRightBlue.svg"
                      alt="IconArrowRightBlue"
                      className="h-2.5 w-2.5"
                    />
                  </div>
                </div>
              </div>
              <Button className="bg-[#FFFFFF] shadow-sm text-[#131B2E] hover:bg-gray-200 font-semibold text-[15px] px-6 py-4 flex gap-2">
                Explore All Services
                <img src="IconExplore.svg" alt="IconExplore" />
              </Button>
            </div>
          </div>
        </div>

        {/* // Section 4*/}
        <div className="bg-[#283044]">
          <div className="container h-full mx-auto justify-between items-center py-12 px-6 ">
            <div className="grid md:grid-cols-2 gap-6 justify-center">
              {/* container 1 */}
              <div className=" flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div className="h-1.5 w-1.5  bg-[#ACEDFF] rounded-full"></div>
                  <div className="text-[11px] md:text-[16px] text-[#ACEDFF]">
                    BIOMETRIC INTELLIGENCE
                  </div>
                </div>

                <div className="text-[20px] md:text-[40px] font-bold text-white">
                  Turn Performance Data Into Better Decisions
                </div>
                <div className="text-[15px] md:text-[25px] text-[#DAE2FD]">
                  VeloCore Insights transforms training and performance data
                  into clear analytics that help athletes and coaches understand
                  trends and make better decisions.
                </div>
              </div>
              {/* container 2 */}
              <div className=" grid bg-[#131B2E] p-4 gap-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <div className="leading-none">
                    <div className="text-[#ACEDFF] text-[11px]">
                      ATHLETE PROFILE
                    </div>
                    <div className="text-white text-[20px] font-bold">
                      Pro-Peloton Series
                    </div>
                  </div>
                  <div className="px-2 py-1 text-[12px] leading-none text-[#ACEDFF] bg-[#EAEDFF]/10 flex items-center">
                    LIVE TELEMETRY
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#283044]/60">
                    <div className="text-[13px] text-[#DAE2FD]">
                      Performance Score
                    </div>
                    <div className="flex gap-1">
                      <div className="text-white text-[32px]">94.8</div>
                      <div className="text-[#ACEDFF] text-[12px] ">+6.2%</div>
                    </div>
                    <div className="text-3 text-[#4CD7F6]">
                      7-Day Trajectory
                    </div>
                  </div>

                  <div className="p-3 bg-[#283044]/60">
                    <div className="text-[13px] text-[#DAE2FD]">
                      Training Load{" "}
                    </div>
                    <div className="text-white text-[32px]">Optimal</div>
                    <div className="text-3 text-[#4CD7F6]">
                      Zone 4 (Threshold)
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <div className="flex justify-between text-[12px] text-[#DAE2FD]">
                    <div>WEEKLY TARGET LOAD</div>
                    <div>84% COMPLETE</div>
                  </div>
                  <img
                    src="ProgressBar.svg"
                    alt="ProgressBar"
                    className="w-full"
                  />
                  <div>
                    <div className="flex justify-between text-[12px] text-[#DAE2FD]">
                      <div>POWER (W) & HR FLUX</div>
                      <div className="text-[#ACEDFF]">PEAK 980W</div>
                    </div>
                    <img src="Graph.svg" alt="Graph" className="w-full" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-[#283044]/60">
                    <div className="text-[13px] text-[#DAE2FD]">
                      VO2 Max Target{" "}
                    </div>
                    <div className="text-white text-[32px]">62.4</div>
                    <div className="text-3 text-[#4CD7F6]">ml/kg/min</div>
                  </div>
                  <div className="p-3 bg-[#283044]/60">
                    <div className="text-[13px] text-[#DAE2FD]">
                      Recovery Index
                    </div>
                    <div className="text-white text-[32px]">91%</div>
                    <div className="text-3 text-[#4CD7F6]">
                      Ready for Session
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // Section 5*/}
        <div className="bg-[#EAEDFF]">
          <div className="container h-full mx-auto justify-between items-center py-12 px-6 ">
            <div className="grid gap-6">
              {/* container 1 */}
              <div className="grid grid-cols-1 gap-1">
                <div className="text-[11px] md:text-[16px] text-[#00687A]">
                  FIELD VALIDATION
                </div>
                <div className="text-[20px] md:text-[40px] font-semibold">
                  Trusted by People Who Train to Perform
                </div>
              </div>
              {/* container 2 */}
              <div className="grid md:grid-cols-3 gap-3">
                <div className="flex flex-col p-4 gap-4 rounded-xl shadow-sm/50 bg-white">
                  <div className="flex grap-2">
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                  </div>
                  <div className="italic text-justify text-[15px]">
                    "VeloCore Track gives our athletes a much clearer picture of
                    their training progress. The data is simple to understand
                    and easy to use."
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <div className=" font-bold p-3 bg-[#00687A] rounded-full text-white tex-[14px]">
                      AM
                    </div>
                    <div className="leading-none">
                      <div className="text-[15px] font-bold text-[#131B2E]">
                        Alex Morgan
                      </div>
                      <div className="text-[13px] text-[#434655]">
                        Head Coach — Apex Cycling Team
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 gap-4 rounded-xl shadow-sm/50 bg-white">
                  <div className="flex grap-2">
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                  </div>
                  <div className="italic text-justify text-[15px]">
                    "VeloCore Coach has simplified the way we manage training
                    programs. Our coaches can spend less time organizing data
                    and more time working with athletes."
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <div className=" font-bold p-3 bg-[#00687A] rounded-full text-white tex-[14px]">
                      SW
                    </div>
                    <div className="leading-none">
                      <div className="text-[15px] font-bold text-[#131B2E]">
                        Sarah Williams
                      </div>
                      <div className="text-[13px] text-[#434655]">
                        Performance Director — Motion Athletics
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 gap-4 rounded-xl shadow-sm/50 bg-white">
                  <div className="flex grap-2">
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                    <img src="IconGreenStar.svg" alt="IconGreenStar" />
                  </div>
                  <div className="italic text-justify text-[15px]">
                    "VeloCore Insights helps us turn large amounts of
                    performance data into useful information."
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <div className=" font-bold p-3 bg-[#00687A] rounded-full text-white tex-[14px] ">
                      MC
                    </div>
                    <div className="leading-none">
                      <div className="text-[15px] font-bold text-[#131B2E]">
                        Michael Chen
                      </div>
                      <div className="text-[13px] text-[#434655]">
                        Sports Performance Analyst — Elevate Sports
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // Section 6*/}
        <div className="bg-white">
          <div className="container h-full mx-auto justify-between items-center pt-12 pb-12 px-6 ">
            <div className="p-4 bg-[#283044] rounded-lg md:grid md:justify-items-center">
              <div>
                <div className="flex gap-1 items-center">
                  <img src="IconStartToday.svg" alt="IconStartToday" />
                  <div className="text-[#ACEDFF] md:text-[16px] text-[12px]">
                    START TODAY
                  </div>
                </div>
                <div className=" grid font-bold md:text-[56px] text-[28px] md:gap-0 text-white">
                  Ready to Train Smarter?
                </div>
                <div className="text-[15px] md:text-[18px] mt-2 text-[#DAE2FD]">
                  Explore how VeloCore can help you turn performance data into
                  meaningful progress.
                </div>
              </div>

              <div className="flex flex-col gap-2 md:flex-row mt-4 ">
                <Button
                  variant="outline"
                  className="bg-[#2563EB] text-white border-0 hover:text-white hover:bg-blue-400 font-semibold text-[15px] px-6 py-4 gap-2 flex justify-items-center"
                >
                  Explore Services
                  <img src="/IconRightArrow.svg" alt="IconRightArrow" />
                </Button>
                <Button className="bg-[#EAEDFF]/10 shadow-sm text-white hover:bg-gray-400/60 font-semibold text-[15px] px-6 py-4">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
