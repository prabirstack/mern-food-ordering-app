import lightLogoImg from "../assets/logo-light.svg"
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
    </div>
  )
}
export default Footer
