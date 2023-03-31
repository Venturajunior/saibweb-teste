import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./components/Routes";

export default function App() {
  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  );
}

