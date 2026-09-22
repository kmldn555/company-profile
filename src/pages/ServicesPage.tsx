import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ServicesPage() {
  return (
    <div className="bg-white">
      <div className=" bg-white fixed top-0 left-0 w-full h-15 md:h-20 z-10">
        <Navbar />
      </div>
      {/* container utama */}
      <div className="pt-15 md:pt-20 border border-black">
        {/* Header Section */}
        <div className="container h-full mx-auto justify-between items-center px-6 py-12 bg-[#F2F3FF]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center w-fit gap-1.5 px-1.5 py-1 rounded-full bg-white text-black shadow-sm">
              <div className="h-2.5 w-2.5  bg-[#00687A] rounded-full"></div>
              <div className="text-[11px] md:text-[16px] text-[#00687A]">
                ENGINEERING CHAMPIONS
              </div>
            </div>
            <div className="text-[36px] md:text-[40px] text-[#131B2E] leading-none font-bold">
              Technology for Better Performance
            </div>
            <div className="text-[15px] md:text-[18px] mt-2">
              VeloCore is a sport technology company that combines sports, data,
              and technology to help athletes and active individuals improve
              their performance.
            </div>
          </div>
        </div>
        {/* Billing Section */}
        <div className="container h-full mx-auto justify-between items-center px-6 md:px-0 pb-12 pt-8 bg-white">
          <div className="flex flex-col gap-8">
            <div className="md:grid justify-center">
              <div className="grid grid-cols-2 bg-[#EAEDFF] p-2 rounded-lg md:gap-2">
                <div className="bg-white flex justify-center rounded-lg text-[#004AC6] font-semibold">
                  Monthly Billing
                </div>
                <div className=" flex justify-center font-semibold">
                  Annual Save 20%
                </div>
              </div>
            </div>
            {/* container card */}
            <div className="md:grid md:grid-cols-4 grid gap-6 md:px-4">
              {/* Card 1 */}
              <div className="flex flex-col bg-[#F2F3FF] shadow-sm/30 rounded-sm">
                {/* container image */}
                <div className="relative">
                  <div className="flex absolute w-full top-2">
                    <div className="text-[11px] text-white font-semibold bg-[#004AC6] px-2 py-1 rounded-sm absolute left-2">
                      PERFORMANCE TRACKING
                    </div>
                    <div className="text-[11px] text-white font-semibold bg-[#283044] px-2 py-1 rounded-sm absolute right-2">
                      MOD // TRK-01
                    </div>
                  </div>
                  <img
                    src="ImageVeloTrack.svg"
                    alt="ImageVeloTrack"
                    className="rounded-t-sm w-full"
                  />
                </div>
                {/* container text */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div>
                    <div className="text-[20px] text-[#131B2E]">
                      VeloCore Track
                    </div>
                    <div className="text-[15px] text-[#131B2E]">
                      Track workouts, activities, and performance metrics in one
                      simple platform.
                    </div>
                  </div>
                  <div className="flex items-baseline gap-0">
                    <div className="text-[32px] text-[#004AC6] font-bold">
                      $9.99
                    </div>
                    <div className="text-[13px] text-[#004AC6]">/ month </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[11px] text-[#737686]">
                      INCLUDED CAPABILITIES
                    </div>
                    <div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Workout tracking & automated session logging{" "}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          High-precision performance metrics & load score{" "}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Comprehensive multi-season activity history{" "}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Weekly progress monitoring & recovery alerts{" "}
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Personalized athletic performance dashboard{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid p-3 bg-[#EAEDFF] gap-3 rounded-sm">
                    <div className="justify-items-start">
                      <img src="IconFiveStar.svg" alt="IconFiveStar" />
                    </div>
                    <div>
                      <div className="text-[13px] text-[#131B2E]">
                        "VeloCore Track gives our athletes a much clearer
                        picture of their training progress."
                      </div>
                      <div className="text-[11px] text-[#00687A] font-bold">
                        — COACH ALEX MORGAN
                      </div>
                    </div>
                  </div>
                  <div className="md:mt-auto flex bg-[#004AC6] px-4 py-3 justify-center gap-2 rounded-sm ">
                    <div className="text-[15px] text-white font-bold">
                      Start Tracking
                    </div>
                    <img src="IconRightArrow.svg" alt="IconRightArrow" />
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col bg-[#F2F3FF] shadow-sm/30 rounded-sm">
                {/* container image */}
                <div className="relative">
                  <div className="flex absolute w-full top-2">
                    <div className="text-[11px] text-white font-semibold bg-[#004AC6] px-2 py-1 rounded-sm absolute left-2 ">
                      TRAINING MANAGEMENT
                    </div>
                    <div className="text-[11px] text-white font-semibold bg-[#283044] px-2 py-1 rounded-sm absolute right-2">
                      MOD // CCH-02
                    </div>
                  </div>
                  <img
                    src="ImagVeloCoach.svg"
                    alt="ImagVeloCoach"
                    className="rounded-t-sm w-full"
                  />
                </div>
                {/* container text */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div>
                    <div className="text-[20px] text-[#131B2E]">
                      VeloCore Coach
                    </div>
                    <div className="text-[15px] text-[#131B2E]">
                      Plan, manage, and monitor athlete training programs from
                      one platform.
                    </div>
                  </div>
                  <div className="flex items-baseline gap-0">
                    <div className="text-[32px] text-[#004AC6] font-bold">
                      $29.99
                    </div>
                    <div className="text-[13px] text-[#004AC6]">/ month </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[11px] text-[#737686]">
                      INCLUDED CAPABILITIES
                    </div>
                    <div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Interactive training plan creation & periodization
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Centralized athlete management & health status
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Real-time progress monitoring & acute load indices
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Automated workout scheduling & remote push alerts
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Multi-roster coach telemetry dashboard
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid p-3 bg-[#EAEDFF] gap-3 rounded-sm">
                    <div className="justify-items-start">
                      <img src="IconFiveStar.svg" alt="IconFiveStar" />
                    </div>
                    <div className="">
                      <div className="text-[13px] text-[#131B2E]">
                        "VeloCore Coach has simplified the way we manage
                        training programs."
                      </div>
                      <div className="text-[11px] text-[#00687A] font-bold">
                        — SARAH WILLIAMS, PERFORMANCE DIRECTOR
                      </div>
                    </div>
                  </div>
                  <div className="md:mt-auto flex bg-[#004AC6] px-4 py-3 justify-center gap-2 rounded-sm">
                    <div className="text-[15px] text-white font-bold">
                      Explore VeloCore Coach
                    </div>
                    <img src="IconRightArrow.svg" alt="IconRightArrow" />
                  </div>
                </div>
              </div>

              {/* card 3 */}
              <div className="flex flex-col bg-[#F2F3FF] shadow-sm/30 rounded-sm">
                {/* container image */}
                <div className="relative">
                  <div className="flex absolute w-full top-2">
                    <div className="text-[11px] text-white font-semibold bg-[#004AC6] px-2 py-1 rounded-sm absolute left-2">
                      PERFORMANCE ANALYTICS
                    </div>
                    <div className="text-[11px] text-white font-semibold bg-[#283044] px-2 py-1 rounded-sm absolute right-2">
                      MOD // INS-03
                    </div>
                  </div>
                  <img
                    src="ImageVeloAnalytics.svg"
                    alt="ImageVeloAnalytics"
                    className="rounded-t-sm w-full"
                  />
                </div>
                {/* container text */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div>
                    <div className="text-[20px] text-[#131B2E]">
                      VeloCore Insights
                    </div>
                    <div className="text-[15px] text-[#131B2E]">
                      Turn training data into meaningful insights that support
                      better performance decisions.
                    </div>
                  </div>
                  <div className="flex items-baseline gap-0">
                    <div className="text-[32px] text-[#004AC6] font-bold">
                      $19.99
                    </div>
                    <div className="text-[13px] text-[#004AC6]">/ month </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[11px] text-[#737686]">
                      INCLUDED CAPABILITIES
                    </div>
                    <div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Deep multi-variable performance analytics
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Seasonal training fatigue and adaptation trends
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Executive summary & athlete progress reports
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          Kinetic data visualization & exportable diagrams
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#131B2E]">
                          AI-assisted strategic performance insights
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid p-3 bg-[#EAEDFF] gap-3 rounded-sm">
                    <div className="justify-items-start">
                      <img src="IconFiveStar.svg" alt="IconFiveStar" />
                    </div>
                    <div>
                      <div className="text-[13px] text-[#131B2E]">
                        "VeloCore Insights helps us turn large amounts of
                        performance data into useful information."
                      </div>
                      <div className="text-[11px] text-[#00687A] font-bold">
                        — MICHAEL CHEN
                      </div>
                    </div>
                  </div>
                  <div className="md:mt-auto flex bg-[#004AC6] px-4 py-3 justify-center gap-2 rounded-sm">
                    <div className="text-[15px] text-white font-bold">
                      Explore Analytics
                    </div>
                    <img src="IconRightArrow.svg" alt="IconRightArrow" />
                  </div>
                </div>
              </div>

              {/* card 4 */}
              <div className="flex flex-col bg-[#131B2E] shadow-sm/30 rounded-sm">
                {/* container image */}
                <div className="relative">
                  <div className="flex absolute w-full top-2">
                    <div className="text-[11px] text-white font-semibold bg-[#004AC6] px-2 py-1 rounded-sm absolute left-2">
                      DIGITAL SPORTS SOLUTIONS
                    </div>
                    <div className="text-[11px] text-white font-semibold bg-[#283044] px-2 py-1 rounded-sm absolute right-2">
                      ENT // CST-04
                    </div>
                  </div>
                  <img
                    src="ImageVeloCustom.svg"
                    alt="ImageVeloCustom"
                    className="rounded-t-sm"
                  />
                </div>
                {/* container text */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div>
                    <div className="flex gap-2">
                      <div className="text-[20px] text-white font-semibold">
                        VeloCore Custom
                      </div>
                      <div className="text-[11px] bg-[#00687A] text-[#ACEDFF] items-center p-1.5">
                        TAILORED
                      </div>
                    </div>

                    <div className="text-[15px] text-white">
                      Custom technology solutions built for sports organizations
                      and businesses.
                    </div>
                  </div>
                  <div className="flex items-baseline gap-0">
                    <div className="text-[28px] text-[#ACEDFF] font-bold">
                      Custom Pricing
                    </div>
                    <div className="text-[13px] text-white">/ tailored </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[11px] text-white">
                      INCLUDED CAPABILITIES
                    </div>
                    <div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#EEF0FF]">
                          Custom web applications tailored to team ops
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#EEF0FF]">
                          Proprietary mobile applications (iOS & Android)
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#EEF0FF]">
                          Sports wearable and telematics data integration
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#EEF0FF]">
                          Secure enterprise API development & streaming
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <div>
                          <img src="CheckListBlue.svg" alt="CheckListBlue" />
                        </div>
                        <div className="text-[13px] text-[#EEF0FF]">
                          Federation stadium & executive dashboard development
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid p-3 bg-[#DAE2FD]/10 gap-3 rounded-sm">
                    <div className="justify-items-start">
                      <img src="IconFiveStar.svg" alt="IconFiveStar" />
                    </div>
                    <div>
                      <div className="text-[13px] text-[#EEF0FF]">
                        "Tailored enterprise solutions built specifically for
                        federation-level telemetry."
                      </div>
                      <div className="text-[11px] text-[#ACEDFF] font-bold">
                        — JAKARTA SPORTS TECH ADVISORY
                      </div>
                    </div>
                  </div>
                  <div className="md:mt-auto flex bg-[#ACEDFF] px-4 py-3 justify-center gap-2 rounded-sm">
                    <div className="text-[15px] text-[#001F26] font-bold">
                      Talk to Our Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="container h-full mx-auto justify-between items-center px-6 py-12 bg-[#F2F3FF]">
          <div className="flex flex-col gap-4">
            <div className="flex-col flex gap-1">
              <div className="text-[#00687A] md:text-[16px] text-[11px]">
                ANSWERS & PROTOCOL
              </div>
              <div className="text-[#131B2E] text-[20px] md:text-[40px] font-bold">
                Frequently Asked Questions
              </div>
            </div>
            <div className="grid gap-2">
              <Accordion className="w-full bg-white">
                <AccordionItem value="FAQ-1">
                  <AccordionTrigger className="text-[16px] font-bold">
                    Can I upgrade from Track to Coach or Insights later?
                  </AccordionTrigger>

                  <AccordionContent className="text-[16px] text-justify">
                    Yes, absolute backward and forward database compatibility is
                    guaranteed. When upgrading from Track to Coach or Insights,
                    all athlete telemetry records, baseline fitness assessments,
                    and historical load files remain preserved with zero loss of
                    seasonal continuity.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion className="w-full bg-white">
                <AccordionItem value="FAQ-2">
                  <AccordionTrigger className="text-[16px] font-bold">
                    What wearables and sensors are supported natively?
                  </AccordionTrigger>

                  <AccordionContent className="text-[15px] text-justify">
                    VeloCore natively ingests ANT+ FE-C and Bluetooth Low Energy
                    standards. This covers Garmin, Wahoo, Polar, Whoop, SRM,
                    Favero Assioma, Stryd footpods, and VO2 Master analyzers out
                    of the box with zero third-party bridge required.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion className="w-full bg-white">
                <AccordionItem value="FAQ-3">
                  <AccordionTrigger className="text-[16px] font-bold">
                    How does custom deployment work for sports leagues?
                  </AccordionTrigger>

                  <AccordionContent className="text-[15px] text-justify">
                    For leagues and national federations, we deploy isolated
                    private VPC clusters with custom domain routing, team SSO,
                    enterprise SLA agreements, and dedicated field engineers
                    based at our Jakarta headquarters.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion className="w-full bg-white">
                <AccordionItem value="FAQ-4">
                  <AccordionTrigger className="text-[16px] font-bold">
                    How is data ownership and privacy handled?
                  </AccordionTrigger>

                  <AccordionContent className="text-[15px] text-justify">
                    Athletes and teams own 100% of their biometric telematics.
                    We adhere strictly to GDPR and national sports data
                    standards. Your biometric telemetry streams are encrypted at
                    rest with AES-256 and never monetized or exposed.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ServicesPage;
