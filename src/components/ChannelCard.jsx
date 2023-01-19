import { Link } from 'react-router-dom'
import { Typography, Box, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { fetchFromAPI } from './utils/fetchFromAPI'
import { demoProfilePicture } from './utils/constants'
import { useState } from 'react'


const ChannelCard = ({ channelId, marginTop = 0, color = "#000", subColor = "gray" }) => {
const [channelDetail, setChannelDetail] = useState(null)

fetchFromAPI(`channels?part=snippet&id=${channelId}`).then((data) => setChannelDetail(data?.items[0]))

  return (
    <Box
      sx={{
        boxShadow:  'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '365px', md: '320px'},
        height: '326px',
        margin: ' auto',
        marginTop,
      }}
    >
       <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent 
          sx={{  
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: "white",
            }}>
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.high?.url 
              || demoProfilePicture }
              alt={channelDetail?.snippet?.title}
              sx={{ 
                borderRadius: '50%', 
                height: '180px', 
                width: '180PX', 
                mb: 2, 
                border: '1px solid #e3e3e3'
            }}
              />
              <Typography 
                variant="h6"
                color={color}
              >
                {channelDetail?.snippet?.title}
                <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px'}} />
              </Typography>
              <Typography 
                variant="h6"
                color={subColor}
                >
                {channelDetail?.statistics?.subscriberCount && (
                <Typography  color={subColor}>
                  {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                </Typography>)}
              </Typography>
        </CardContent>
       </Link>
    </Box>
   
  )
}

export default ChannelCard