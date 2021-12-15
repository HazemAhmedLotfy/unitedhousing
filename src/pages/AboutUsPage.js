import React from 'react';

export default class AboutUsPage extends React.Component {
	constructor(props) {
		super(props);
 		this.state = {
            items: [],
            
        };
	}

    render() {
        return(
            <div className='innerPage'>
                <div className='innerBreadCrumb'>
                    <div className='breadImg'>
                        <img src="/assets/images/BreadCrumbs/aboutImg.png" />
                    </div>

                    <div className='breadCont'>
                        <div className='container'>
                            <div className='breadInfo'>
                                <div className='sectionTitle'>
                                    <h1><span></span>About Us</h1>
                                    <h2>One of the oldest companies operating in the real estate sector.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>


                <div id='AboutUs'>
                    <div className='container'>
                        <div className='row storyAbout'>
                            <div className='col-7 d-flex align-items-center'>
                                <div className='storyTxt'>
                                    <div className='sectionTitle'>
                                            <h1><span></span>The story</h1>
                                            <h2 className='w-100'>About United For Housing & Development.</h2>
                                        </div>

                                        <p>
                                            Where the company was established by special decree during the year, 
                                            Name of the land company (Kabbari) Km, Its name changed in January 2008 to become 
                                            (United Company for Population and Reconstruction) an Egyptian joint stock company Five other companies 
                                            merged with the company and later became subject to the provisions of the law number of the year Is the privatization 
                                            of the United Housing and Construction Company in general changed The company has a track record of achievements 
                                            over the years! ! The company has developed and sold about 100 million tons Of the land of the swords in 
                                            Al-Sikdaria and about "one million square meters of land of Ajami and about Million acres 
                                            of land of the Kabbari and sell almost to »! A terrible number of real estate projects In Cairo and Alexandria.
                                        </p>
                                    </div>
                                    
                            </div>

                            <div className='col-6 storyImgCont'>
                                <div className='storyImg'>
                                    <img src="/assets/images/knowsection/img1.png"/>
                                </div>
                                    
                            </div>
                        </div>

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

                                </div>
                                

                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}