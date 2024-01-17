import Loading from "react-loading"
import Image from "../../../shared/Image"
import SeoHead from "../../SeoHead"

const LoadingPage = () => (
  <div
    className="w-screen h-screen relative
        flex items-center justify-center"
  >
    <SeoHead title="Matter | Loading..." />
    <Image
      link="/images/mini_logo.png"
      blurLink="/images/mini_logo.png"
      containerClasses="w-[82px] aspect-[82/64]"
      alt="not found icon"
    />
    <div
      className="absolute left-0 top-0
            w-full h-full flex justify-center items-center"
    >
      <Loading type="spin" color="black" height={200} width={200} />
    </div>
  </div>
)

export default LoadingPage
