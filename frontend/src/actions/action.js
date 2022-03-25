import axios from 'axios';

const API = axios.create({baseURL:"http://localhost:5000/words"})

export const getWords = () => async(dispatch)=>{
    try {
        const {data} = await API.get('/')

        dispatch({type:"GETALL",data})
    } catch (error) {
        console.log(error)
    }
}

export const getWord = (id) => async(dispatch)=>{
    try {
        const {data} = await API.get(`/${id}`)

        dispatch({type:"GETWORD",data})
    } catch (error) {
        console.log(error)
    }
}

export const pushWord = (word) =>async(dispatch)=>{
    try {
        const {data} = await API.post('/',word)

        dispatch({type:"CREATE",data})
    } catch (error) {
        console.log(error);
    }
}

export const editWord = (id,word) =>async(dispatch)=>{
    try {
        const {data} = await API.patch(`/id/${id}`,word)

        dispatch({type:"UPDATE",data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteWord = (id) =>async(dispatch)=>{
    try {
        const {data} = await API.delete(`/id/${id}`)

        dispatch({type:"DELETE",id})
    } catch (error) {
        console.log(error)
    }
}

