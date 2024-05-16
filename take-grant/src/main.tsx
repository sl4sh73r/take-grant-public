import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { store } from "./app/store"
import App from "./App"
import Graph from "./page/Graph/Graph"
import {CreateNodes} from "./page/CreateNodes/CreateNodes"
import "./scss/index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="CreateNodes" element={<CreateNodes />} />
          <Route path="Graph" element={<Graph />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
