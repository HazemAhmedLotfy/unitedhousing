import React from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class AboutUs extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            
        };
	}

    render() {
        return(
            <div id='AboutUs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 d-flex align-items-center'>
                            <div className='mainImg'>
                                <img src="/assets/images/knowsection/img1.png"/>
                            </div>
                            <div className='thumbnailsImgs'>
                                <div className='imgItem'>
                                    <img src="/assets/images/knowsection/img1.png" />
                                </div>
                                <div className='imgItem'>
                                    <img src="/assets/images/knowsection/img1.png" />
                                </div>
                                <div className='imgItem'>
                                    <img src="/assets/images/knowsection/img1.png" />
                                </div>
                            </div>
                        </div>


                        <div className='col-6 d-flex flex-direction-column align-items-center'>
                            <div className='aboutInfo'>
                                <div className='sectionTitle'>
                                    <h1><span></span>Real value in property and places.</h1>
                                    <h2>Historical assets.</h2>
                                </div>

                                <p>
                                    The company owns 32 buildings located in vital areas in the most prestigious areas of the Raml 
                                    station in Alexandria such as the road of freedom, Salah Salem road and Talat Harb 
                                    (about 750 residential units / commercial / administrative) units in buildings of a 
                                    distinctive architectural character and bearing the historical character of Alexandria.
                                </p>

                                <a href="#" className='viewBtn'>Browse our historical projects <i className='icon-arrow-down-right2'></i></a>

                            </div>
                            

                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}