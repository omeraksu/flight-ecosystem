import svgPaths from "./svg-t9lmreofnz";
import imgScreen15Pro from "figma:asset/0261f10c878a39912c5226cf7f39ed8ad15f09d0.png";

function Button() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#e72a19] gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 to-[#ed723d] via-[#dd5a22] via-[60.096%]" data-name="Button">
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#f5f5f5] text-[16px] text-nowrap">Get Started</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] items-center left-[calc(50%-0.67px)] top-[335.71px] translate-x-[-50%] w-[868.337px]">
      <div className="font-['Onest:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[56px] text-black text-center text-nowrap">
        <p className="mb-0">{`Financial Velocity `}</p>
        <p>at New Altitudes</p>
      </div>
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-none min-w-full relative shrink-0 text-[26px] text-black text-center w-[min-content]">Experience seamless financial movement with engineering clarity. Accelerate your global transactions with the power of Flight.</p>
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#ffee8f] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[28px] items-start leading-none px-[45px] py-[36px] relative text-black w-full">
          <p className="font-['Onest:Bold',sans-serif] font-bold relative shrink-0 text-[40px] text-center text-nowrap">Digital Asset Management:</p>
          <p className="font-['Onest:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[24px] w-[min-content]">A shared stage for collaborative movement.</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#fbb1ff] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[28px] items-start leading-none px-[45px] py-[36px] relative text-black w-full">
          <p className="font-['Onest:Bold',sans-serif] font-bold relative shrink-0 text-[40px] w-full">Smart Cards:</p>
          <p className="font-['Onest:Regular',sans-serif] font-normal relative shrink-0 text-[24px] w-full">Manage limits and freeze cards instantly.</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#00ffcd] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[28px] items-start leading-none px-[45px] py-[36px] relative text-black w-full">
          <p className="font-['Onest:Bold',sans-serif] font-bold relative shrink-0 text-[40px] w-full">Fluid Transfers:</p>
          <p className="font-['Onest:Regular',sans-serif] font-normal relative shrink-0 text-[24px] w-full">Send crypto and fiat with a single tap.</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[45px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame3 />
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-[-0.32px] h-[23.811px] left-0 right-[0.23px]" data-name="Home Indicator">
      <div className="absolute bg-white bottom-[5.41px] h-[3.502px] left-[calc(50%+0.5px)] rounded-[70.033px] translate-x-[-50%] w-[106.451px]" data-name="Home Indicator" />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents right-[22.81px] top-[calc(50%+1.91px)] translate-y-[-50%]" data-name="Battery">
      <div className="absolute border-[0.7px] border-solid border-white h-[9.104px] opacity-[0.35] right-[24.37px] rounded-[3.011px] top-[calc(50%+1.91px)] translate-y-[-50%] w-[17.508px]" data-name="Border" />
      <div className="absolute h-[2.801px] right-[22.81px] top-[calc(50%+2.03px)] translate-y-[-50%] w-[0.93px]" data-name="Cap">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.930068 2.80133">
          <path d={svgPaths.p2e343400} fill="var(--fill-0, white)" id="Cap" opacity="0.4" style={{ fill: "white", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute bg-white h-[6.303px] right-[25.77px] rounded-[1.751px] top-[calc(50%+1.91px)] translate-y-[-50%] w-[14.707px]" data-name="Capacity" />
    </div>
  );
}

function StatusBar15Pro() {
  return (
    <div className="absolute h-[37.118px] left-0 right-[0.23px] top-0" data-name="Status Bar / 15 Pro">
      <Battery />
      <div className="absolute inset-[43.77%_17.09%_33.4%_78.55%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9941 8.47383">
          <path d={svgPaths.p3af965f0} fill="var(--fill-0, white)" id="Wifi" style={{ fill: "white", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute inset-[43.58%_23.36%_33.77%_71.76%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4346 8.4043">
          <path d={svgPaths.p17894b80} fill="var(--fill-0, white)" id="Cellular Connection" style={{ fill: "white", fillOpacity: "1" }} />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[48.27px] text-[11.906px] text-center text-nowrap text-white top-[calc(50%+2.19px)] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">13:13</p>
      </div>
    </div>
  );
}

function Screen15Pro() {
  return (
    <div className="absolute inset-[1.7%_3.55%] overflow-clip rounded-[39.219px]" data-name="Screen / 15 Pro">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[39.219px] size-full" src={imgScreen15Pro} />
      <HomeIndicator />
      <StatusBar15Pro />
    </div>
  );
}

function IPhone15Pro() {
  return (
    <div className="h-[617.693px] relative shrink-0 w-[296.241px]" data-name="iPhone 15 Pro">
      <Screen15Pro />
      <div className="absolute bg-black inset-[2.99%_35.58%_92.86%_34.87%] rounded-[30.815px]" data-name="Dynamic Island" />
      <div className="absolute border-[7.003px] border-black border-solid inset-[0.57%_1.18%] rounded-[46.222px]" data-name="Frames" />
      <div className="absolute border-[3.502px] border-[rgba(189,184,175,0.62)] border-solid inset-0 rounded-[49.724px]" data-name="Color" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[239px] items-center justify-center relative shrink-0 w-full">
      <Frame5 />
      <IPhone15Pro />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] items-center left-1/2 top-[1304px] translate-x-[-50%] w-[1168px]">
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[36px] text-black text-center w-[394.406px]">
        <p className="mb-0">{`Total Control. `}</p>
        <p>Zero Friction.</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center justify-center leading-none min-h-px min-w-px relative shrink-0 text-black">
      <p className="font-['Onest:Medium',sans-serif] font-medium relative shrink-0 text-[32px] w-full">Kinetic Transactions</p>
      <p className="font-['Onest:Regular',sans-serif] font-normal relative shrink-0 text-[22px] w-full">Saturated with speed. Settlements that happen in real-time, matching your business tempo.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center justify-center leading-none min-h-px min-w-px relative shrink-0 text-black">
      <p className="font-['Onest:Medium',sans-serif] font-medium relative shrink-0 text-[32px] w-full">Disciplined Security</p>
      <p className="font-['Onest:Regular',sans-serif] font-normal relative shrink-0 text-[22px] w-full">Precise contours and stable systems. Bank-grade security with engineering clarity.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center justify-center leading-none min-h-px min-w-px relative shrink-0 text-black">
      <p className="font-['Onest:Medium',sans-serif] font-medium relative shrink-0 text-[32px] w-full">Horizon Crossing</p>
      <p className="font-['Onest:Regular',sans-serif] font-normal relative shrink-0 text-[22px] w-full">Turning distance into proximity. Connect across time zones without friction.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[145px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[82px] items-center left-[calc(8.33%+22px)] top-[852.35px] w-[1216px]">
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[36px] text-black text-center w-full">Engineered for Stability.</p>
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[50.113px] relative shrink-0 w-[224px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 50.1129">
        <g id="Group">
          <path d={svgPaths.p3ffeb200} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p2a898180} fill="var(--fill-0, black)" id="Vector_2" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.pf66ce00} fill="var(--fill-0, black)" id="Vector_3" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p23b0c700} fill="var(--fill-0, black)" id="Vector_4" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p24032a00} fill="var(--fill-0, black)" id="Vector_5" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p30f52f00} fill="var(--fill-0, black)" id="Vector_6" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p90ff00} fill="var(--fill-0, black)" id="Vector_7" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p16285780} fill="var(--fill-0, black)" id="Vector_8" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.pae42980} fill="var(--fill-0, black)" id="Vector_9" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.pb8bc4c0} fill="var(--fill-0, black)" id="Vector_10" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p1e012600} fill="var(--fill-0, black)" id="Vector_11" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p2f02aab0} fill="var(--fill-0, black)" id="Vector_12" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p395a2a80} fill="var(--fill-0, black)" id="Vector_13" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p2fe224c0} fill="var(--fill-0, black)" id="Vector_14" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p39bc11f0} fill="var(--fill-0, black)" id="Vector_15" style={{ fill: "black", fillOpacity: "1" }} />
          <g id="Group 1">
            <path d={svgPaths.p2e302080} fill="var(--fill-0, black)" id="Vector_16" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p6815350} fill="var(--fill-0, black)" id="Vector_17" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#e72a19] gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 to-[#ed723d] via-[#dd5a22] via-[60.096%]" data-name="Button">
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#f5f5f5] text-[16px] text-nowrap">Get Started</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-center flex flex-wrap gap-[58px_45px] items-center justify-center relative shrink-0">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[18px] text-black text-center text-nowrap">Products</p>
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[18px] text-black text-center text-nowrap">Solutions</p>
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[18px] text-black text-center text-nowrap">Company</p>
      <Button1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[23.66px] top-[35.93px] w-[1464.337px]">
      <Group />
      <Frame8 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[617.457px] left-1/2 top-[2189.27px] translate-x-[-50%] w-[1505.523px]">
      <div className="absolute bg-[#d9d9d9] h-[617.457px] left-[-130.32px] top-0 w-[1766.173px]" />
      <p className="absolute font-['Onest:Regular',sans-serif] font-normal leading-none left-[calc(50%-294.5px)] text-[24px] text-black text-nowrap top-[calc(50%-12px)]">Travel light yet fully alive. Room to choose and roam.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-1/2 overflow-clip p-[12px] rounded-[8px] top-[calc(50%+40px)] translate-x-[-50%] translate-y-[-50%]" data-name="Button" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(44, 44, 44) 0%, rgb(44, 44, 44) 100%)" }}>
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[24px] text-black text-nowrap">Get Started</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[262.124px] left-[-123.33px] top-[2873.26px] w-[1766.173px]">
      <div className="absolute h-[262.124px] left-0 top-0 w-[1766.173px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1766.2 262.12\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(88.309 0 0 13.106 883.09 131.06)\\\'><stop stop-color=\\\'rgba(237,127,79,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(240,108,51,1)\\\' offset=\\\'0.38942\\\'/><stop stop-color=\\\'rgba(236,98,39,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }} />
      <p className="absolute font-['Onest:Regular',sans-serif] font-normal leading-none left-[calc(50%-482.76px)] text-[36px] text-nowrap text-white top-[calc(50%-40px)]">Join the ecosystem that vibrates with contagious power.</p>
      <Button2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[50.113px] relative shrink-0 w-[224px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 50.1129">
        <g id="Group">
          <path d={svgPaths.p3ffeb200} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p2a898180} fill="var(--fill-0, black)" id="Vector_2" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.pf66ce00} fill="var(--fill-0, black)" id="Vector_3" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p23b0c700} fill="var(--fill-0, black)" id="Vector_4" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p24032a00} fill="var(--fill-0, black)" id="Vector_5" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p30f52f00} fill="var(--fill-0, black)" id="Vector_6" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p90ff00} fill="var(--fill-0, black)" id="Vector_7" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p16285780} fill="var(--fill-0, black)" id="Vector_8" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.pae42980} fill="var(--fill-0, black)" id="Vector_9" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.pb8bc4c0} fill="var(--fill-0, black)" id="Vector_10" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p1e012600} fill="var(--fill-0, black)" id="Vector_11" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p2f02aab0} fill="var(--fill-0, black)" id="Vector_12" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p395a2a80} fill="var(--fill-0, black)" id="Vector_13" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p2fe224c0} fill="var(--fill-0, black)" id="Vector_14" style={{ fill: "black", fillOpacity: "1" }} />
          <path d={svgPaths.p39bc11f0} fill="var(--fill-0, black)" id="Vector_15" style={{ fill: "black", fillOpacity: "1" }} />
          <g id="Group 1">
            <path d={svgPaths.p2e302080} fill="var(--fill-0, black)" id="Vector_16" style={{ fill: "black", fillOpacity: "1" }} />
            <path d={svgPaths.p6815350} fill="var(--fill-0, black)" id="Vector_17" style={{ fill: "black", fillOpacity: "1" }} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function XLogo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[23.98px]" data-name="X Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.98 24">
        <g id="X Logo">
          <path d={svgPaths.p16d01100} fill="var(--fill-0, #1E1E1E)" id="Icon" style={{ fill: "color(display-p3 0.1176 0.1176 0.1176)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_405)" id="LinkedIn">
          <path d={svgPaths.p167f5280} fill="var(--fill-0, #1E1E1E)" id="Icon" style={{ fill: "color(display-p3 0.1176 0.1176 0.1176)", fillOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_405">
            <rect fill="white" height="24" style={{ fill: "white", fillOpacity: "1" }} width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoYouTube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Logo YouTube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_397)" id="Logo YouTube">
          <path d={svgPaths.p13f17d00} fill="var(--fill-0, #1E1E1E)" id="Icon" style={{ fill: "color(display-p3 0.1176 0.1176 0.1176)", fillOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_397">
            <rect fill="white" height="24" style={{ fill: "white", fillOpacity: "1" }} width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonList() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Button List">
      <XLogo />
      <LinkedIn />
      <LogoYouTube />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[240px] relative shrink-0 w-[262px]" data-name="Title">
      <Group1 />
      <ButtonList />
    </div>
  );
}

function TextStrong() {
  return (
    <div className="content-stretch flex items-start mr-[-55px] relative shrink-0" data-name="Text Strong">
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[18px] text-black text-center text-nowrap">Platform</p>
    </div>
  );
}

function TextLinkListItem() {
  return (
    <div className="content-stretch flex flex-col font-['Onest:Regular',sans-serif] font-normal gap-[18px] items-start justify-center leading-none mr-[-55px] pb-0 pt-[36px] px-0 relative shrink-0 text-[16px] text-black text-center text-nowrap" data-name="Text Link List Item">
      <p className="relative shrink-0">Personal</p>
      <p className="relative shrink-0">Business</p>
      <p className="relative shrink-0">Enterprise</p>
    </div>
  );
}

function TextLinkList() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[55px] py-0 relative shrink-0" data-name="Text Link List">
      <TextStrong />
      <TextLinkListItem />
    </div>
  );
}

function TextStrong1() {
  return (
    <div className="content-stretch flex items-start mr-[-55px] relative shrink-0" data-name="Text Strong">
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[18px] text-black text-center text-nowrap">Company</p>
    </div>
  );
}

function TextLinkListItem1() {
  return (
    <div className="content-stretch flex flex-col font-['Onest:Regular',sans-serif] font-normal gap-[18px] items-start justify-center leading-none mr-[-55px] pb-0 pt-[36px] px-0 relative shrink-0 text-[16px] text-black text-center text-nowrap" data-name="Text Link List Item">
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Careers</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function TextLinkList1() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[55px] py-0 relative shrink-0" data-name="Text Link List">
      <TextStrong1 />
      <TextLinkListItem1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[282px] items-center px-[115px] py-0 relative shrink-0">
      <TextLinkList />
      <TextLinkList1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Title />
      <Frame17 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white bottom-0 left-1/2 translate-x-[-50%] w-[1512px]" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[49px] items-center overflow-clip px-[32px] py-[36px] relative rounded-[inherit] w-full">
        <Frame16 />
        <p className="font-['Onest:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[16px] text-black text-center text-nowrap">© 2025 Flight Ecosystem. All rights reserved.</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function MacBookPro() {
  return (
    <div className="bg-white relative size-full" data-name="MacBook Pro 14' - 1">
      <Frame />
      <Frame7 />
      <Frame13 />
      <Frame9 />
      <Frame14 />
      <Frame15 />
      <Footer />
    </div>
  );
}