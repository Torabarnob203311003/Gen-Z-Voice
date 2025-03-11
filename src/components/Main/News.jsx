import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaShare, FaSave } from 'react-icons/fa'; // Import React Icons
import { Link } from 'react-router-dom';

// List of profile pictures
const profilePictures = [
    "https://media.licdn.com/dms/image/v2/D4D35AQGplwkzbEVQ5w/profile-framedphoto-shrink_200_200/B4DZVkkOQHGkAY-/0/1741148972395?e=1741777200&v=beta&t=NOWzrNYwOsCuotQjfWR1QOjdkizeNorppo4gtYQdmJY",
    "https://media.licdn.com/dms/image/v2/D5603AQEzyI8y0MhfQg/profile-displayphoto-shrink_200_200/B56ZTCUmmXHwAY-/0/1738426969071?e=1746662400&v=beta&t=XRYM_EyePAhvJ_E2NeAnVbiigSBSNSUfs-ro9_7PiIU",
    "https://media.licdn.com/dms/image/v2/D4E03AQF_6iqujYff3Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1648277390879?e=1746662400&v=beta&t=yDAp3FkcGPDNsbdYaL5hQuFsUHr2jfRW-_r5_W_M8uk",
    "https://media.licdn.com/dms/image/v2/C4D03AQHXFnGrjAa82g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655375473475?e=1746662400&v=beta&t=XlBccL_sJBYFQkwouOYTJGrQ0vLzMYVdFrsXGRAABrA"
];

// List of random dates
const randomDates = [
    "20 minutes ago",
    "5 hours ago",
    "1 day ago",
    "2 days ago",
    "3 days ago",
    "1 week ago"
];

// Function to shuffle an array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const NewsCard = ({ news_id, title, details, image_url, rating = { number: 4.9 }, shares = { number: 499 }, author = { name: "Anonymous", avatar: profilePictures[0] }, date = randomDates[0] }) => {
    // Extract the number from rating and shares objects
    const ratingValue = rating.number;
    const sharesValue = shares.number;

    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px 0', maxWidth: '820px' }}>
            {/* Author Info (Logo, Name, Date) */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <img src={author.avatar} alt={author.name} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                <div>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{author.name}</p>
                    <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{date}</p>
                </div>
            </div>

            {/* News Heading */}
            <h3 style={{ margin: '0 0 12px 0', fontWeight: 'bold' }}>{title}</h3>

            {/* News Details */}
            <p style={{ margin: '0 0 12px 0' }}>{details}</p>

            {/* Read More Link */}
            <Link to={`/news/${news_id}`} style={{ color: '#007BFF', textDecoration: 'none', display: 'block', marginBottom: '12px' }}>
                Read More
            </Link>

            {/* News Image */}
            {image_url && (
                <img src={image_url} alt={title} style={{ width: '100%', borderRadius: '8px', marginBottom: '12px' }} />
            )}

            {/* Rating and Shares */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '8px' }}>⭐⭐⭐⭐⭐ {ratingValue}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '8px', cursor: 'pointer' }}><FaShare /> {sharesValue}</span>
                    <span style={{ cursor: 'pointer' }}><FaSave /></span>
                </div>
            </div>
        </div>
    );
};

const News = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/news/category/01')
            .then((response) => {
                console.log(response.data.data); // Log the data to inspect its structure

                // Shuffle profile pictures and assign one to each post
                const shuffledPictures = shuffleArray([...profilePictures]);
                const postsWithUniquePictures = response.data.data.map((post, index) => ({
                    ...post,
                    author: {
                        name: post.author?.name || "Anonymous",
                        avatar: shuffledPictures[index % shuffledPictures.length] // Assign unique profile picture
                    },
                    date: randomDates[Math.floor(Math.random() * randomDates.length)] // Assign random date
                }));

                setNewsData(postsWithUniquePictures);
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
            <h2 className='font-semibold'>Latest News</h2>
            <div>
                {newsData.map((newsItem) => (
                    <NewsCard
                        key={newsItem._id}
                        news_id={newsItem._id} // Pass the news ID correctly
                        title={newsItem.title}
                        details={newsItem.details}
                        image_url={newsItem.image_url}
                        rating={newsItem.rating} // Pass the rating object
                        shares={newsItem.shares} // Pass the shares object
                        author={newsItem.author} // Pass author info
                        date={newsItem.date} // Pass random date
                    />
                ))}
            </div>
        </div>
    );
};

export default News;