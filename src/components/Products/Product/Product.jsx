import React, {useState} from 'react';
import {ProductStyle} from "../../../pages/Home/HomeStyle";
import {USDollar} from "../../../middleware/PriceFormatter";
import {useDispatch} from "react-redux";
import {ProductType} from "../../../constants/ProductType";
import {addToCart} from "../../../action/ProductAction";
import {Button} from "../../index";
import {Link} from "react-router-dom";

function Product({product, index}) {

    const dispatch = useDispatch()
    const [saved, setSaved] = useState(false);

    function ProductSaveButton({productItem}) {

        const handleAdd = () => {
            setSaved(!saved)
            dispatch({type: ProductType.TOOGLE_FAVOURITE, payload: productItem.id})
        };

        const handleRemove = () => {
            setSaved(!saved)
            dispatch({type: ProductType.TOOGLE_FAVOURITE, payload: productItem.id})
        }

        return (
            <i>{productItem.isFavourite ? <i className="fa-solid fa-heart" onClick={handleRemove}></i> :
                <i className="fa-light fa-heart" onClick={handleAdd}></i>}  </i>
        );
    }

    function ProdcutButton({productItem, index}) {

        const handleAdd = (productItem) => {
            dispatch(addToCart(productItem))
        }
        return (
            <Button style={{fontSize: "12px"}} onClick={() => handleAdd(productItem)}>Add to Cart</Button>
        );
    }

    return (
        <ProductStyle.ProdcutCard key={product.id}>
         <Link to="/">
             <img src={product.image} alt={product.productName}/>
             <ProductStyle.Price>{USDollar.format(product.price)}</ProductStyle.Price>
             <ProductStyle.ProductInfo>
                 <span>{product.productName} {product.descr.slice(0, 20)}</span>
                 <div>
                     <div>
                         <i className="fa-light fa-eye"></i>
                         <ProductSaveButton productItem={product}/>
                     </div>
                     <ProdcutButton productItem={product} index={index}/>
                 </div>
             </ProductStyle.ProductInfo>
         </Link>
        </ProductStyle.ProdcutCard>
    );
}

export default Product;