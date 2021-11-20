import React from 'react'
import Container from '../layout/Container'

const Page = () => (
    <Container>
        <div className="fullwidth-block">
            <div className="container">
                <h2 className="section-title">No Content Page</h2>

                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="news">
                            <h3 className="news-title">This page has no content</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
);
export default Page;