import React from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function  RenderDish( {dish}){
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

    function RenderComments({dish}) {
        
        if(dish != null)
            {
                const my_comments=dish.comments.map((comment)=>{
                    // const date= new Date(comment.date)
                    return(
                        <div key={comment.id} >
                        <p>{comment.comment}</p>
                    <p>--{comment.author}, 
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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
    
    const DishDetail = (props) => {
    const myDish =props.Dish;
    
        return(
            <div className="container">
            <div className="row">
            <div  className="col-12 col-md-5 m-1">
              <RenderDish dish={myDish}/>
            </div>
            <div  className="col-12 col-md-5 m-1">
              <RenderComments dish={myDish}/>
            </div>
          </div>
            
          </div>
        );
}
  

export default DishDetail;