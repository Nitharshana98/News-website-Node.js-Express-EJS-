const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('' , async(req, res) =>{
   try {
       const newAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ccc612e4cac748cd87e715805faab84b`)
       res.render('news' , {articles : newAPI.data}) 
   } catch (err) {
       if(SafeArray.response){
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



module.exports = newsRouter