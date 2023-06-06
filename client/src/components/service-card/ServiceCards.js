import React, { useEffect, useState } from 'react'
import axios from 'axios'
import cl from './ServiceCards.module.scss'
import ServiceCardsItem from '../service-card-item/ServiceCardsItem'

const ServiceCards = () => {
    const [postIds, setPostIds] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPostsIds();
    }, [])

    useEffect(() => {
        console.log(postIds);
    }, [postIds])


    useEffect(() => {
        getPost();
    }, [])

    useEffect(() => {
        console.log(posts);
    }, [posts])

    async function getPostsIds(){
        const response = await axios.get("http://localhost:5000/api/posts");
        console.log("1" + response.data);
        setPostIds(response.data)
    }

    async function getPost(postId){
        const response = await axios.get("http://localhost:5000/api/posts/" + postId);
        return response.data
    }

    postIds.forEach(async (postId) => {
        try {
            const post = await getPost(postId)
            setPosts([ ...posts, post ]) 
        } catch (err){
            console.error("GetPost error: " + err);
        }
    })
    

    const postItems = posts.map((post) => {
        return <ServiceCardsItem img={post.postImage} 
                        title={post.title} 
                        content={post.content} 
                        // id={post._id}
                />
    })
        
    return (
      <section className={cl.section2_services}>
        <div className={cl.container}>
          <h2>Наши услуги</h2>
          <div className={cl.service_cards}>
                {postItems}
          </div>
        </div>
      </section>
    );
}

export default ServiceCards