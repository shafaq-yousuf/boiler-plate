import axios from "axios";

let apiHandle = axios.create({
    baseURL: "https://fakestoreapi.com"
});

let Get = (endPoint)=>{
    return apiHandle.get(endPoint)
};

let GetById = (endPoint, id)=>{
    return apiHandle.get(`${endPoint}/${id}`)
};

let Post = (endPoint, body)=>{
    return apiHandle.get(endPoint, body)
};

let Put = (endPoint, body, id)=>{
    return apiHandle.get(`${endPoint}/${id}`, body)
};

let Del = (endPoint, id)=>{
    return apiHandle.get(`${endPoint}/${id}`)
};

export {Get, Post, Put, Del};