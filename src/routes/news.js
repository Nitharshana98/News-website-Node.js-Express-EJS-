const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('' , async(req, res) =>{
   try {
       const newAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`)
       res.render('news' , {articles : newAPI.data}) 
   } catch (err) {
       if(err.response){
        
           console.log(err.response.data)
           console.log(err.response.status)
           console.log(err.response.headers)
       }
       else if(err.request){
           
           console.log(err.request)
       }
       else{
          
           console.error('Error', err.message)
       }
   }
})

newsRouter.get('/:id' , async(req, res) =>{
    let articleId = req.params.id

    try {
        const newAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleId}`)
        res.render('newsSingle' , {article : newAPI.data}) 
    } catch (err) {
        if(err.response){
         
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }
        else if(err.request){
            
            console.log(err.request)
        }
        else{
           
            console.error('Error', err.message)
        }
    }
 })

 newsRouter.post('', async(req, res) => {
    let search = req.body.search
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
        res.render('newsSearch', { articles : newsAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('newsSearch', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('newsSearch', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('newsSearch', { articles : null })
            console.error('Error', err.message)
        }
    } 
})



module.exports = newsRouter