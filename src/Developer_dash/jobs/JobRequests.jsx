import React, { Component } from 'react'
import axios from "axios"
import {localhost} from "../../GlobalVars"
export default class JobRequests extends Component {
    state = {jobs:null,
        show:false,
        details:null,
        // job_id:null,
        // userId:jwt_decode(localStorage.usertoken).user._id
    }

    componentDidMount = () =>{
        axios.get(`${localhost}/job/developer/:id`)
        .then(r=>{
            console.log("COMPDID MOUT")
            console.log(r.data)
            this.setState({jobs:r.data})
        })
        .catch(err=>console.log(err))
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}