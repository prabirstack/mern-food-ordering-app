import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-red-600">ORDER. EAT. REPEAT.</h1>
        <span className="text-sm sm:text-base md:text-xl px-6">
          Indulge in flavours of the Czech Republic with <span className="text-red-500">SVAGGY</span> - your local delivery app!
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="Svaggy app screenshort in mobile" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter text-stone-700">Get a CZK 500 instantly after registering!</span>
          <span className="text-stone-600">Download the SVAGGY app for faster ordering and personalized recommendations</span>
          <img src={appDownloadImage} alt="" />
        </div>
      </div>
    </div>
  )
}
export default HomePage
