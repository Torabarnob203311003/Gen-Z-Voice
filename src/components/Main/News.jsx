import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetching the data
        axios.get('https://openapi.programming-hero.com/api/news/category/01')
            .then((response) => {
                setNewsData(response.data.data);  // Assuming the data is inside 'data'
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Latest News</h2>
            <div>
                {newsData.map((newsItem) => (
                    <div key={newsItem._id}>
                        <h3>{newsItem.title}</h3>
                        <p>{newsItem.details}</p>
                        <img src={newsItem.image_url} alt={newsItem.title} style={{ width: '200px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
