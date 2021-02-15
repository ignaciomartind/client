function ProductItem(props){

    return <div className="product-item">
                <div className="product-img-container">
                    <img src={props.data.img} />
                    <p>{props.data.title}</p>
                </div>
                <p className="product-price">{props.data.price}</p>
            </div>
}

export default ProductItem