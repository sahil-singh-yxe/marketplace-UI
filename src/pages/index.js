
import Home03 from "./Home03";
import Explore01 from "./Explore01";
import ItemDetails01 from "./ItemDetails01";
// import OwnItemDetails from "./OwnItemDetails";
import OwnCreation from "./OwnCreation";
import WalletConnect from "./WalletConnect";
import CreateItem from "./CreateItem";
import Login from "./Login";
import SignUp from "./SignUp";
import NoResult from "./NoResult";


const routes = [
  { path: '/', component: <Home03 />},
  { path: '/explore', component: <Explore01 />},
  { path: '/item-details/:id', component: <ItemDetails01 />},
  // { path: '/own-item-details/:id', component: <OwnItemDetails />},
  { path: '/own-creations', component: <OwnCreation />},
  { path: '/wallet-connect', component: <WalletConnect />},
  { path: '/create-item', component: <CreateItem />},
  { path: '/login', component: <Login />},
  { path: '/sign-up', component: <SignUp />},
  { path: '/no-result', component: <NoResult />},
]

export default routes;