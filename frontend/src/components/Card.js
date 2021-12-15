import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from 'axios';
var host =  "http://127.0.0.1:5555/"
const PhotoCard = (props) => {
  
    async function updatelikes(op_type){
      let data={
        img_id:props.image._id,
        op_type:op_type
      }
      await axios.post(host+'/updateLike',data).then(reponse=>{console.log("updated");props.updateDash()}).catch(err=>{console.log("error",err)})
    }
    return (
        <div>

    <Card sx={{}}>
      <CardActionArea>
        <CardMedia
          component="img"
        
          image={props.image.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.image.img_name}<br />
            <IconButton aria-label="Liked?" onClick={(e)=>updatelikes("like")}>    <ThumbUpIcon fontSize="large"></ThumbUpIcon> &nbsp;{props.image.likes} </IconButton>
            <IconButton aria-label="Disliked?" onClick={(e)=>updatelikes("dislike")}>   {props.image.dislikes}&nbsp;  <ThumbDownIcon fontSize="large"></ThumbDownIcon> </IconButton>
          </Typography>
           
        </CardContent>
      </CardActionArea>
    </Card>
 
        </div>
    )
}

export default PhotoCard
