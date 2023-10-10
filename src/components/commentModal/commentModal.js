import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { setComments } from '../../store'
import {writeComment} from '../../store/index'
import { useState } from 'react'
import { userData } from '../userData/userdata'
import {ticketId} from '../../store/index'

import './commentModal.css'

function CommentModal({setComments,comments,commentMenu,write,item,base}){
    const dispatch = useDispatch() 
    const isCommentState = useSelector((state) => state.index.comments)
    const commentsData = useSelector((state) => state.index.write)
    const [create,setCreate] = useState()
    const [user,setUser] = useState('')

    return(
        <>
            <div className='commentBox' style={{display : isCommentState ? 'flex' : 'none'}}>   
                <div className='commentSpace'>
                        <textarea placeholder='Your Comment!' onBlur={(e)=>{
                                setCreate(e.target.value)
                        }}></textarea>
                        <div className='send' onClick={(e)=>{
                           dispatch(writeComment({write : create}))
                    }}></div>
                </div>
                <div className='head'>
                    <div className='comments_count'>
                       {
                          commentsData.map((item) => {
                            userData.filter((userItem) => {
                                if(userItem.id === item.userId){

                                }
                            })
                                return (<>
                                <div className='createdBox'>
                                    <p>Username - </p>
                                   <p>Comment - {item} </p>
                                </div>
                                </>)
                          })
                       }
                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentModal