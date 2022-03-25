import { Button, Container, Grid, Grow, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWord, getWords } from '../../actions/action'
import Form from './Form'
import Word from './Word'

const styles = makeStyles({
  container:{
      display: "flex",
      flexDirection:"row"
  },

})
const Home = () => {
    const [currentId,setCurrentId] =useState(0)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getWords())
    },[currentId])
    const classes = styles()
  return (
      <Grow in>
          <Container maxWidth="md">
              <Grid container spacing={5} className={classes.container}>
                  <Grid item xs={12} sm={9} md={7}>
                    <Word setCurrentId={setCurrentId} />
                  </Grid>
                  <Grid item xs={12} sm={3} md={3}>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                  </Grid>
              </Grid>
          </Container>
      </Grow>
  )
}

export default Home