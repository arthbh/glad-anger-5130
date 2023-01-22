import React from 'react'
import Footer from './Footer'
import ProductCard from "./ProductCard"

const Women = () => {
    const [product,setProduct] = React.useState([])

    const getData = ()=> {
        return fetch(`http://localhost:3000/women`).then((res)=>res.json())
      }
      async function fetchData(){
        try {
        let data = await getData()
        setProduct(data)
        console.log(data)
        // setTotalPages(data.totalPages);
        // setLoading(false)
        } catch (error) {
          console.log(error);
        //   setLoading(false) 
        }
       
      }
      React.useEffect(()=> {
        fetchData()
      },[])
  return (
    <>
<div>
    <p style={{fontSize:"14px",marginLeft:"-1110px"}}>/ Styles For Men / Men's Styles</p>
    <h1 style={{fontSize:"30px",marginLeft:"-1110px"}} >
        WOMEN'S STYLES
    </h1>
    <div style={{display:"grid",width:"86%",margin:"auto",height:"250px",backgroundColor:"#ebebeb"}} >
        <h1>Women's View All</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",width:"60%",margin:"auto"}}>
           <div style={{cursor:"pointer"}} > 
            <img src="https://images.coach.com/is/image/Coach/c9169_blk_a0?$desktopProductTile$" alt="" width="40%" />
            <p>BAGS</p>
            </div>
            <div style={{cursor:"pointer"}}>
            <img src="https://images.coach.com/is/image/Coach/97739_blk_a0?$desktopProductTile$" alt="" width="40%" />
            <p>WALLETS</p>
            </div>
            <div style={{cursor:"pointer"}}>
            <img src="https://images.coach.com/is/image/Coach/c5754_ria_a0?$tabletProductTile$" alt=""  width="40%"/>
            <p>CLOTHES</p>
            </div>
            <div style={{cursor:"pointer"}}>
            <img src="https://images.coach.com/is/image/Coach/g5025_cqgy_a0?$tabletProductTile$" alt=""  width="40%"/>
            <p>SHOES</p>
            </div>
            <div style={{cursor:"pointer"}}>
            <img src="https://images.coach.com/is/image/Coach/64099_bkma_a0?$tabletProductTile$" alt=""  width="40%"/>
            <p>ACCESSORIES</p>
            </div>
        </div>
    </div>
</div  >
<div>
    Sort by: <button>Sort By asc</button><button>Sort By desc</button>
</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",marginTop:"70px",width:"80%"}} >
{product.map((item)=> (
    <ProductCard key={item.imageUrl} {...item} />
))}
    </div>
    <Footer/>
    </>
  )
}

export default Women