import React from 'react'
import { Link,NavLink } from 'react-router-dom'



const Links = [
    {path:'/',title:"Home"},
    {path:'/new',title:"NEW"},
    {path:'/shop',title:"SHOP BY"},
    {path:'/women',title:"WOMEN"},
    {path:'/men',title:"MEN"},
    {path:'/bags',title:"BAGS"},
    {path:'/coach',title:"COACH (RE)LOVED"},
    {path:'/insi',title:"COACH INSIDER"},
    {path:'/sale',title:"SALE"},
]

const Navbar = () => {
    const defaultStyle = {
        color: "grey",
        textDecoration: "none"
      };
      const activeStyle = {
        color: "red",
        textDecoration: "none",
        cursor: "pointer"
      };
  return (
<>
<div>
<h1>COACH</h1>
    <div style={{marginLeft:"1050px",marginTop:"-50px"}}>
        <input type="text" placeholder='Search' style={{padding:"10px 20px"}} />
        <Link to="/wishlist" ><img src="https://cdn-icons-png.flaticon.com/512/1216/1216575.png" width="5%" height="30%"  alt="" style={{marginLeft:"15px",marginTop:"10px"}}  /></Link>
        <Link to="login"><img src="https://cdn-icons-png.flaticon.com/512/2321/2321232.png"  width="5%" height="30%" alt="" /></Link>
        <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png"  width="5%" height="30%"  alt="" />
    </div>
    </div>
    <div style={{display:"flex",gap:"60px",marginLeft:"280px",marginTop:'20px' }} >
        {Links.map((link)=> (
            <NavLink style={({ isActive }) => {
                return isActive ? activeStyle : defaultStyle;
              }} key={link.path} to={link.path}>{link.title}</NavLink> 
            ))}
    </div>
</>
  )
}

export default Navbar