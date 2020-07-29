import React, { Component } from 'react';

class Infos extends Component {
    render() {
        let heightUnity = "m";
        let weightUnity = "kg"
        let { name, height, weight, src, type } = this.props;
        name = name.charAt(0).toUpperCase() + name.substring(1, name.length);
                
        if (height < 10) {
            height *= 10
            heightUnity = "cm"
        } else {
            height /= 10;
        }

        if (weight < 10) {
            weight *= 10
            weightUnity = "g"
        } else {
            weight /= 10;
        }
        

        return (
            <div className="container-fluid bg-dark text-white sticky-top animate__animated animate__bounceInDown">
                <div className="row align-items-center justify-content-center">

                    <div className="col-6 col-lg-3">
                        <img className="img-fluid w-75" src={src} />
                    </div>

                    <div className="col-6 col-lg-3">
                        <ul className="animate__animated animate__bounceInDown" style={{listStyleType: "none"}}>
                            <li><h2>{name}</h2></li>
                            <li>Height: {height} {heightUnity}</li>
                            <li>Weight: {weight} {weightUnity}</li>
                            <li>Type: {type.join(' and ')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Infos;