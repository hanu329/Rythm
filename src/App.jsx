import Pagination,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Two } from './components/Two'
import { Indus } from './components/Indus'
import { Form } from './components/Form'
import { Tic } from './components/Tic'
import  ChartData  from './components/ChartData.jsx'
import { ChatkitProvider, TokenProvider } from '@pusher/chatkit-client-react';
import Chat from './components/Chat';

const instanceLocator = "3ddf23dd3372af175d59";
const tokenProvider = new TokenProvider({
  url: '05acc182587c33c22331',
});

function App() {



  return (
    <>
    {/* <Form />
    <hr />
<Tic />
<hr /> 
<ChartData />*/}

<ChatkitProvider
      instanceLocator={instanceLocator}
      tokenProvider={tokenProvider}
      userId="1707644"
    >
      <Chat />
    </ChatkitProvider>
    </>
  )
}

export default App



