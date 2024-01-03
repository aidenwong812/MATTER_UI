import Media from "../../../shared/Media"
import DFooterLogo from "./DFooterLogo"

const SocialButtons = () => {
  const socialLinks = [
    {
      link: "/images/Footer/discord.svg",
      blurLink: "/images/Footer/discord.png",
      className: "w-[28px] h-[22px]",
      href: "/",
    },
    {
      link: "/images/Footer/twitter.svg",
      blurLink: "/images/Footer/twitter.png",
      className: "w-[27px] h-[22px]",
      href: "/",
    },
    {
      link: "/images/Footer/opensea.svg",
      blurLink: "/images/Footer/opensea.png",
      className: "w-[29px] h-[26px]",
      href: "/",
    },
  ]

  return (
    <div className="flex flex-col col-span-2">
      <DFooterLogo />
      <pre
        className="font-poppins text-[#ffffffcc]
      xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
      py-[20px]"
      >
        {`Magni dolores eos qui ratione\nvoluptatem sequi nesciunt. Neque\nporro quisquam est, qui dolorem\nipsum quia dolor sit amet, consectetur,\nadipisci velit, sed quia non.`}
      </pre>
      <div className="flex gap-x-[50px] items-center">
        {socialLinks.map((item, i) => (
          <Media
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            link={item.link}
            blurLink={item.blurLink}
            containerClasses={item.className}
            type="image"
          />
        ))}
      </div>
    </div>
  )
}

export default SocialButtons
