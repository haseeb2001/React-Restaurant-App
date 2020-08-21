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
import About from "./AboutComponent";
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

    
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    const Aboutus =() => {
      return(
        <About leaders={this.state.leaders}/>

      );
    }
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route path='/contactus' component={Contact} />
              <Route path='/aboutus' component={Aboutus}/>
              <Redirect to="/home" />
          </Switch>   
        <Footer/>
      </div>
    );
  }
}

export default Main;
