import React from "react";


//create your first component
const Card = ({title, description, imgSrc}) => {
    return (
        <div className="col-12 col-sm-6 col-md-3 mb-3 my-4">
            <div className="card h-100" >
                <img src={imgSrc} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
                <div className="card-footer bg-light text-center">
                 <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>  
            </div>
        </div>
    );
};

export default Card;