import './Product.css';
import ReactStars from 'react-rating-stars-component';
import product from './Product_List';

const Product = () => {
    const url = 'https://lh3.googleusercontent.com/ww92QqAfsj77p1ZHqqzc3DqPn3jmiqDk54DdaPqZkQ6Ftd7XCc3-Nj9qbygXcwjF3olOCBNAfftszEQVYDLKPg=s640-c-rw-v1-e365';
  return (
      <>
      <div className="product__details-title">
          <h2>Just For You</h2>
      </div>
    <div className="product__details">
        {product.map((p) => {
            return (
                <div className="product__details-list" key={p.id}>
            <img src={p.img} alt="Mushroom" />
            <h5>{p.title}</h5>
            <p>{p.title}</p>
            <ReactStars
                count={p.count}
                size={24}
                activeColor="#ffd700"
            />
            <p>$<span>{p.price}</span></p>
        </div>
            );
        })}
    </div>
      </>
  )
}

export default Product;