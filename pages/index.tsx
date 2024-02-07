import HomePage from "../components/Pages/HomePage"
import { HomePageProvider } from "../providers/HomePageProvider"

const Home = () => (
  <HomePageProvider>
    <HomePage />
  </HomePageProvider>
)

export default Home
