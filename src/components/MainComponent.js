import React from 'react';
// import logo from './logo.svg';


import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
  
  constructor(props){
    super(props);
      this.state={
        dishes : DISHES,
      };
    
  }
  //     onDishSelect(dishId) {
  //       this.setState({ selectedDish: dishId});
  // }

  render() {

    const HomePage = () => {
      return(
          <Home/>
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>   
        <Footer/>
      </div>
    );
  }
}

export default Main;
