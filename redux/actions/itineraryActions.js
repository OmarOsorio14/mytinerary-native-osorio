import axios from "axios";
import {url} from '../../url'

const itineraryActions = {
		getItineraries: ()=>{
			return async(dispatch, getState) => {
				const res = await axios.get(`${url}api/itineraries`)
				dispatch({type:'getItineraries', payload:res.data.response.itineraries})
			}
		},
		giveLikeOrDislike: (id)=>{
			return async(dispatch, getState) => {
				if(id==="not logged"){
					return "for this action you must be logged in first"
				}else{
					const token = localStorage.getItem('token')
					const res = await axios.put(`${url}api/itineraries/like/${id}`, {}, {
						headers: {
								'Authorization': `Bearer ${token}`
									}
						})
				}	
			}
		},
		AddComment: (data)=>{
			return async(dispatch, getState) => {
				if(data==="not logged"){
					return "for this action you must be logged in first"
				}else if(data.message.length === 0){
					return "please enter a message"
				}
				else{
					const token = localStorage.getItem('token')
					const res = await axios.post(`${url}api/itineraries/comment`, {data}, {
						headers: {
								'Authorization': `Bearer ${token}`
									}
						})
					if(res.data.success){
						return "thanks for comment"
					}else{
						return "something went wrong try again later"
					}
				}	
			}
		},
		
		UpdateComment: (data)=>{
			return async(dispatch, getState) => {
				if(data==="not logged"){
					return "for this action you must be logged in first"
				}else if(data.message.length === 0){
					return "please enter a new message valid"
				}else{
				const token = localStorage.getItem('token')
				const res = await axios.put(`${url}api/itineraries/comment`, {data}, {
					headers: {
							'Authorization': `Bearer ${token}`
								}
					})
				if(res.data.success){
					return res.data.message
				}else{
					return res.data.message
				}
				}	
			}
		},
		DeleteComment: (id)=>{
			return async(dispatch, getState) => {
				const token = localStorage.getItem('token')
				const res = await axios.put(`${url}api/itineraries/comment/${id}`, {}, {
					headers: {
							'Authorization': `Bearer ${token}`
								}
					})
					if(res.data.success){
						return "comment deleted successfully"
					}else{
						return "something went wrong try again later"
					}
				}	
			}
		}

export default itineraryActions