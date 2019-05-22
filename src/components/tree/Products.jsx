import React from 'react'
import Checkbox from './Checkbox'
import products from './products.json'

class ProductsTreeSelect extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      checkedItems: new Map(),
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const item = e.target.name
    console.log(item)
    const isChecked = e.target.checked
    console.log(isChecked)
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }))
  }

  handleLevel = products => {
    let temp = [];
    let newElements = products['children'];
    for (let i = 0; i < newElements.length; i++) {
      temp.push(
        <li key={ i }>
          <label>
            <Checkbox
              name={newElements[i].label}
              checked={this.state.checkedItems.get(newElements[i].label)}
              onChange={this.handleChange}
            />
            { newElements[i].label }
          </label>
          {newElements[i].hasOwnProperty('children') ? (
            <ul>{this.handleLevel(newElements[i])}</ul>
          ) : (
            ""
          )}
        </li>
      )
    }
    return temp
  }

  /* handleSublevel = products => {
    let temp = [];
    let newElements = products['children'];
    for (let i = 0; i < newElements.length; i++) {
      temp.push(
        <li key={ i }>
          <label>
            <Checkbox
              name={newElements[i].label}
              checked={this.state.checkedItems.get(newElements[i].label)}
              onChange={this.handleChange}
            />
            { newElements[i].label }
          </label>
        </li>
      );
    }
    return temp;
  }; */

  render() {

    return(
      <ul>
        {
          products.map((product, index) => {
            return(<li key={index}>
              <label>
                <Checkbox
                  name={product.label}
                  checked={this.state.checkedItems.get(product.label)}
                  onChange={this.handleChange}
                />
                {product.label}
              </label>
              {product.hasOwnProperty('children') ? (
                <ul>{this.handleLevel(product)}</ul>
              ) : (
                  ""
                )}
            </li>)
          })
        }
      </ul>
    )
  }

}

export default ProductsTreeSelect
