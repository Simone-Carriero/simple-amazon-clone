import {
  Routes,
  Route
} from 'react-router-dom'

import Header from "./routes/header/header.component";
import Home from "./routes/home/home.component"
import Checkout from './routes/checkout/checkout.component';
import Authentication from './routes/authentication/authentication.component';
import NotFound from './routes/not-found/not-found.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='authentication' element={<Authentication />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
