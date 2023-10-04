import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../Style/GlobalStyle.js"
import LogIn from "./LogIn.js"
import SignIn from "./SignIn.js";
import Products from "./Products.js";
import UserProvider from "../Context/UserContext.js";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<LogIn />}></Route>
          <Route path='/cadastro' element={<SignIn />}></Route>
          <Route path='/produtos' element={<Products />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>

  );
}
