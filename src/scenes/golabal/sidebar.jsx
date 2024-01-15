import {useState} from 'react'
import {ProSidebar,Menu,MenuItem} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css';
import {Typography,Box,useTheme,IconButton, colors} from '@mui/material'
import {Link} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import PieChatOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { tokens } from '../../theme'
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';



const Item=({selected,setSelected,to,icon,title})=>{
 const theme=useTheme()
 const colors=tokens(theme.palette.mode)

 return(
    <MenuItem 
    active={selected===title}
    style={{color:colors.grey[100]}}
    onClick={()=>setSelected(title)}
    icon={icon}
    >
        <Typography>{title}</Typography>
        <Link to={to}/>
    </MenuItem>
 )
}


const Sidebar = () => {
    const theme=useTheme()
    const colors=tokens(theme.palette.mode)
    const [isCollapsed, setIscollasped] = useState()
    const[selected,setSelected] = useState('Dashboard')

    return (
    <div>
        <Box  sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}>
            <ProSidebar collapsed={isCollapsed}>
                 <Menu iconShape="square" >
                <MenuItem
                 onClick={() => setIscollasped(!isCollapsed)}
                 icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                 style={{
                   margin: "10px 0 20px 0",
                    color: colors.grey[100],
            }}>
               { !isCollapsed  && (
                <Box>
                    <Typography variant="h3" color={colors.grey[100]} >
                        ADMINIS
                    </Typography>
                    <IconButton onClick={()=>setIscollasped(!isCollapsed)}>
                        <MenuOutlinedIcon/>
                    </IconButton>
                </Box>
               )}

                </MenuItem>
                {
                   !isCollapsed &&
                     <Box mb='25px' >
                        <Box display={'flex'} justifyContent={'center'} alignItems='center'>
                           <img
                           alt='profile-image'
                           width={'100px'}
                           height={'100px'}
                           src={`../../Assets/profile.jpg`}
                           style={{cursor: 'pointer',borderRadius:'50%'}}

                           /> 
                        </Box>
                        <Box textAlign={'center'}>
                            <Typography variant='h2' color={colors.grey[100]} fontWeight={'bold'} sx={{m:'10px 0 0 0'}}>Samim Ansari</Typography>
                            <Typography variant='h6' color={colors.greenAccent[500]}>fancy Admin</Typography>
                        </Box>
                    </Box>
                }
                {/* menu item  */}
                <Box paddingLeft={isCollapsed? undefined:"10%" }>
                    <Item 
                    title="Dashboard"
                    to='/dashboard'
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                    <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    sx={{m:'15px 0 5px 20px'}}
                    >data</Typography>
                      <Item 
                    title="Manage Team" 
                    to='/team'
                    icon={<PeopleOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                      <Item 
                    title="Contact Information"
                    to='/contact'
                    icon={<ContactsOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                      <Item 
                    title="Invoices Balance"
                    to='/invoice'
                    icon={<ReceiptOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                     <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    sx={{m:'15px 0 5px 20px'}}
                    >pages</Typography>
                      <Item 
                    title="Calendar"
                    to='/calendar'
                    icon={<CalendarTodayOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                      <Item 
                    title="Profile Form"
                    to='/form'
                    icon={<PersonOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                      <Item 
                    title="FAQ Page"
                    to='/faq'
                    icon={<HelpOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                     <Typography
                    variant='h6'
                    color={colors.grey[300]}
                    sx={{m:'15px 0 5px 20px'}}
                    >chat</Typography>
                      <Item 
                    title="Bar Chart"
                    to='/bar'
                    icon={<BarChartOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                      <Item 
                    title="Pie Chart"
                    to='/pie'
                    icon={<PieChatOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                        <Item 
                    title="Line Chart"
                    to='/line'
                    icon={<TimelineOutlinedIcon/>}
                    selected={selected}
                    setSelected={setSelected}
                    /> 
                       <Item 
                    title="Geography Chart"
                    to='/geography'
                    icon={<MapOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                    />
                </Box>
                </Menu>
            </ProSidebar>

        </Box>
    </div>
  )
}

export default Sidebar