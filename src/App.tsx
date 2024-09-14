import Home from './Components/Home/Home'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Language from './Components/Language/Language';
import Podcasts from './Components/Podcasts/Podcasts';
import Artists from './Components/Artists/Artists';
import Sliding from './Components/Sliding/Sliding';
import Gaana from './Components/Gaana/Gaana';
import Devotee from './Components/Devotee/Devotee';
import '../src/App.css'
import Masala from './Components/Masala/Masala';
import Motivation from './Components/Motivation/Motivation';
import Party from './Components/Party/Party';
import Romance from './Components/Romance/Romance';
import Sad from './Components/Sad/Sad';
import CommonPodcasts from './Components/CommonPodcasts/CommonPodcasts'
import Common1Songs from './Components/Common1Songs/Common1Songs';
import Common2Songs from './Components/Common2Songs/Common2Songs';
import Footer from './Components/Footer/Footer'


interface CustomAudioPlayerProps {
  songCount: any;
}

const App:React.FC<CustomAudioPlayerProps> = ({}) =>{

  return (
    <div>
       <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/Language" element={<Language></Language>} />
            <Route path="/podcasts" element={<Podcasts></Podcasts>} />
            <Route path="/Artists" element={<Artists></Artists>} />
            <Route path="/Navbar" element={<Navbar></Navbar>} />
            <Route path="/Sliding" element={<Sliding></Sliding>} />
            <Route path='/Gaana' element={<Gaana></Gaana>} />
            <Route path='/Devotee' element={<Devotee></Devotee>}/>
            <Route path='/Masala' element={<Masala></Masala>}/>
            <Route path='/Motivation' element={<Motivation></Motivation>}/>
            <Route path='/Party' element={<Party></Party>}/>
            <Route path='/Romance' element={<Romance></Romance>}/>
            <Route path='/Sad' element={<Sad></Sad>}/>
            <Route path='/CommonPodcasts' element={<CommonPodcasts></CommonPodcasts>}/>
            <Route path='/Common1Songs' element={<Common1Songs></Common1Songs>} />
            <Route path='/Common2Songs' element={<Common2Songs></Common2Songs>} />
            <Route path='/Footer' element={<Footer></Footer>}/>
          </Routes>
        </div>
        <div className=" app-audio-play">
    </div>
      </div>
    </Router>
    </div>
  )
}
export default App