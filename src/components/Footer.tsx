function Footer() {
  return (
    <div className="container h-full mx-auto justify-between items-center pt-12 pb-12 px-6 bg-[#283044]">
      {/* Main Container */}
      <img src="/LogoBgBlack.png" alt="LogoBgBlack" className="h-12.5 w-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid gap-4">
          {/* Container 1 */}
          <div className="text-[#DAE2FD] text-[13.5px]">
            Jakarta's premier athletic intelligence & sports telemetry research
            ecosystem. High-performance bio-engineering for global champions.
          </div>

          {/* Container 2 */}
          <div className="grid grid-cols-1 gap-1">
            <div className="text-[10px] text-[#ACEDFF]">
              JAKARTA HEADQUARTERS
            </div>
            <div className="text-[#DAE2FD] text-[12px]">
              <div>Jl. Jend. Sudirman No. 45, Jakarta Selatan 12930</div>
              <div>Indonesia</div>
            </div>
            <div>
              <div className="flex gap-2">
                <img src="/IconEmailFooter.svg" alt="IconEmailFooter" />
                <div className="text-[#DAE2FD] text-[12px]">
                  hello@velocore.id
                </div>
              </div>
              <div className="flex gap-2">
                <img src="/IconTelephoneFooter.svg" alt="IconTelephoneFooter" />
                <div className="text-[#DAE2FD] text-[12px]">
                  +62 21 555 0188
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Container 3 */}
          <div className="grid grid-cols-1 gap-2">
            <div className="text-[10px] text-[#ACEDFF]">QUICK NAVIGATION</div>
            <div className="grid grid-cols-2 text-[#DAE2FD] text-[12px]">
              <div>Home</div>
              <div>About Us</div>
              <div>Services</div>
              <div>Teams</div>
              <div>Blog</div>
            </div>
          </div>
          {/* Container 4 */}
          <div className=" grid grid-cols-1 pt-4 gap-4">
            <div className="flex gap-4">
              <img src="/IconShareFooter.svg" alt="IconShareFooter" />
              <img src="/IconServicesFooter.svg" alt="IconServicesFooter" />
              <img src="/IconHomeFooter.svg" alt="IconHomeFooter" />
            </div>
            <div className="leading-none">
              <div className="text-[12px] text-[#737686]">
                © 2026 VeloCore. All rights reserved.
              </div>
              <div className="text-[12px] text-[#ACEDFF]">
                JAKARTA SPORTS TECH LABS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
