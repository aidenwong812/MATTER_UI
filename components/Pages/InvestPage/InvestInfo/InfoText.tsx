const InfoText = ({ amount, text }) => (
  <div className="text-[#484848] dark:text-white font-poppins">
    <p className="md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]">{amount}</p>
    <p className="md:text-[10.8px] lg:text-[14.4px] text-[18px]">{text}</p>
  </div>
)

export default InfoText
