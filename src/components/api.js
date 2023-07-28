import axios from "axios";
const URI='http://localhost:8080'

const getFeedback = () => axios.get(`${URI}/getfed`)
const addFeedback = (Feedback) => axios.post(`${URI}/addfed`,Feedback)
// const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const editFeedback = (feed_id,FeedBack)=>axios.put(`${URI}/updatefeed/${feed_id}`,FeedBack)
const deleteFeedback=(feed_id)=>axios.delete(`${URI}/delete/${feed_id}`)

export {getFeedback,addFeedback,deleteFeedback,editFeedback}