import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import {  Videos } from './'
import { fetchFromAPI } from './utils/fetchFromAPI'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
  const[ videos, setVideos ] = useState([])
  const { searchTerm } = useParams()


  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={2} minHeight="95vh" backgroundColor="#FFF" >
      <Typography variant='h5' fontWeight={600} color="#000" mb={3} ml={{sm: "100px"}}>
        Search Results for: <span style={{ color: '#f3105'}}>{searchTerm}</span> videos
      </Typography>
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


export default SearchFeed