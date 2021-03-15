import React, { Component, Fragment } from 'react'
import './moviesList.css'

export default class moviesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seriesList: false,
      moviesList: false,
    }
  }

  componentDidMount() {

    if (this.props.dataType && this.props.dataType === 'movies') {
      this.setState({ moviesList: true, seriesList: false })
    } else if (this.props.dataType && this.props.dataType === 'series') {
      this.setState({ moviesList: false, seriesList: true })
    }
  }

  render() {
    let compeleteData = this.props.compeleteData && this.props.compeleteData ? this.props.compeleteData : null;
    let { moviesList, seriesList } = this.state;
    let seriesItemList, moviesItemList, movieCounter = 0, seriesCounter = 0;

    seriesItemList = compeleteData && compeleteData.map((item, index) => {
      return (
        <Fragment>
          {item.programType === 'series' && item.releaseYear >= 2010 && seriesCounter++ <= 20 ?
            <li className="category-item" key={index}>
              <img src={item.images["Poster Art"].url} alt='category img' />
              <p>{item.title}</p>
            </li>
            : ''
          }
        </Fragment>
      )
    })
    moviesItemList = compeleteData && compeleteData.map((item, index) => {
      return (
        <Fragment>
          {item.programType === 'movie' && item.releaseYear >= 2010 && movieCounter++ <= 20 ?
            <li className="category-item" key={index}>
              <img src={item.images["Poster Art"].url} alt='category img' />
              <p>{item.title}</p>
            </li>
            : ''
          }
        </Fragment >
      )
    })
    return (
      <div className="categories-wrapper" >
        <h2>Popuplar {this.props.dataType}</h2>
        <div className="container">
          {seriesList ?
            <ul className="categories-list">{seriesItemList}</ul>
            : moviesList ? <ul className="categories-list">{moviesItemList}</ul>
              : ''}
        </div>
      </div>
    )
  }
}
