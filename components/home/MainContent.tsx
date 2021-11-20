import React from 'react';
const MainContent = () => (
    <div className="fullwidth-block">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="section-title">Welcome ...</h2>
                    <ul className="event-list large">
                        <li>
                            <h3 className="event-title"><a href="#">Estrella de Belén Baptist Church</a></h3>
                            <p>We have only One Person to offer you and He is all you need…Christ Jesus crucified for sin, buried, risen from the dead and ascended into Heaven and coming again. By grace alone through your faith in Christ alone and for God’s glory alone brings the new birth by which you will receive power to live on mission to hallow His holy name alone. If you want Christ Jesus please join us! He is all we have to offer and He is enough!</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h2 className="section-title">Service Times</h2>
                    <ul className="seremon-list">
                        <li>
                            <img src="images/small-thumb-1.jpg" alt=""/>
                            <div className="seremon-detail">
                                <h3 className="seremon-title"><a href="#">School for all ages</a></h3>
                                <div className="seremon-meta">
                                    <div className="date"><i className="fa fa-clock-o"></i> 9:15 a.m. Sunday</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src="images/small-thumb-2.jpg" alt=""/>
                            <div className="seremon-detail">
                                <h3 className="seremon-title"><a href="#">Worship Service</a></h3>
                                <div className="seremon-meta">
                                    <div className="date"><i className="fa fa-clock-o"></i> 10:15 a.m. Monday</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src="images/small-thumb-3.jpg" alt=""/>
                            <div className="seremon-detail">
                                <h3 className="seremon-title"><a href="#">Soccer Time</a></h3>
                                <div className="seremon-meta">
                                    <div className="date"><i className="fa fa-clock-o"></i> 9:30 p.m. Friday</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default MainContent;