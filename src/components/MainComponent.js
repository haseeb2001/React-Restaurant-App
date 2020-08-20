import React from 'react';
// import logo from './logo.svg';


import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
  
  constructor(props){
    super(props);
      this.state={
        dishes : DISHES,
        comments:COMMENTS,
        leaders:LEADERS,
        promotions:PROMOTIONS
      };
    
  }
  //     onDishSelect(dishId) {
  //       this.setState({ selectedDish: dishId});
  // }

  render() {

    const HomePage = () => {
      return(
          <Home
          dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
          promotion={this.state.promotions.filter((promotion)=> promotion.featured)[0]}
          leader={this.state.leaders.filter((leader)=> leader.featured)[0]}

          />
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/contactus' component={Contact} />
              <Redirect to="/home" />
          </Switch>   
        <Footer/>
      </div>
    );
  }
}

export default Main;
