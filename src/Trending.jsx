import React from 'react'

const Trending = () => {
    const products=[{name:"rotatory pump",image:"images/pump.jpg"},{name:"golf cart",image:"images/golf.jpg"},{name:"refirgeration part",image:"images/refrigeration.jpg"},{name:"outdoor furniture",image:"images/furniture.jpg"},{name:"sports ball & equipment",image:"images/sport.jpg"},{name:"led street light",image:"images/street.jpg"}];
  return (
    <div className='container-fluid'>
      <div className='trending-container'>
      <h3 className='px-4 py-4'>selected trending products</h3>
        <div className='products px-2 py-2'>
        
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
