import Media from "../../../shared/Media"

const DFooterLogo = () => (
  <div className="flex items-center gap-x-[10px]">
    <Media
      type="image"
      link="/images/Footer/d_logo.svg"
      blurLink="/images/Footer/d_logo.png"
      containerClasses="w-[41px] h-[45px]"
    />
    <p
      className="xl:text-[25px] lg:text-[20px] md:text-[15px]
              uppercase 
              text-[#73B3C2]
              font-poppins_bold"
    >
      Financial <span className="text-[#B4DCE3]">Verse</span>
    </p>
  </div>
)

export default DFooterLogo
