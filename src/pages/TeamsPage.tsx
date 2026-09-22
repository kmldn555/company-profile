import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
};

function TeamsPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.results);
      });
  }, []);

  console.log(users);

  return (
    <div className="bg-white">
      <div className=" bg-white fixed top-0 left-0 w-full h-15 md:h-20 z-10">
        <Navbar />
      </div>
      {/* container utama */}
      <div className="pt-15 md:pt-20 border-2 border-white">
        {/* Header Section */}
        <div className="container h-full mx-auto justify-between items-center px-6 pt-9 pb-6 bg-[#F2F3FF] ">
          <div className="flex flex-col gap-2">
            <div className="text-[28px] md:text-[40px] text-[#131B2E] font-bold">
              Meet Our Team
            </div>
            <div className="text-[17px] text-[#434655]">
              A multidisciplinary crew of engineers, designers, sports
              scientists, and data specialists building the future of athletic
              performance in Jakarta.
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col py-5 px-3 bg-white rounded-sm">
                <div className="text-[12px] text-[#737686]">ACTIVE LABS</div>
                <div className="text-[32px] text-[#004AC6] font-bold">08</div>
              </div>
              <div className="flex flex-col py-5 px-3 bg-white rounded-sm">
                <div className="text-[12px] text-[#737686]">SPECIALISTS</div>
                <div className="text-[32px] text-[#00687A] font-bold">5</div>
              </div>
              <div className="flex flex-col py-5 px-3 bg-white rounded-sm">
                <div className="text-[12px] text-[#737686]">TELEMETRY SYNC</div>
                <div className="text-[32px] text-[#131B2E] font-bold">100%</div>
              </div>
            </div>
          </div>
        </div>
        {/* Search Toolbar */}
        <div className="container h-full mx-auto justify-between items-center px-6 pt-3 pb-1 bg-[#F2F3FF] ">
          <div className="flex gap-2 bg-white p-3 rounded-sm shadow-sm/30">
            <img src="IconSearch.svg" alt="IconSearch" />
            <div className=" flex flex-1">Search by name or email...</div>
          </div>
        </div>
        {/* Team Member */}
        <div className="container h-full mx-auto justify-between items-center px-6 py-4 bg-[#F2F3FF] ">
          {/* container card */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
            {/* card 1 */}
            <div className="flex flex-col bg-[#FAF8FF] shadow-sm/30 gap-4 p-4">
              <div className="flex justify-between gap-3">
                <div className="flex gap-3 items-center">
                  <img
                    src={users[0]?.picture.large}
                    alt="ImageLeader1"
                    className="w-14 h-14 rounded-sm"
                  />
                  <div>
                    <div
                      className="text-[20px] text-[#131B2E] font-bold leading-none
                    "
                    >
                      {users[0]?.name.first} {users[0]?.name.last}
                    </div>
                    <div className="text-[13px] text-[#004AC6] ">
                      {users[0]?.email}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="px-2 py-1 bg-[#E2E7FF] text-[11px] text-[#004AC6] font-semibold">
                    SWE_01
                  </div>
                </div>
              </div>
              <div className="p-3 bg-[#F2F3FF] rounded-sm">
                <div className="flex gap-2 items-center">
                  <img src="IconSE.svg" alt="IconSE" />
                  <div className="text-[11px] text-[#004AC6] font-bold">
                    SOFTWARE ENGINEER
                  </div>
                </div>
                <div className="text-[13px] text-[#434655]">
                  Builds reliable digital products and develops features for
                  VeloCore's sports technology platform.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <div>
                    <img src="IconSE1.svg" alt="IconSE1" />
                  </div>
                  <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                    99.8% UPTIME
                  </div>
                </div>
                <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                  -
                </div>
                <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                  JAKARTA LAB
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex flex-col bg-[#FAF8FF] shadow-sm/30 gap-4 p-4">
              <div className="flex justify-between gap-3">
                <div className="flex gap-3 items-center">
                  <img
                    src={users[1]?.picture.large}
                    alt="ImageLeader1"
                    className="w-14 h-14 rounded-sm"
                  />
                  <div>
                    <div
                      className="text-[20px] text-[#131B2E] font-bold leading-none
                    "
                    >
                      {users[1]?.name.first} {users[1]?.name.last}
                    </div>
                    <div className="text-[13px] text-[#004AC6] ">
                      {users[1]?.email}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="px-2 py-1 bg-[#E2E7FF] text-[11px] text-[#004AC6] font-semibold">
                    UI_04
                  </div>
                </div>
              </div>
              <div className="p-3 bg-[#F2F3FF] rounded-sm">
                <div className="flex gap-2 items-center">
                  <img src="IconFE.svg" alt="IconFE" />
                  <div className="text-[11px] text-[#004AC6] font-bold">
                    FRONTEND ENGINEER
                  </div>
                </div>
                <div className="text-[13px] text-[#434655]">
                  Develops responsive and interactive interfaces for VeloCore's
                  web applications.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <div>
                    <img src="IconFE1.svg" alt="IconFE1" />
                  </div>
                  <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                    REACT + VITE
                  </div>
                </div>
                <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                  -
                </div>
                <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                  120 FPS
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="flex flex-col bg-[#FAF8FF] shadow-sm/30 gap-4 p-4">
              <div className="flex justify-between gap-3">
                <div className="flex gap-3 items-center">
                  <img
                    src={users[2]?.picture.large}
                    alt="ImageLeader1"
                    className="w-14 h-14 rounded-sm"
                  />
                  <div>
                    <div
                      className="text-[20px] text-[#131B2E] font-bold leading-none
                    "
                    >
                      {users[2]?.name.first} {users[2]?.name.last}
                    </div>
                    <div className="text-[13px] text-[#004AC6] ">
                      {users[2]?.email}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="px-2 py-1 bg-[#E2E7FF] text-[11px] text-[#004AC6] font-semibold">
                    API_05
                  </div>
                </div>
              </div>
              <div className="p-3 bg-[#F2F3FF] rounded-sm">
                <div className="flex gap-2 items-center">
                  <img src="IconBE.svg" alt="IconBE" />
                  <div className="text-[11px] text-[#004AC6] font-bold">
                    BACKEND ENGINEER
                  </div>
                </div>
                <div className="text-[13px] text-[#434655]">
                  Builds APIs and services that power VeloCore's data and
                  performance platforms.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <div>
                    <img src="IconBE1.svg" alt="IconBE1" />
                  </div>
                  <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                    2.4M REQ/S
                  </div>
                </div>
                <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                  -
                </div>
                <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                  GOLANG + RUST
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="flex flex-col bg-[#FAF8FF] shadow-sm/30 gap-4 p-4">
              <div className="flex justify-between gap-3">
                <div className="flex gap-3 items-center">
                  <img
                    src={users[3]?.picture.large}
                    alt="ImageLeader1"
                    className="w-14 h-14 rounded-sm"
                  />
                  <div>
                    <div
                      className="text-[20px] text-[#131B2E] font-bold leading-none
                    "
                    >
                      {users[3]?.name.first} {users[3]?.name.last}
                    </div>
                    <div className="text-[13px] text-[#004AC6] ">
                      {users[3]?.email}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="px-2 py-1 bg-[#E2E7FF] text-[11px] text-[#004AC6] font-semibold">
                    ML_06
                  </div>
                </div>
              </div>
              <div className="p-3 bg-[#F2F3FF] rounded-sm">
                <div className="flex gap-2 items-center">
                  <img src="IconDS.svg" alt="IconDS" />
                  <div className="text-[11px] text-[#004AC6] font-bold">
                    DATA SCIENTIST
                  </div>
                </div>
                <div className="text-[13px] text-[#434655]">
                  Works with sports data to identify patterns and develop
                  meaningful performance insights.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <div>
                    <img src="IconDS1.svg" alt="IconDS1" />
                  </div>
                  <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                    PYTORCH
                  </div>
                </div>
                <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                  -
                </div>
                <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                  98.2% ACC
                </div>
              </div>
            </div>

            {/* card 5 */}
            <div className="flex flex-col bg-[#FAF8FF] shadow-sm/30 gap-4 p-4">
              <div className="flex justify-between gap-3">
                <div className="flex gap-3 items-center">
                  <img
                    src={users[4]?.picture.large}
                    alt="ImageLeader1"
                    className="w-14 h-14 rounded-sm"
                  />
                  <div>
                    <div
                      className="text-[20px] text-[#131B2E] font-bold leading-none
                    "
                    >
                      {users[4]?.name.first} {users[4]?.name.last}
                    </div>
                    <div className="text-[13px] text-[#004AC6] ">
                      {users[4]?.email}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="px-2 py-1 bg-[#E2E7FF] text-[11px] text-[#004AC6] font-semibold">
                    BIO_03
                  </div>
                </div>
              </div>
              <div className="p-3 bg-[#F2F3FF] rounded-sm">
                <div className="flex gap-2 items-center">
                  <img src="IconSPA.svg" alt="IconSPA" />
                  <div className="text-[11px] text-[#004AC6] font-bold">
                    SPORTS PERFORMANCE ANALYST
                  </div>
                </div>
                <div className="text-[13px] text-[#434655]">
                  Analyzes athlete performance data and translates it into
                  useful training insights.
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 items-center">
                  <div>
                    <img src="IconSPA1.svg" alt="IconSPA1" />
                  </div>
                  <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                    VO2 MAX LAB
                  </div>
                </div>
                <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                  -
                </div>
                <div className="px-2 py-0.5 text-[12px] text-[#434655] font-semibold">
                  SERIES A
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default TeamsPage;
