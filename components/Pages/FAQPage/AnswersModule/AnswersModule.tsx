import { useEffect, useState } from "react"
import { useTheme } from "../../../../providers/ThemeProvider"
import Accordion from "../../../../shared/Accordion"
import Media from "../../../../shared/Media"
import FadeInWhenVisible from "../../../FadeInWhenVisible"
import Content from "../../../Layout/Content"
import SearchInput from "./SearchInput"
import questionList from "./questionList.json"

const AnswersModule = () => {
  const { themeMode } = useTheme()
  const [searchKey, setSearchKey] = useState("")
  const [filterQuestions, setFilterQuestions] = useState([])

  useEffect(() => {
    const filtered = questionList.filter(
      (item) =>
        item.question.toLocaleLowerCase().search(searchKey.toLocaleLowerCase()) >= 0 ||
        item.content.toLocaleLowerCase().search(searchKey.toLocaleLowerCase()) >= 0,
    )

    setFilterQuestions(filtered)
  }, [searchKey])

  return (
    <div
      className="flex w-full
      px-[20px] md:px-0
      flex-col justify-center items-center"
    >
      <SearchInput setSearchKey={setSearchKey} searchKey={searchKey} />
      <FadeInWhenVisible>
        <Content>
          <div className="flex flex-col gap-y-[5px] md:gap-y-[20px] pb-[50px]">
            {filterQuestions.map((question, i) => (
              <Accordion
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                questionNumber={i + 1}
                question={`${question.question}`}
                className="border-[1px] border-[#D9D9D9] dark:border-[#29383C]
                overflow-hidden
                rounded-[6px] md:rounded-[20px]"
                content={question.content}
                questionClassName="font-poppins_medium 
                bg-[#F0F8FA] dark:bg-[#1A2629]
                border-b-[2px] 
                border-b-[#D9D9D9] dark:border-b-[#29383C]
                p-[15px]
                md:p-[19.2px] lg:p-[25.6px] lg:p-[32px]
                text-[15px] samsungS8:text-[17px] xs:text-[18px]
                md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]
                text-left md:text-center
                text-[#484848] dark:text-white"
                contentClassname="font-poppins
                p-[15px]
                md:p-[19.2px] lg:p-[25.6px] lg:p-[32px]
                text-[12px] md:text-[10.8px] lg:text-[14.4px] xl:text-[18px] 
                text-[#484848] dark:text-white"
                expandIcon={
                  <Media
                    type="image"
                    link={
                      themeMode === "light"
                        ? "/images/FAQ/chevron-down-gray.png"
                        : "/images/FAQ/chevron-down.png"
                    }
                    containerClasses="md:w-[31.2px] xl:w-[41.6px] lg:w-[52px]
                        md:h-[31.2px] xl:h-[41.6px] lg:h-[52px]
                        w-[14.65px] h-[14.65px]"
                  />
                }
                hideIcon={
                  <Media
                    type="image"
                    link={
                      themeMode === "light"
                        ? "/images/FAQ/chevron-up-gray.png"
                        : "/images/FAQ/chevron-up.png"
                    }
                    containerClasses="lg:w-[31.2px] xl:w-[41.6px] md:w-[52px]
                    lg:h-[31.2px] xl:h-[41.6px] md:h-[52px]
                    w-[14.65px] h-[14.65px]"
                  />
                }
              />
            ))}
          </div>
        </Content>
      </FadeInWhenVisible>
    </div>
  )
}

export default AnswersModule
