import Content from '../Content/Content';
import Navbar from '../Navbar/Navbar'
import Sliding from '../Sliding/Sliding'
import Footer from '../Footer/Footer'
import './Home.css'

function Home(){
    return (
        <div className='home-cmn'>

            <div className='home-cmn1'>
                <Navbar></Navbar>
                <div className='home-cmn2'>
                <Sliding></Sliding>
                <Content></Content>
                
                </div>
                <Footer></Footer>
            </div>
            
        </div>
    )
}
export default Home;