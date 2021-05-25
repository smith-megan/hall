import React from 'react';
import "../styles/blog.css"

class Blog extends React.Component {
    render(){
        return <div>
            <div className="blog-contact">
                <h1 className="blog-h1">Blog</h1>
                <p className="blog-p">Updates, current events, and information pieces</p>
            </div>
            <div className="blog-posts">
                <div className="color-block"></div>
                <div className="post">
                    <div className="blog-img"></div>
                    <div className="blog-data">
                        <h1 className="blog-post-header">Section or Group</h1>

                                <h1 className="blog-post-title">The Recent Opportunity Title</h1>
                        
                        <p className="blog-post-p">Summary paragraph. This is a summary. Summary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summary</p>
                        <p className="blog-post-p">summary continued. Summary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summary.</p>
                    
                    </div>
                    
                </div>

                <div className="blog-posts">
                    
                    <div className="post">
                        
                        <div className="blog-data blog-info-2">
                            <h1 className="blog-post-header blog-header-2">Section or Group</h1>

                                    <h1 className="blog-post-title">Recent Something Title</h1>
                            
                            <p className="blog-post-p">Summary paragraph. This is a summary. Summary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summary</p>
                            <p className="blog-post-p">summary continued. Summary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summary.</p>
                        
                        </div>
                        <div className="color-block color-2"></div>
                        <div className="blog-img blog-img-2"></div>
                    </div>
                </div>



                <div className="blog-posts blog-end">
                <div className="color-block"></div>
                <div className="post">
                    <div className="blog-img blog-img-3"></div>
                    <div className="blog-data">
                        <h1 className="blog-post-header">Section or Group</h1>

                                <h1 className="blog-post-title">What is New Title</h1>
                        
                        <p className="blog-post-p">Summary paragraph. This is a summary. Summary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summary</p>
                        <p className="blog-post-p">summary continued. Summary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summarySummary paragraph. This is a summary.</p>
                    
                    </div>
                    
                </div>
                </div>



            </div>
        </div>
    }
}

export default Blog;