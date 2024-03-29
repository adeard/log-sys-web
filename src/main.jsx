import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import store from './redux/store'
import HomePage from './pages/home'
import DetailPage from './pages/detail'

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage />
  },
  {
    path:"/detail",
    element:<DetailPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
