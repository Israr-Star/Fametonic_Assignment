import PromotionBanner from '@/components/PromotionBanner'
import Header from '@/components/Header'
import './globals.css'
import Body from '@/components/Body'

export default function Home() {
  return (
    <div className="flex flex-col">
      <PromotionBanner />
      <Header />
      <Body />
    </div>
  )
}
