
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./components/theme-provider"
import Hero from "./screens/Hero"

const App = () => {

  return (
    <ThemeProvider>
      <div >
        <Navbar />
        <Hero />
      </div>
    </ThemeProvider>
  )
}

export default App