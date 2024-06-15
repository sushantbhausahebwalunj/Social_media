import { lazy } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import { Suspense } from "react";
import { LayoutLoader } from "./components/Layout/Loaders";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(
  () => import("./pages/Home")
  //lazy is used for codes spliting ...explaination ...so how does react code renders first it renders all components and then they display us page we on which we navigate and it take more time make minimise time  ..we implement lazy mode basically when we import any component through lazy mode it makes components lazy and therefore it renders on the time user navigate on it
);
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound =lazy(()=>import("./pages/NotFound"))

let user = true;

function App() {
  return (
    <BrowserRouter>
     <Suspense fallback={<LayoutLoader/>} >
     <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Route>

        <Route path="/login" element={<ProtectRoute user={!user} redirect="/" >
          <Login />
        </ProtectRoute>} />

        <Route path="/*" element={<NotFound />} />



      </Routes>
     </Suspense>
    </BrowserRouter>
  );
}

export default App;
