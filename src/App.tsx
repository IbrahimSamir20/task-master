import { RouterProvider } from 'react-router-dom'
import router from './core/Routes/routes'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App