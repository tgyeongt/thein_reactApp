import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-orange-50 text-neutral-600 dark:bg-neutral-950 dark:text-neutral-300">
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
      </main>

      <Footer />
    </div>
  )
}

export default App
