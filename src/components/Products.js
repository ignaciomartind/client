import ProductItem from './ProductItem'

import './styles/products.css'

function Products(props){

    return<div className="products" id="products">
        <h2>Products.</h2>
        <div className="products-container">
            {props.data.map(product => <ProductItem key={product.title} data={product}/>)}
        </div>
    </div>
}

export default Products