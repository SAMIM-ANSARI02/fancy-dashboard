import {useContext} from 'react'
import {Box,IconButton,colors,useTheme} from '@mui/material'
import {tokens,ColorModeContext, themeSetting} from '../../theme'
import {InputBase} from '@mui/material'
import LightModeOutlined from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined'
import PersonOutlined from '@mui/icons-material/PersonOutlined'
import SettingsOutlined from '@mui/icons-material/SettingsOutlined'
import SearchIcon from '@mui/icons-material/Search'

const Topbar = () => {
    const theme=useTheme()
    const color=tokens(theme.palette.mode)
    const colorMode=useContext(ColorModeContext)

  return (
   <Box display='flex' justifyContent='space-between' p={2}>
    {/* search box */}
    <Box 
    display='flex'
    borderRadius='3px'
    backgroundColor={color.primary[400]}
    >
      <InputBase sx={{ml:2, flex:'1'}} placeholder='search'/>
      <IconButton type='button' sx={{p:1}}>
        <SearchIcon/>
      </IconButton>
    </Box>
    {/* icon */}
    <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode==='dark'?
            <LightModeOutlined/>:<DarkModeOutlined/>}
          
        </IconButton>
          <IconButton>
            <NotificationsOutlined/>
        </IconButton>
          <IconButton>
           <PersonOutlined/>
        </IconButton>
          <IconButton>
           <SettingsOutlined/>
        </IconButton>
        

    </Box>
    

   </Box>
  )
}

export default Topbar