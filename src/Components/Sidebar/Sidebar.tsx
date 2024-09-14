import img2 from '../../assets/images/logo/logo1.jpg'
import {Link, useLocation} from 'react-router-dom'
import RadioIcon from '@mui/icons-material/Radio';
import './Sidebar.css'



function Sidebar() {
  const location = useLocation();
  const getnavlink = (path:any)=>{
    return location.pathname === path?'sidebar-link active':'sidebar-link'
  }
    return (
        <div className='sidebar-main-common'>

    <nav className="Sidebar-cmn">
        <div className='home-logo-cmn'>
                <img src={img2} className='logo' />
                </div>



      <ul className='sidebar-ul'>
        <li className='sidebar-li'>
          <Link to="/" className={getnavlink('/')}><i className='fa fa-home sidebar-icon'></i> <span className='sidebar-link-span'>Home</span></Link>
        </li>
        <li className='sidebar-li'>
          <Link to="/Podcasts" className={getnavlink('/Podcasts')}>
            <i className='fa fa-podcast sidebar-icon'></i> 
            <span className='sidebar-link-span'>Podcasts</span></Link>
        </li>
        <li className='sidebar-li'>
          <Link to="/Language" className={getnavlink('/Language')}><span className='sidebar-icon'><RadioIcon></RadioIcon></span><span className='sidebar-link-span'>Radio</span></Link>
        </li>
        <li className='sidebar-li'>
          <Link to="/Artists" className={getnavlink('/Artists')}><i className='fa fa-user sidebar-icon'></i> <span className='sidebar-link-span'>Artists</span></Link>       
        </li>
        <li>
          <i className='fa fa-user'></i>
        </li>
        
      </ul>
    </nav>       
        </div>
    )
}

export default Sidebar;