import Media from "../../../shared/Media"

const MFooterLogo = () => (
  <div className="pb-[30px]">
    <Media
      type="image"
      link="/images/Footer/m_logo.svg"
      blurLink="/images/Footer/m_logo.png"
      containerClasses="w-[185px] h-[34px]"
    />
    <p
      className="font-poppins text-[12px]
            text-[#ffffffcc] pt-[20px]"
    >
      Magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
      ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
    </p>
  </div>
)

export default MFooterLogo
