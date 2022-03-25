import { Button, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit';
import { deleteWord, getWord } from '../../actions/action'

const styles = makeStyles({
    container:{
        display: "flex",
        flexDirection:"row"
    },
    paper:{
        padding:"1rem",
        display: "flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        //height: "300px"
    },
    words:{
        margin: "0.5rem",
        padding: "1rem",
        display: "flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
    }
})
const Word = (props) => {

    const {words,singleWord} = useSelector((state)=>state.word)
    const dispatch = useDispatch()
    const classes = styles()

    const handleEdit = (id)=>{
        console.log(id)
        dispatch(getWord(id))
    }
  return (
    <Paper elevation={3} className={classes.paper}>
        <Typography color='secondary' variant='h5'>Words</Typography>
        {words && (
            words.map((word)=>(
                <Paper elevation={2} key={word._id} className={classes.words}>
                    <Typography variant='h6' color='primary'>{word.word}</Typography>
                    <div className={classes.buttons}>
                        <Button style={{marginRight:"1rem"}} onClick={()=>handleEdit(word._id)} size='small'><Edit/></Button>
                        <Button size='small' onClick={()=>{dispatch(deleteWord(word._id));props.setCurrentId(0)}}><Delete/></Button>
                    </div>
                </Paper>
            ))
        )}
    </Paper>
  )
}

export default Word