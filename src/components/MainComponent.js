import React from 'react';
// import logo from './logo.svg';


import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos,fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => 
  dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders())
});

class Main extends React.Component {
  
  //     onDishSelect(dishId) {
  //       this.setState({ selectedDish: dishId});
  // }
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchLeaders();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
  render() {

    const HomePage = () => {
      return(
          <Home
          dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}

          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
          
          leader={this.props.leaders.leaders.filter((leader)=> leader.featured)[0]}
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
          />
      );
    }

    
    const DishWithId = ({match}) => {
      return(
          
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            addComment={this.props.addComment}
          />
      );
    };

    const Aboutus =() => {
      return(
        <About leaders={this.props.leaders.leaders}
        isLoading={this.props.leaders.isLoading}
            errMess={this.props.leaders.errMess}/>

      );
    }
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route path='/contactus' component={()=> <Contact 
              resetFeedbackForm={this.props.resetFeedbackForm}/>} />
              <Route path='/aboutus' component={Aboutus}/>
              <Redirect to="/home" />
          </Switch>   
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
