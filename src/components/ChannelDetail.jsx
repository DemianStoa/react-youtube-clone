import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from './utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const { id } = useParams()
  const [ videos, setVideos ] = useState([])


  useEffect (() => {
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
  }, [id])


  return (
    <Box 
      minHeight="95vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor="white"
    >
      <Box width="100vw">
        <div style={{
          background: 'linear-gradient(90deg, rgba(8,246,227,1) 0%, rgba(252,3,108,1) 96%)',
          zIndex: 10,
          height: '120px'
        }}/>
        <ChannelCard color='#000' subColor="gray" channelId={id}
        marginTop='-110px' />
      </Box>
      <Box
        display="flex" 
        p="2"
        justifyContent="space-around"
        alignItems="center"
        >
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail