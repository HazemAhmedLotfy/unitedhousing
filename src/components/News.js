import React from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class News extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            
        };
	}

    render() {
        return(
            <div id='News'>
                <div className='container'>
                    <div className='sectionTitle'>
                        <h1><span></span>Our News</h1>
                        <h2>We post often to our news to keep you updated.</h2>
                    </div>

                    <div className='row newContainer'>
                        <div className="col-4">
                            <div className='newItem'>
                                <div className='newImg'>
                                    <img src="/assets/images/news/img1.png" />
                                </div>
                                <div className='newInfo'>
                                    <span className='newDate'>28 <span>Nov</span></span>
                                    <span className='newTxt'>
                                        <h1>Spirit at Bridge Promenade</h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard.
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className='newItem'>
                                <div className='newImg'>
                                    <img src="/assets/images/news/img1.png" />
                                </div>
                                <div className='newInfo'>
                                    <span className='newDate'>28 <span>Nov</span></span>
                                    <span className='newTxt'>
                                        <h1>Spirit at Bridge Promenade</h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard.
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className='newItem'>
                                <div className='newImg'>
                                    <img src="/assets/images/news/img1.png" />
                                </div>
                                <div className='newInfo'>
                                    <span className='newDate'>28 <span>Nov</span></span>
                                    <span className='newTxt'>
                                        <h1>Spirit at Bridge Promenade</h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard.
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}