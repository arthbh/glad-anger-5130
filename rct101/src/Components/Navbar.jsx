import React from 'react'
import { Link } from 'react-router-dom'



const Links = [
    {path:'/',title:"Home"},
    {path:'/',title:"NEW"},
    {path:'/',title:"SHOP BY"},
    {path:'/women',title:"WOMEN"},
    {path:'/men',title:"MEN"},
    {path:'/bags',title:"BAGS"},
    {path:'/',title:"COACH (RE)LOVED"},
    {path:'/',title:"COACH INSIDER"},
    {path:'/',title:"SALE"},
]

const Navbar = () => {

  return (
<>

    <div style={{display:"flex",justifyContent:"space-around"}}>
    <p>Stores</p>
    <img src="https://cdn-icons-png.flaticon.com/512/9435/9435887.png" width="5%" height="5%" alt="" />
    <div >
        <input type="text" placeholder='Search' />
        <Link to="/wishlist" ><img src="https://cdn-icons-png.flaticon.com/512/1216/1216575.png" width="1.5%" height="30%"  alt="" /></Link>
        <Link to="login"><img src="https://cdn-icons-png.flaticon.com/512/2321/2321232.png"  width="1.5%" height="30%" alt="" /></Link>
        <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png"  width="1.5%" height="30%"  alt="" />
    </div>
    </div>
    <div style={{display:"flex", justifyContent:"space-evenly" }} >
        {Links.map((link)=> (
            <Link to={link.path} > {link.title} </Link> 
            ))}
    </div>
</>
  )
}

export default Navbar