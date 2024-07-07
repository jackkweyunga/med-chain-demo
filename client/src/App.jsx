import { EthProvider } from './contexts/EthContext'
import { AlertProvider } from './contexts/AlertContext/AlertContext'
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <EthProvider>
      fdghjkdfjk
      <AlertProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </AlertProvider>
    </EthProvider>
  )
}

export default App
