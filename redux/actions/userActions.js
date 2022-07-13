import axios from "axios";
import {url} from '../../url'

const userActions = {
		signUpUser: (userData)=>{
			return async(dispatch, getState) => {
				const res = await axios.post(`${url}api/auth/signup`, {userData})
				return res.data.message
				}
			
		
		},
		logInUser: (logedUser)=>{
			return async(dispatch, getState) => {
				const res = await axios.post(`${url}api/auth/login`, {logedUser})

				if(res.data.success){
					localStorage.setItem('token', res.data.response.token)
					dispatch({ type: 'logInUser', payload: res.data.response.userData });
					return res.data.message
				}else{
					return res.data.message
				}
			}
		},
		signOutUser: ()=>{
			return (dispatch,getState) =>{
				localStorage.removeItem('token');
				dispatch({ type: 'logOutUser', payload: null });
				return 'Sign Out success'
			}
		},
		verifyToken: (token) => {
			return async (dispatch, getState) => {
					const user = await axios.get(`${url}api/auth/loginToken`, {headers: {'Authorization': 'Bearer '+token}} )
					if (user.data.success) {
						dispatch({ type: 'logInUser', payload: user.data.response });
					} else {
							localStorage.removeItem('token')
					}
			}
	}
}
export default userActions