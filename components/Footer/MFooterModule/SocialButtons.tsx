import Media from "../../../shared/Media"

const SocialButtons = () => {
  const socialLinks = [
    {
      link: "/images/Footer/m_discord.svg",
      blurLink: "/images/Footer/m_discord.png",
      className: "w-[27.59px] h-[21px]",
      href: "/",
    },
    {
      link: "/images/Footer/m_twitter.svg",
      blurLink: "/images/Footer/m_twitter.png",
      className: "w-[26.35px] h-[21.56px]",
      href: "/",
    },
    {
      link: "/images/Footer/m_opensea.svg",
      blurLink: "/images/Footer/m_opensea.png",
      className: "w-[28.06px] h-[25.26px]",
      href: "/",
    },
  ]

  return (
    <div
      className="w-full py-[30px]
        flex gap-x-[50px] items-center justify-center"
    >
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
  )
}

export default SocialButtons
