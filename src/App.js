import React from 'react';

import './App.css';
import {connect} from 'react-redux'

import routes from './routes'
import Loading from './Components/Loading/Loading';

function App(props) {
  return (
    <div className="App">
    {routes}
    {props.loading
    ?
    <Loading />
    :
    null
    }
    
    </div>
  );
}
const mapStateToProps=(reduxState)=>{
  return reduxState
}
export default connect(mapStateToProps)(App);


//mapstatetoprops, create ternary (below routes) checks if props.loading is true, return loading gif. If not, return null. In userReducer create action to set loading to false, true, or null.