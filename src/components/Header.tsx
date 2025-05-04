import Image from 'next/image'
import Link from 'next/link'
import image from '/public/assets/fametonicLogo.svg'

export default function Header() {
  return (
    <header className="z-[3] px-[29px] sm:px-[211px]  pt-[16px] sm:pt-[35px] pb-[16px] sm:pb-[57px] flex justify-end sm:justify-between items-center sm:items-start gap-[93px] sm:gap-0">
      <div className="flex items-center">
        <Image
          src={image.src}
          alt="Fametonic"
          width={173}
          height={74}
          className="h-[46px] sm:h-[74px] w-[108px] sm:w-[173px]"
        />
      </div>
      <div className=" flex sm:hidden flex-col justify-between w-[20px] gap-[4px] cursor-pointe">
        <span className="block  bg-white rounded-full border-[1.5px] border-white"></span>
        <span className="block  bg-white rounded-full border-[1.5px] border-white"></span>
        <span className="block  bg-white rounded-full border-[1.5px] border-white"></span>
      </div>
      <div className="hidden sm:flex items-center gap-6">
        <nav className="flex items-center gap-[40px]">
          <p className="font-figtree font-semibold text-[18px] leading-[100%] tracking-[0%] text-center align-middle text-[#A9A9A9] cursor-pointer">
            About us
          </p>
          <p className="font-figtree font-semibold text-[18px] leading-[100%] tracking-[0%] text-center align-middle text-[#A9A9A9] cursor-pointer">
            Contact
          </p>
        </nav>
      </div>
    </header>
  )
}
