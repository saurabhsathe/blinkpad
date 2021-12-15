import React from 'react'
import Grid from '@mui/material/Grid';
import Card from './Card'
import axios from 'axios'
import { useEffect,useState } from 'react';
var host =  "http://127.0.0.1:5555/"
const Dashboard = () => {

    const [images,setimages]=useState([])
    const [updated,setupdated]=useState(false)
    function updateDash(){
        setupdated(!updated)
    }
    useEffect(()=>{
        axios.get(host+'/getimages').then(response=>{console.log(response);setimages(response.data)}).catch(err=>{console.log(err)})
        console.log("got the images",images)


    },[updated]);
    let  images_details= []
    for(let i=0;i<images.length;i=i+2){
        images_details.push( <div>          <br />
            <Grid container spacing={2} textAlign="center">
                <Grid item xs={3} > </Grid>
                <Grid item xs={3} alignContent="center" textAlign="center">
                   <Card image={images[i]} updateDash={updateDash}/>
                </Grid>
                <Grid item xs={3} alignContent="center" textAlign="center">
                <Card image={images[i+1]} updateDash={updateDash} />
                </Grid>
                <Grid item xs={3} > </Grid>
                
            </Grid>
            </div>
 )
    }

    
    return (
        <div>
           {images_details}
         
        </div>
    )
}

export default Dashboard
/*

   <Grid container spacing={2} textAlign="center">
                <Grid item xs={3} > </Grid>
                <Grid item xs={3} alignContent="center" textAlign="center">
                   <Card img_url="https://ubereatscustomerimagesbucket.s3.us-east-2.amazonaws.com/PXL_20211024_004630938.jpg" img_name="Yosemite National Park"/>
                </Grid>
                <Grid item xs={3} alignContent="center" textAlign="center">
                <Card img_url="https://ubereatscustomerimagesbucket.s3.us-east-2.amazonaws.com/PXL_20211023_154814022.jpg" img_name="Yosemite National Park 2"/>
                </Grid>
                <Grid item xs={3} > </Grid>
                
            </Grid>
            <br />
            <Grid container spacing={2} textAlign="center">
                <Grid item xs={3} > </Grid>
                <Grid item xs={3} alignContent="center" textAlign="center">
                   <Card img_url="https://ubereatscustomerimagesbucket.s3.us-east-2.amazonaws.com/PXL_20211023_163754644.jpg" img_name="Yosemite National Park"/>
                </Grid>
                <Grid item xs={3} alignContent="center" textAlign="center">
                <Card img_url="https://ubereatscustomerimagesbucket.s3.us-east-2.amazonaws.com/PXL_20211023_172208683.jpg" img_name="Yosemite National Park 2"/>
                </Grid>
                <Grid item xs={3} > </Grid>
                
            </Grid>

*/
