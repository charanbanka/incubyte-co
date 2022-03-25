import { Button, Paper, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editWord, pushWord } from '../../actions/action'

const styles = makeStyles({
    paper:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        padding:"1rem",
    },
    form:{
        marginTop:"1rem",
        display: "flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
    },
    buttons:{
        marginTop:"1rem",
        display: "flex",
        justifyContent:"space-between",
        alignItems:'center'
    }
})

const Form = (props) => {
    const classes = styles()
    const dispatch = useDispatch()

    const [word,setWord] = useState("")
    const [error,setError] = useState("")
    const [isSubmit,setIsSubmit] = useState(false)
    const {words,singleWord} = useSelector((state)=>state.word)

    useEffect(()=>{
        props.setCurrentId(singleWord?._id)
        setWord(singleWord?.word)
    },[singleWord])

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if(props.currentId){
            dispatch(editWord(props.currentId,{word:word}))
            props.setCurrentId(0)
        } else{
            dispatch(pushWord({word:word}))
            
        }
        clear()
    }
    const clear = ()=>{
        setIsSubmit(false)
        setError("")
        setWord("")
        props.setCurrentId(0)
    }
 
  return (
    <Paper elevation={3} className={classes.paper} >
        <Typography variant="h5" color='secondary'>{props.currentId?'Edit':`Add`} Word</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField label="Enter word" name="word" value={word} onChange={(e)=>setWord(e.target.value)}/>
            <div className={classes.buttons}>
                <Button color="primary" size='small' style={{marginRight:"1rem"}} variant='contained' type="submit">{props.currentId?'Update':`Submit`}</Button>
                <Button  color="secondary" size='small' variant='contained' onClick={clear} >Clear</Button>
            </div>
        </form>
    </Paper>
  )
}

export default Form