import { Component } from 'react'
import './shopItemClass.css'

export default class ShopItemClass extends Component {
  render() {
    const {item: {brand, title, description, descriptionFull, currency, price}} = this.props
    return (
        <div className="main-content">
        <h2>
          {brand}
        </h2>
  
        <h1>
          {title}
        </h1>
  
        <h3>
          {description}
        </h3>
  
        <div className="description">
          {descriptionFull}
        </div>
  
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
  
        <div className="divider"></div>
  
        <div className="purchase-info">
            <div className="price">
              {`${currency}${price}`}
            </div>
  
            <button>
              Добавить в корзину
            </button>
        </div>
      </div>
    )
  }
}
