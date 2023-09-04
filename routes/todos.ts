import { Router } from "express";

import {Todo} from '../models/todo'

let todos : Todo[] = [];

const router = Router();

router.get('/', (req, res, next )=>{
    res.status(200).json({todos : todos})
})

router.post('/todo' ,(req,res)=>{
    const newTodo : Todo = {
        id : new Date().toISOString(),
        text : req.body.text
    }

    todos.push(newTodo)
    res.status(201).json({msg : 'Added todo'})
})

router.put('/todo/:todoId',(req,res)=>{
    const tId = req.params.todoId
    const todoIndex = todos.findIndex((todoItem)=>{todoItem.id == tId})
    if(todoIndex >= 0){
        todos[todoIndex] = {id : todos[todoIndex].id, text : req.body.text}
        res.status(201).json({msg : "Todo is updated"})
    }
    res.status(404).json({msg : "Todo not found"})
})

router.delete('/todo/:todoId',(req,res)=>{

  todos = todos.filter((todoItem)=>{
    todoItem.id !== req.params.todoId
  })
  res.status(201).json({msg : "Todo is Deleted"})
})

export default router