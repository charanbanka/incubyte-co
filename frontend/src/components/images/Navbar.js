import React from 'react'
import {AppBar, Toolbar} from '@material-ui/core'
import imag from './Incubyte.png'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const styles = makeStyles({
    appbar:{
        height: "60px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        background:"#fff" 
    }
})

const Navbar = () => {
    const classes = styles()
  return (
    <AppBar  elevation={2} className={classes.appbar} >
        <Link to='/' style={{textDecoration:"none"}}><img src={imag} width="100px" height="40px"></img></Link>
        {/* <Link to='/word'style={{textDecoration:"none"}} >Add Word</Link> */}
    </AppBar>
  )
}

export default Navbar

