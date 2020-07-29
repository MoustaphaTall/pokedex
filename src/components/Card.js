import React, { Component } from 'react';

class Card extends Component {
    render() {
        let { name, onClick, src, number } = this.props;
        name = name.charAt(0).toUpperCase() + name.substring(1, name.length);

        return (            
            <div className="col-6 col-lg-4">
                <button className="btn btn-light" onClick={onClick}>
                    <div className="card">
                        <img className="card-img-top" src={src} alt={`${name}'s sprite`} />                        
                        <div className="card-body">
                            <h2 className="card-title">#{number + 1} {name}</h2>
                        </div>
                    </div>
                </button>
            </div>
        );
    }
}

export default Card;