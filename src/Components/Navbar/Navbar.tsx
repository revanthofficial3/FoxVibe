import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useEffect,useState } from 'react';
import SearchSong from '../SongList.json';
import img2 from '../../assets/images/logo/logo1.jpg';

interface data1{
    search:string;
  }
  interface data2{
    comment:string;
  }

function Navbar() {
    
  const getnavlink1 = (path:any)=>{
    return location.pathname === path?'section2-nav active1':'section2-nav'
  }
  const navigate = useNavigate();
  const handleGoBack=()=>{
    navigate(-1);
  }
  const handleGoFront=()=>{
    navigate(1);
  }
  const pathname = useLocation;
  const [isFirstLoad,setIsFirstLoad] = useState(true);
  useEffect(()=>{
    if(isFirstLoad){
    window.scrollTo(0,0);
    setIsFirstLoad(false);}
  }),[isFirstLoad,pathname]

  const [_products, setProduct] = useState(SearchSong);
  const [searchbar,setSearchbar] = useState<data1>({
    search : '',
  })
  const [error,setError] = useState<data2>({
    comment:'',
  })
  

  const handleChange=(e:any)=>{
    const {name,value} = e.target;
    
    setSearchbar({
        ...searchbar,
        [name] : value
    })    
}

let a = 0;
  const producthandle=(item:any)=>{
    
      const updateItem = SearchSong.filter((e:any)=>{
        if(e.movie === item){
          a=1;
        return e.movie === item;

        }
      })

        if(a==1){
          console.log("hi");

          setError({
            ...error,
            comment:""
          })
        navigate('/Common1Songs',{state:{assign:item}})
          }
          else{
            console.log("error")
            setError({
              ...error,
              comment:"Incorrect | Enter Small Letter Only"
            })
          } 
    setProduct(updateItem);
      
      

      setSearchbar({
        search:""
      })
  }


    return ( 
        <div>
            
            <section className='section2'>
            <div className='home-logo-cmn-navbar'>
                <img src={img2} className='logo-navbar' />
                </div>
                

                <div className='section2-first-cmn'>
                <div className='navbar-order1'>
                <i className="fa fa-angle-left section2-arrow-hide" onClick={handleGoBack}></i>
                <i className='fa fa-angle-right section2-arrow' onClick={handleGoFront}></i>
                </div>

                
                
                <div className="search-cmn navbar-order2">
                <input type="search" placeholder='Search Movies'  className='section2-search' onChange={handleChange} name='search'
            value={searchbar.search} autoComplete="off"/>
                
                <i className="fa fa-search search-icon1" onClick={()=>producthandle(searchbar.search)}></i>
                <p className='product-error'>{error.comment}</p>
                </div>
                <div className='navbar-order3'>
                    <div className='section2-account'>R</div>
                </div>
                </div>
             
             
             <div className='section2-nav-cmn-2'>
            <div className='section2-nav-cmn'>
                <Link to="/Gaana" className={getnavlink1('/Gaana')}>Gaana</Link>
                
                <Link to="/Romance" className={getnavlink1('/Romance')}>Romance</Link>

                <Link to="/Devotee" className={getnavlink1('/Devotee')}>Devotee</Link>

                <Link to="/Party" className={getnavlink1('/Party')}>Party</Link>

                <Link to="/Motivation" className={getnavlink1('/Motivation')}>Motivation</Link>

                <Link to="/Sad" className={getnavlink1('/Sad')}>Sad</Link>

                <Link to="/Masala" className={getnavlink1('/Masala')}>Masala</Link>
            </div> 
            </div>
            
            </section>
            
        </div>
     );
}

export default Navbar;