import { Icons } from "./resolver"

export type IconsType = keyof typeof Icons

interface IIcon {
  name: IconsType
  size: number
  className?: string
}

const Icon = ({ name, size, className }: IIcon) => {
  const IconSVG = Icons[name]

  return <IconSVG size={size} className={className} />
}

const defaultProps: Partial<IIcon> = {
  size: 25,
}

Icon.defaultProps = defaultProps

export default Icon
