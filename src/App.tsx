import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { routes } from "./constant/routes-config";
import { AppLayout } from "./components/layout";

const AppContent = () => {
  const location = useLocation();

  return (
    <AppLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routes.map((route) => {
            if (route.path === "/projects") {
              return (
                <Route key={route.path} path={route.path}>
                  {route.children.map((child) => (
                    <Route
                      key={child.path}
                      path={child.path}
                      element={<child.element />}
                    />
                  ))}
                </Route>
              );
            }
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            );
          })}
        </Routes>
      </AnimatePresence>
    </AppLayout>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;