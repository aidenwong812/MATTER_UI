import { FC } from "react"
import Media from "../../../../shared/Media"

interface SingleContactProps {
  link: string
  blurLink: string
  label: string
  data: string
}

const SingleContact: FC<SingleContactProps> = ({ link, blurLink, label, data }) => (
  <div className="flex gap-x-[15px]">
    <div
      className="xl:w-[30px] xl:h-[30px]
              lg:w-[24px] lg:h-[24px]
              md:w-[18px] md:h-[18px]
              w-[30px] h-[30px]
              bg-[#6DB2C1] rounded-md
              flex justify-center items-center"
    >
      <Media
        type="image"
        link={link}
        blurLink={blurLink}
        containerClasses="xl:w-[24px] xl:h-[24px]
        lg:w-[19.2px] lg:h-[19.2px]
        md:w-[14.4px] md:h-[14.4px]
        w-[22.5px] h-[22.5px]"
      />
    </div>
    <div>
      <p
        className="font-poppins_semibold
              md:text-[12px] lg:text-[16px] xl:text-[20px]
              text-[#484848] dark:text-white"
      >
        {label}
      </p>
      <p
        className="font-poppins
              md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
              text-[#484848] dark:text-white"
      >
        {data}
      </p>
    </div>
  </div>
)

export default SingleContact
