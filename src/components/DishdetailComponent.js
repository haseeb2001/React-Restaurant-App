import React, {Component} from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { DISHES } from '../shared/dishes';


class DishDetail extends Component{

    constructor(props){
        super(props);

    }


    renderDish(dish){
        
        if(dish != null)
            return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle> {dish.name}
                    </CardTitle>
                    <CardText>{dish.description} </CardText>
                </CardBody>
            </Card>
        );
       else
        return(
            <div></div>
            );
    }

    renderComments(dish){
        
        if(dish != null)
            {
                const my_comments=dish.comments.map((comment)=>{
                    const date= new Date(comment.date)
                    return(
                        <div key={comment.id} >
                        <p>{comment.comment}</p>
                    <p>--{comment.author}, {date.toDateString().slice(4,)}</p>
                        </div>   
                    );
                });
                return(
                    <Card>
                        <CardBody>
                            <CardTitle> <h4>Comments</h4>
                            </CardTitle>
                            <CardText>
                                <div className="comment">
                                {my_comments}
                                </div>
                               </CardText>
                        </CardBody>
                    </Card>
                );
            }
        else
        return(
                <div></div>
            );
    }
    
render(){
    const myDish =this.props.Dish;
    
        return(
            <div className="container">
            <div className="row">
            <div  className="col-12 col-md-5 m-1">
              {this.renderDish(myDish)}
            </div>
            <div  className="col-12 col-md-5 m-1">
              {this.renderComments(myDish)}
            </div>
          </div>
            
          </div>
        );
}
}    

export default DishDetail;