import React from 'react'

const Trending = () => {
    const products=[{name:"rotatory pump",image:"images/pump.jpg"},{name:"golf cart",image:"images/golf.jpg"},{name:"refirgeration part",image:"images/refrigeration.jpg"},{name:"outdoor furniture",image:"images/furniture.jpg"},{name:"sports ball & equipment",image:"images/sport.jpg"},{name:"led street light",image:"images/street.jpg"}];
  return (
    <div>
      <div className='trending-container'>
        <h2>selected trending products</h2>
        <div className='products'>
            {products.map((val,index)=>{
                return (<>
                <div className='product-container'>
                <div className='product-container-image'>
                    <img src={val.image}/>
                </div>
                <p>{val.name}</p>
                </div>
                </>)
            })}
        </div>
      </div>
    </div>
  )
}

export default Trending
