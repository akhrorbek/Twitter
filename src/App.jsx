import { useState } from 'react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Sections/Home';
import Explore from './components/Sections/Explore';
import Notification from './components/Sections/Notification';
import Message from './components/Sections/Message';
import Bookmarks from './components/Sections/Bookmarks';
import Lists from './components/Sections/Lists';
import Feeds from './components/Sections/Feeds';
import Profile from './components/Sections/Profile';
import More from './components/Sections/More';
import {Routes, Route} from 'react-router-dom';
import './main.scss';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper container'>
      <Header />
      <main>
        <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/home" element={ <Home />} />
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/notify" element={<Notification/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/bookmark" element={<Bookmarks/>}/>
        <Route path="/list" element={<Lists/>}/>
        <Route path="/profile" element={ <Profile />} />
        <Route path="/more" element={<More/>}/>
        </Routes>
      </main>
      <Feeds />
    </div>
  )
}

export default App
