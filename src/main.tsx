import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { BlogProvider } from "./context/BlogContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </UserProvider>
  </StrictMode>
);
