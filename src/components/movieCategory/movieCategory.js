import React, { Component } from 'react'
import './movieCategory.css'
import placeholderImg from '../../assets/placeholder.png'

export default class movieCategory extends Component {

  render() {
    console.log(this.props.compeleteData, 'this.props.compeleteData');
    let compeleteData = this.props.compeleteData && this.props.compeleteData ? this.props.compeleteData : null;
    let categoriesList = [], lookup = {};
    compeleteData && compeleteData.map(item => {
      let name = item.programType;
      if (!(name in lookup)) {
        lookup[name] = 1;
        categoriesList.push(name);
      }
      return true
    })
    categoriesList = categoriesList && categoriesList.length > 0 && categoriesList.map((item, index) => {
      return (
        <a href={`${item}`} key={index}>
          <div className="category-img">
            <img src={placeholderImg} alt='category img' />
            <p>{item}</p>
          </div>
          <p>Popular {item}</p>
        </a>
      )
    })
    return (
      <div className="categories-wrapper" >
        <h2>Popuplar Titles</h2>
        <div className="container">
          <div>{categoriesList}</div>
        </div>
      </div>
    )
  }
}
