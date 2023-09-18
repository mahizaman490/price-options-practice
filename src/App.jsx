import NavBar from './components/NavBar/NavBar'
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import PriceOptions from './components/PriceOptions/PriceOptions'
function App() {
 

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-5xl bg-rose-500'>Vite + React</h1>
<PriceOptions></PriceOptions>
    </>
  )
}

export default App
