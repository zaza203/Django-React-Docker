import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Detailpage = () => {
    const [article, setArticle] = useState(null);
    const { pk } = useParams()

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/articles/${pk}/`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [pk]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p>Author: {article.author}</p>
            <p>Created at: {article.created_at}</p>
        </div>
    </>
  )
}

export default Detailpage
