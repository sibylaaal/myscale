import { RouterProvider } from "react-router-dom"
import { router } from "./routing"
import { store } from "./redux/store"
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from "react-query"
import "./index.css"

function App() {
const clients= new QueryClient()
  return (
  <>

<Provider store={store}>
<RouterProvider  router={router}  />
</Provider>
  </>
  )
}

export default App
