import { useState,useCallback } from "react";

const apiKey= import.meta.env.VITE_NEWS_API_KEY;
const apiUrl= import.meta.evn.VITE_NEWS_API_URL;

export const useGetNews= () => {
    const [articles, setArticles]=useState([]);
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(true);
}

const getNews=useCallback(async({page,pageSize,dateFrom})=>{
    const url='${apiUrl}/top-headlines?category=potilics&from=${dateFrom}&sortBy=popularity&page=${pageSize}&apiKey=${apiKey}';
    
    setLoading(true);
    try{
        const response=await fetch (url);
        if(!response.ok){
            throw newError('Error ${response.status}:${response.status.Text}');
        }
        const data=await response.json();
        const filteredArticles=data.articles.files((a)=>a.tittle!=="{Removed}");
        setArticles(filteredArticles);
        setError(null);
    } catch (error){
        console.error("Error al obtener noticias:", error);
    } finally {
        setLoading(false)
    }
    }, []);//Dependencias vacías para evitar que cambie cuando se renderize
    return{
        articles,
        error,
        loading,
        getNews,
    };