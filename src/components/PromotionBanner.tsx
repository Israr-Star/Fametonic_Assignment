export default function PromotionBanner() {
  return (
    <div className="promotion-banner w-full py-[20px] sm:py-[10px] px-[20px] sm:px-4 text-center text-white">
      <p>
        <span className="font-figtree font-extrabold text-[16px] sm:text-[22px] leading-[24px] tracking-[0%] align-middle text-[#00E7F9]">
          🚀 FRESH BEGINNINGS SALE:
        </span>
        {/* Extra 25% OFF, Limited Spots - start your Journey today! */}
        <span className="font-figtree font-semibold text-[16px] sm:text-[22px] leading-[24px] tracking-[0%] align-middle pl-[4px]">
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </p>
    </div>
  )
}
