import * as React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { FavoritesContextProvider } from "./store/favorites-context"

import App from "./App"

const rootEl = document.getElementById("root")

render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  rootEl,
)
