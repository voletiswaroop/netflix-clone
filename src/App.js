import React, { Suspense } from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const MoviesList = React.lazy(() => import('./components/moviesList/moviesList'));
const MovieCategory = React.lazy(() => import('./components/movieCategory/movieCategory'));

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      compeleteData: []
    }
  }
  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json').then(data => {
      this.setState({
        compeleteData: data.data.entries
      })
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    console.log(this.state.compeleteData, 'this.state.compeleteData');
    return (
      <div className="App-wrapper">
        <Header />
        <Router>
          <div>
            <Route exact path='/netflix-clone' render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <MovieCategory compeleteData={this.state.compeleteData} />
              </Suspense>
            )} />
            <Route exact path='/series' render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <MoviesList dataType="series" compeleteData={this.state.compeleteData} />
              </Suspense>
            )} />
            <Route exact path='/movie' render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <MoviesList dataType="movies" compeleteData={this.state.compeleteData} />
              </Suspense>
            )} /></div>
        </Router>
        <Footer />
      </div>
    )
  }
}