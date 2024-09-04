import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import './App.css'
import { SwisstronikPlugin } from '@swisstronik/web3-plugin-swisstronik';
import { MetamaskPlugin } from 'web3-metamask-plugin';
import {Web3} from 'web3';

function App() {

  const web3 = new Web3(window.ethereum);
  web3.registerPlugin(new SwisstronikPlugin());
  web3.registerPlugin(new MetamaskPlugin());

  async function connectToSwisstronik() {
    console.log("calling fn")
      await web3.metamask.connectWallet();
      await web3.metamask.switchToSwisstronik();
  }

  return (
    <div>
      <RouterProvider router={router} />
      <button onClick={connectToSwisstronik}>Connect</button>
    </div>
  )
}

export default App
