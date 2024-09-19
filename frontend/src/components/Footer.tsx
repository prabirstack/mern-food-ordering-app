import lightLogoImg from "../assets/logo-light.svg"
import { Separator } from "./ui/separator"
const Footer = () => {
  return (
    <div className="bg-stone-800 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span>
          <img src={lightLogoImg} alt="Svaggy light logo" className="h-14" />
        </span>
        <span className="text-white text-sm font-medium flex gap-4 mt-6">
          <span className="hover:text-red-500">Terms & Conditions</span>
          <span className="hover:text-red-500">Data Protection Terms</span>
          <span className="hover:text-red-500">Cookies</span>
        </span>
      </div>
      <div className="container mx-auto flex flex-col justify-between items-center mt-6">
        <Separator className="bg-stone-700 mb-6" />
        <span className="text-stone-400 text-sm">©SVAGGY 2024-2025 Powered by CloudEventix</span>
      </div>
    </div>
  )
}
export default Footer
