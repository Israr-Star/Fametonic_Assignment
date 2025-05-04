import Image from 'next/image'
import homeTheme from '/public/assets/homeTheme.png'
import sparkle from '/public/assets/sparkle.png'
import startButtonArrow from '/public/assets/startButtonArrow.svg'
import { Urbanist } from 'next/font/google'
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})
export default function Body() {
  return (
    <section className="min-h-[calc(100vh-120px)] pl-[20px] sm:pl-[215px] pr-[20px] sm:pr-[101px]">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-0 sm:gap-8">
        {/* Left Content */}
        <div className="w-full max-w-[516px]  z-[2] space-y-6">
          <div className="max-w-[346px] sm:max-w-[unset] text-center sm:text-left">
            <h1
              className={`${urbanist.className} font-extrabold sm:font-bold text-[25px] sm:text-[35px] leading-[30px] sm:leading-[41.5px] tracking-[0%] align-middle pb-[2px] mt-[-28px] sm:mt-0`}
            >
              Want to Turn Social Media Into a Profitable Career?
            </h1>
            <p
              className={`${urbanist.className} font-extrabold sm:font-bold text-[25px] sm:text-[35px] leading-[30px] sm:leading-[41.5px] tracking-[0%] align-middle text-[#00E7F9] drop-shadow-[-1px_4px_4px_#FC004E]`}
            >
              Discover your way to success with Fametonic:
            </p>
          </div>
          <ul className="space-y-4 pt-[16px] pb-[22px] sm:pb-[30px] gap-[10px] sm:gap-[13px] flex flex-col">
            {[
              'Start growing your influence right away—no waiting required!',
              'Create viral TikToks and Reels step by step with easy-to-follow lessons',
              'Use a Personal AI Worker to boost your content',
              'Learn from expert-led courses designed for aspiring influencers',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-[10px]">
                <Image
                  src={sparkle.src}
                  alt="Fametonic App Preview"
                  width={22}
                  height={22}
                  // className="w-[390px] sm:w-[666px] h-[426px] sm:h-[679px]"
                />
                <span className="font-figtree font-semibold text-[16px] leading-[22px] tracking-[0%] align-middle">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex  flex-col-reverse sm:flex-col">
            <div className="space-y-4 w-[350px] sm:w-[313px] m-0">
              <button
                className={`${urbanist.className} m-0 gap-[10px] flex flex-row items-center pt-[8px] px-[102px] sm:px-[83px] pb-[8px] rounded-[10px] bg-[#FC004E] shadow-[2px_2px_10px_0px_#00E7F9]`}
              >
                <span className="font-figtree font-bold text-[20px] leading-[24px] tracking-[0%] align-middle whitespace-nowrap">
                  GET STARTED
                </span>
                <Image
                  src={startButtonArrow.src}
                  alt="Fametonic App Preview"
                  width={11}
                  height={6}
                />
              </button>

              <p className="font-figtree font-normal text-[12px] leading-[16px] tracking-[0%] pt-[10px] pb-[40px] sm:pb-0 align-middle text-center">
                1-minute quiz for personalized insights
              </p>
            </div>
            <div className="pl-[35px] sm:pl-0 max-w-[317px] sm:max-w-[unset] text-center sm:text-left">
              <p className="font-figtree font-medium text-[12px] leading-[14px] tracking-[0%] align-middle text-[#ABABAB] m-0 pb-[19px] sm:pb-[12px] pt-0 sm:pt-[30px]">
                By clicking "Get Started", you agree with Terms and Conditions,
                Privacy Policy, Subscription Terms
              </p>
              <p className="font-figtree font-medium text-[10px] leading-[12px] tracking-[0%] align-middle text-[#ABABAB] pb-[32px] sm:pb-[0px]">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Mobile App Preview */}
        <div className="sm:absolute sm:left-[-105px] sm:top-[140px] w-full z-[1] flex justify-center sm:justify-end">
          <Image
            src={homeTheme.src}
            alt="Fametonic App Preview"
            width={666}
            height={679}
            className="w-[390px] sm:w-[666px] h-[426px] sm:h-[679px]"
          />
        </div>
      </div>
    </section>
  )
}
