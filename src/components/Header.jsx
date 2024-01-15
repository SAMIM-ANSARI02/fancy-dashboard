
import { Box, Typography,useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../theme'

const Header = ({title,subtitle}) => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
  return (
    <Box>
      <Typography 
      variant='h3'
      color={colors.grey[100]}
      fontWeight='bold'
      sx={{mb:"5px"}}          
      >{title}</Typography>

      <Typography variant='h7' color={colors.greenAccent[400]}>{subtitle}</Typography>

    </Box>
  )
}

export default Header