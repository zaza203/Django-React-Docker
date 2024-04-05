import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Homepage = () => {

    const [articles, setArticles] = useState([]);

        useEffect(() => {
        const fetchArticles = async () => {
            try {
            const response = await axios.get('http://localhost:8000/api/articles/');
            setArticles(response.data);
            } catch (error) {
            console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
        }, []);

  return (
    <>
        <div>
            <h1>Articles</h1>
            <ul>
                {articles.map(article => (
                <li key={article.id}>
                    <a href={`/articles/${article.id}`}>{article.title}</a>
                </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Homepage
