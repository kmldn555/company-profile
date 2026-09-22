import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function AboutUsPage() {
  return (
    <div className="bg-white">
      <div className=" bg-white fixed top-0 left-0 w-full h-15 md:h-20 z-10">
        <Navbar />
      </div>
      {/* container utama */}
      <div className="pt-15 md:pt-20 ">
        {/* // Hero Section */}
        <div className="container h-full mx-auto justify-between items-center px-6 py-12 bg-[#283044]">
          <div className="grid md:grid-cols-2 gap-4">
            {/* container text */}
            <div className="flex flex-col gap-2">
              <div className="text-[11px] md:text-[16px] text-[#57DFFE]">
                ABOUT VELOCORE BIOTECH
              </div>
              <div className="text-[28px] md:text-[40px]  text-white font-bold">
                Building Technology Around Human Performance
              </div>
              <div className="tex-[15px]  text-[#DAE2FD]">
                VeloCore combines software engineering, data analytics, and
                sports expertise to create smarter training experiences.
              </div>
              <div className="grid-cols-2 gap-2 mt-2 hidden md:grid rounded-sm">
                <div className="p-3 bg-[#EAEDFF] rounded-sm">
                  <div className="text-[32px] text-[#004AC6] font-bold">
                    99.8%
                  </div>
                  <div className="text-[11px] text-[#434655] ">
                    TELEMETRY FIDELITY
                  </div>
                </div>
                <div className="p-3 bg-[#EAEDFF] rounded-sm">
                  <div className="text-[32px] text-[#00687A] font-bold">
                    0.02s
                  </div>
                  <div className="text-[11px] text-[#434655] ">
                    BIOMETRIC SAMPLING
                  </div>
                </div>
              </div>
            </div>
            {/* container photo */}
            <div className="flex relative md:mt-0 justify-center rounded-lg">
              <img
                src="ImageRunner.png"
                alt="ImageRunner"
                className=" md:w-[80%] w-full h-auto rounded-sm"
              />
              <div className="bg-gray-500/90 absolute bottom-0 md:w-[80%] w-full text-white p-3 flex gap-2 items-center font-semibold rounded-b-lg">
                <div className="h-2.5 w-2.5 bg-[#57DFFE] rounded-full"></div>
                JAKARTA LABS
              </div>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        {/* // Section 1*/}
        <div className="container h-full mx-auto justify-between items-center px-6 py-12 bg-[#FAF8FF]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <img src="IconGenesis.svg" alt="IconGenesis" />
                <div className="text-[11px] md:text-[16px]">OUR GENESIS</div>
              </div>
              <div className="font-bold text-[28px] md:text-[40px] text-[#131B2E]">
                The Story Behind VeloCore
              </div>
              <div className="text-[15px] text-[#434655]">
                Founded at the cross-section of Jakarta’s thriving athletic
                culture and relentless tech ecosystem.
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4 md:rounded-sm">
              {/* card 1 */}
              <div className="flex flex-col bg-white shadow-sm/30 p-6 gap-2">
                <div>
                  <img src="IconBorn.svg" alt="IconBorn" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[12px] text-[#00687A]">
                    STAGE 01 // ORIGINS
                  </div>
                  <div className="text-[20px] text-[#131B2E]">
                    Born on the Asphalt of Sudirman
                  </div>
                </div>
                <div className="text-[15px] text-[#434655]">
                  VeloCore began not in an isolated laboratory, but during
                  pre-dawn marathon training sessions cutting through Jakarta's
                  humidity. A fellowship of software engineers, sports data
                  scientists, and competitive endurance athletes encountered a
                  shared barrier: consumer fitness monitors delivered passive
                  numbers, not actionable athletic intelligence.
                </div>
                <div className="flex gap-3 bg-[#EAEDFF] p-3">
                  <img src="IconErlenmeyer.svg" alt="IconErlenmeyer" />
                  <div className="text-[13px] text-[#131B2E]">
                    Mission Directive: Eliminate guesswork from high-stress
                    athlete conditioning.
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className="flex flex-col bg-white shadow-sm/30 p-6 gap-2">
                <div>
                  <img src="IconUnifying.svg" alt="IconUnifying" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[12px] text-[#00687A]">
                    STAGE 02 // LAB MEETS ASPHALT
                  </div>
                  <div className="text-[20px] text-[#131B2E]">
                    Unifying Physiology with Distributed Code
                  </div>
                </div>
                <div className="text-[15px] text-[#434655]">
                  We engineered a proprietary distributed telemetry pipeline
                  capable of processing millisecond biometric spikes, micro-
                  cadence deviations, and cardiovascular stress loads. By
                  pairing biological precision with resilient mobile
                  architecture, we turned athletic intuition into hard
                  mathematical advantage.
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2 md:hidden">
                  <div className="p-3 bg-[#EAEDFF]">
                    <div className="text-[32px] text-[#004AC6] font-bold">
                      99.8%
                    </div>
                    <div className="text-[11px] text-[#434655] ">
                      TELEMETRY FIDELITY
                    </div>
                  </div>
                  <div className="p-3 bg-[#EAEDFF]">
                    <div className="text-[32px] text-[#00687A] font-bold">
                      0.02s
                    </div>
                    <div className="text-[11px] text-[#434655] ">
                      BIOMETRIC SAMPLING
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // Section 2*/}
        <div className="container h-full mx-auto justify-between items-center px-6 py-12 bg-[#F2F3FF]">
          <div className="flex-col flex gap-4">
            <div className=" justify-items-center gap-1">
              <div className=" text-[#004AC6] md:text-[16px] text-[11px]">
                GUIDING FOUNDATIONS
              </div>
              <div className=" text-[#131B2E] font-bold text-[28px] md:text-[40px]">
                Purpose & Horizon
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-4 ">
              {/* card 1 */}
              <div className="flex flex-col bg-white shadow-sm/30 p-6 gap-3 rounded-sm">
                <div>
                  <img src="IconOurMission.svg" alt="IconOurMission" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[#004AC6] text-[11px]">OUR MISSION</div>
                  <div className="text-[#131B2E] text-[20px]">
                    "To make sports performance more measurable, accessible, and
                    meaningful through technology and data."
                  </div>
                </div>
                <div className="text-[#434655] text-[13px]">
                  Democratizing pro-tier telemetry so athletes at any stage
                  train with absolute clinical conviction.
                </div>
              </div>
              {/* card 2 */}
              <div className="flex flex-col bg-white shadow-sm/30 p-6 gap-3 rounded-sm">
                <div>
                  <img src="IconOurVision.svg" alt="IconOurVision" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[#00687A] text-[11px]">OUR VISION</div>
                  <div className="text-[#131B2E] text-[20px]">
                    "To empower people around the world to move better, train
                    smarter, and perform at their best."
                  </div>
                </div>
                <div className="text-[#434655] text-[13px]">
                  Establishing the global computational benchmark for athletic
                  human potential, starting from Southeast Asia.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // Section 3*/}
        <div className="container h-full mx-auto justify-between items-center px-6 py-12 bg-white">
          <div className="flex-col flex gap-8">
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <div>
                  <img src="IconEvo.svg" alt="IconEvo" />
                </div>
                <div className="text-[11px] md:text-[16px] text-[#00687A]">
                  EVOLUTIONARY LOG
                </div>
              </div>
              <div className="text-[28px] md:text-[40px] font-bold">VeloCore Progression Timeline</div>
              <div className="text-[15px] text-[#434655]">
                Key breakthroughs in our athletic telemetry infrastructure.
              </div>
            </div>
            <div className="flex-col flex md:grid md:grid-cols-3 gap-4">
              {/* card 1 */}
              <div className="grid p-4 gap-1 bg-[#F2F3FF] shadow-sm/30 rounded-lg">
                <div className="flex justify-between">
                  <div className="px-2 py-0.5 font-bold text-[#004AC6] text-[11px] bg-[#DBE1FF]">
                    2022
                  </div>
                  <div className="text-[12px] text-[#737686]">
                    INITIAL RELEASE
                  </div>
                </div>
                <div className="text-[20px] text-[#131B2E]">
                  VeloCore Was Born
                </div>
                <div>
                  VeloCore was founded in Jakarta with a mission to bring
                  technology and sports closer together.
                </div>
              </div>
              {/* card 2 */}
              <div className="grid p-4 gap-1 bg-[#F2F3FF] shadow-sm/30 rounded-lg">
                <div className="flex justify-between">
                  <div className="px-2 py-0.5 font-bold text-[#004AC6] text-[11px] bg-[#DBE1FF]">
                    2023
                  </div>
                  <div className="text-[12px] text-[#737686]">
                    ALPHA PROTOCOL
                  </div>
                </div>
                <div className="text-[20px] text-[#131B2E]">
                  First Product Launch
                </div>
                <div>
                  VeloCore Track launched as the company's first performance
                  tracking platform.
                </div>
              </div>
              {/* card 3 */}
              <div className="grid p-4 gap-1 bg-[#F2F3FF] shadow-sm/30 rounded-lg">
                <div className="flex justify-between">
                  <div className="px-2 py-0.5 font-bold text-[#004AC6] text-[11px] bg-[#DBE1FF]">
                    2024
                  </div>
                  <div className="text-[12px] text-[#737686]">
                    COMMUNITY SCALE
                  </div>
                </div>
                <div className="text-[20px] text-[#131B2E]">
                  Growing the Community{" "}
                </div>
                <div>
                  VeloCore reached more than 5,000 athletes and began working
                  with coaches and sports communities across Indonesia.
                </div>
              </div>
              {/* card 4 */}
              <div className="grid p-4 gap-1 bg-[#F2F3FF] shadow-sm/30 rounded-lg">
                <div className="flex justify-between">
                  <div className="px-2 py-0.5 font-bold text-[#004AC6] text-[11px] bg-[#DBE1FF]">
                    2025
                  </div>
                  <div className="text-[12px] text-[#737686]">
                    REGIONAL EXPANSION
                  </div>
                </div>
                <div className="text-[20px] text-[#131B2E]">
                  Expanding Beyond Indonesia
                </div>
                <div>
                  VeloCore expanded its services to several Southeast Asian
                  markets.
                </div>
              </div>
              {/* card 5 */}
              <div className="grid p-4 gap-1 bg-[#004AC6] shadow-sm/30 rounded-lg">
                <div className="flex justify-between">
                  <div className="px-2 py-0.5 font-bold text-[#004AC6] text-[11px] bg-white">
                    2026 · NOW
                  </div>
                  <div className="text-[12px] text-[#DBE1FF]">NEXT GEN AI </div>
                </div>
                <div className="text-[20px] text-white">
                  Smarter Performance Insights
                </div>
                <div className="text-white">
                  VeloCore introduced VeloCore Insights, deploying predictive
                  fatigue modeling directly into mobile telemetry headsets.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // Section 4*/}
        <div className="container h-full mx-auto justify-between items-center px-6 py-12 bg-[#FAF8FF]">
          <div className="flex-col flex gap-6">
            <div className="flex flex-col gap-1 ">
              <div className="text-[11px] md:text-[16px] text-[#004AC6]">OUR ETHOS</div>
              <div className="text-[28px] md:text-[40px] font-bold text-[#131B2E]">
                Core Values
              </div>
              <div className="text-[15px] text-[#434655]">
                The architectural principles shaping how we build algorithms and
                treat athletes.
              </div>
            </div>
            {/* coantainer card */}
            <div className="flex-col flex gap-4 md:grid md:grid-cols-3">
              {/* card 1 */}
              <div className="flex gap-4 bg-white shadow-sm/30 p-4">
                <div className="text-[#004AC6] text-[32px]">01</div>
                <div>
                  <div className="flex gap-2">
                    <img src="IconPerformance.svg" alt="IconPerformance" />
                    <div className="text-[20px] text-[#131B2E] font-semibold">
                      Performance First
                    </div>
                  </div>
                  <div className="text-[13px]">
                    Driven by tangible gains in speed, power, and endurance. We
                    celebrate metrics that directly correlate with winning
                    races.
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className="flex gap-4 bg-white shadow-sm/30 p-4">
                <div className="text-[#00687A] text-[32px]">02</div>
                <div>
                  <div className="flex gap-2">
                    <img src="IconKeepMoving.svg" alt="IconKeepMoving" />
                    <div className="text-[20px] text-[#131B2E] font-semibold">
                      Keep Moving
                    </div>
                  </div>
                  <div className="text-[13px]">
                    Relentless iteration and continuous athletic progress.
                    Stagnation is treated as system downtime.
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="flex gap-4 bg-white shadow-sm/30 p-4">
                <div className="text-[#004AC6] text-[32px]">03</div>
                <div>
                  <div className="flex gap-2">
                    <img src="IconDataPurpose.svg" alt="IconDataPurpose" />
                    <div className="text-[20px] text-[#131B2E] font-semibold">
                      Data with Purpose
                    </div>
                  </div>
                  <div className="text-[13px]">
                    Telemetry that directly informs actionable training
                    decisions, never vanity vanity numbers or metric bloat.
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className="flex gap-4 bg-white shadow-sm/30 p-4">
                <div className="text-[#00687A] text-[32px]">04</div>
                <div>
                  <div className="flex gap-2">
                    <img src="IconBuilt.svg" alt="IconBuilt" />
                    <div className="text-[20px] text-[#131B2E] font-semibold">
                      Built for People
                    </div>
                  </div>
                  <div className="text-[13px]">
                    Empathy-led design for athletes, coaches, and weekend
                    warriors navigating high- pressure training cycles.
                  </div>
                </div>
              </div>
              {/* card 5 */}
              <div className="flex gap-4 bg-white shadow-sm/30 p-4">
                <div className="text-[#004AC6] text-[32px]">05</div>
                <div>
                  <div className="flex gap-2">
                    <img src="IconBetter.svg" alt="IconBetter" />
                    <div className="text-[20px] text-[#131B2E] font-semibold">
                      Better Together
                    </div>
                  </div>
                  <div className="text-[13px]">
                    Fostering high-performance sporting communities where shared
                    telemetry lifts the baseline for every squad member.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // Section 5*/}
        <div className="container h-full mx-auto justify-between items-center px-6 py-12 bg-white">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 ">
              <div className="text-[11px] md:text-[16px] text-[#004AC6]">
                EXECUTIVE ENGINEERING
              </div>
              <div className="text-[28px] md:text-[40px] text-[#131B2E] font-bold">
                Leadership Team
              </div>
              <div className="text-[15px] text-[#434655]">
                Cross-functional practitioners blending elite sports physiology
                and modern computing.
              </div>
            </div>
            {/* container card */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* card 1 */}
              <div className="flex flex-col bg-[#FAF8FF] shadow-sm/30 gap-4 p-4">
                <div className="flex gap-3">
                  <img src="ImageLeader1.svg" alt="ImageLeader1" />
                  <div>
                    <div className="text-[20px] text-[#131B2E]">
                      Adrian Pratama
                    </div>
                    <div className="text-[13px] text-[#004AC6]">
                      Co-Founder & CEO
                    </div>
                    <div className="text-[12px] text-[#434655]">
                      EX-COLLEGIATE RUNNER
                    </div>
                  </div>
                </div>
                <div className="text-[13px] text-[#434655]">
                  Former collegiate athlete and product veteran leading
                  VeloCore's vision to revolutionize endurance intelligence
                  globally.
                </div>
                <div className="flex gap-2">
                  <div className="px-2 py-0.5 text-[12px] text-[#434655]">
                    #Strategy
                  </div>
                  <div className="px-2 py-0.5 text-[12px] text-[#434655]">
                    #SportsTech
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className="flex flex-col bg-[#FAF8FF] shadow-sm/30 gap-4 p-4">
                <div className="flex gap-3">
                  <img src="MayaChen .svg" alt="MayaChen" />
                  <div>
                    <div className="text-[20px] text-[#131B2E]">Maya Chen </div>
                    <div className="text-[13px] text-[#004AC6]">
                      Co-Founder & Chief Product Officer
                    </div>
                    <div className="text-[12px] text-[#434655]">
                      BIOMETRIC UX ARCHITECT
                    </div>
                  </div>
                </div>
                <div className="text-[13px] text-[#434655]">
                  Product architect focused on intuitive biometric interfaces
                  and reducing cognitive friction during high-intensity training
                  sessions.
                </div>
                <div className="flex gap-2">
                  <div className="px-2 py-0.5 text-[12px] text-[#434655]">
                    #Product
                  </div>
                  <div className="px-2 py-0.5 text-[12px] text-[#434655]">
                    #UX
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="flex flex-col bg-[#FAF8FF] shadow-sm/30 gap-4 p-4">
                <div className="flex gap-3">
                  <img src="DanielHart.svg" alt="DanielHart" />
                  <div>
                    <div className="text-[20px] text-[#131B2E]">
                      Daniel Hart
                    </div>
                    <div className="text-[13px] text-[#004AC6]">
                      Head of Sports Performance
                    </div>
                    <div className="text-[12px] text-[#434655]">
                      UCI CERTIFIED COACH
                    </div>
                  </div>
                </div>
                <div className="text-[13px] text-[#434655]">
                  Elite cycling & endurance coach with 12+ years optimizing
                  oxygen kinetics, power cadence curves, and glycogen depletion
                  models.
                </div>
                <div className="flex gap-2">
                  <div className="px-2 py-0.5 text-[12px] text-[#434655]">
                    #Physiology
                  </div>
                  <div className="px-2 py-0.5 text-[12px] text-[#434655]">
                    #Coaching
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className="flex flex-col bg-[#FAF8FF] shadow-sm/30 gap-4 p-4">
                <div className="flex gap-3">
                  <img src="RinaWijaya.svg" alt="RinaWijaya" />
                  <div>
                    <div className="text-[20px] text-[#131B2E]">
                      Rina Wijaya
                    </div>
                    <div className="text-[13px] text-[#004AC6]">
                      Head of Engineering
                    </div>
                    <div className="text-[12px] text-[#434655]">
                      DISTRIBUTED CLUSTERS
                    </div>
                  </div>
                </div>
                <div className="text-[13px] text-[#434655]">
                  Distributed systems architect powering real-time sports
                  telemetry with low-latency event-driven microservices.
                </div>
                <div className="flex gap-2">
                  <div className="px-2 py-0.5 text-[12px] text-[#434655]">
                    #Architecture
                  </div>
                  <div className="px-2 py-0.5 text-[12px] text-[#434655]">
                    #TypeScript
                  </div>
                </div>
              </div>
              {/* card 5 */}
              <div className="flex flex-col bg-[#FAF8FF] shadow-sm/30 gap-4 p-4">
                <div className="flex gap-3">
                  <img src="EthanMiller.svg" alt="EthanMiller" />
                  <div>
                    <div className="text-[20px] text-[#131B2E]">
                      Ethan Miller
                    </div>
                    <div className="text-[13px] text-[#004AC6]">
                      Lead Data Scientist
                    </div>
                    <div className="text-[12px] text-[#434655]">
                      PREDICTIVE ML LAB
                    </div>
                  </div>
                </div>
                <div className="text-[13px] text-[#434655]">
                  Applied ML researcher specializing in predictive training load
                  algorithms and non-invasive injury probability modeling.
                </div>
                <div className="flex gap-2">
                  <div className="px-2 py-0.5 text-[12px] text-[#434655]">
                    #DataScience
                  </div>
                  <div className="px-2 py-0.5 text-[12px] text-[#434655]">
                    #AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* // Section 6*/}
        <div className="container h-full mx-auto justify-between items-center px-6 py-12 bg-[#FAF8FF]">
          {/* container text */}
          <div className="flex flex-col gap-2">
            <div className="text-[#004AC6] text-[11px] md:text-[16px]">OPERATING SYSTEM</div>
            <div className="text-[#131B2E] text-[28px] md:text-[40px] font-bold">
              Our Culture & How We Work
            </div>
            <div className="p-4 rounded-lg bg-[#E2E7FF] font-semibold text-[#004AC6] text-[18px]">
              "We believe great technology is built by people who are curious,
              collaborative, and passionate about what they do."
            </div>
          </div>
          {/* container card */}
          <div className="flex flex-col md:grid-cols-4 md:grid gap-4 mt-4">
            {/* card 1 */}
            <div className="flex flex-col p-4 gap-1 bg-white shadow-sm/30 rounded-lg">
              <div>
                <img src="IconCollab.svg" alt="IconCollab" />
              </div>
              <div className="font-semibold text-[#131B2E] text-[20px]">
                Collaborate Openly
              </div>
              <div className=" text-[#434655] text-[13px]">
                Zero silos. Cross-pollination between code commits and marathon
                splits is our default state.
              </div>
            </div>
            {/* card 2 */}
            <div className="flex flex-col p-4 gap-1 bg-white shadow-sm/30 rounded-lg">
              <div>
                <img src="IconLearn.svg" alt="IconLearn" />
              </div>
              <div className="font-semibold text-[#131B2E] text-[20px]">
                Learn Continuously
              </div>
              <div className=" text-[#434655] text-[13px]">
                Sports science evolves weekly. We treat research papers as
                essential sprint backlog tasks.
              </div>
            </div>
            {/* card 3 */}
            <div className="flex flex-col p-4 gap-1 bg-white shadow-sm/30 rounded-lg">
              <div>
                <img src="IconOwner.svg" alt="IconOwner" />
              </div>
              <div className="font-semibold text-[#131B2E] text-[20px]">
                Take Ownership
              </div>
              <div className=" text-[#434655] text-[13px]">
                Autonomy drives momentum. Every engineer holds authority over
                the fidelity of their metrics.
              </div>
            </div>
            {/* card 4 */}
            <div className="flex flex-col p-4 gap-1 bg-white shadow-sm/30 rounded-lg">
              <div>
                <img src="IconPurpose.svg" alt="IconPurpose" />
              </div>
              <div className="font-semibold text-[#131B2E] text-[20px]">
                Build with Purpose
              </div>
              <div className=" text-[#434655] text-[13px]">
                Every pipeline we deploy must measurably push an athlete forward
                on the track or trail.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUsPage;
