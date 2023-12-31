import { useDispatch, useSelector } from 'react-redux'
import style from './main.css'
import {isShow} from '../../store/index'
import { ticketId } from '../../store/index'
import { createAction } from '@reduxjs/toolkit'

export default function New({ticket,number,price,status,company,create,id,title,color,commentMenu,handlerCreate}) {
    const dataState = useSelector((state) => state.index.data)
    const dispatch = useDispatch()

    const modalShow = useSelector((state)=>state.index.show)
    

    return (
        <div className='new_cont'>
            <div className='title_box' style={{backgroundColor:color}}>
                <p>{title}</p>
            </div>
            <div className='price_box'>
                <p>0$</p>
            </div>
            <div className='add_box' onClick={()=>{
                dispatch(isShow({show:!modalShow}))

                dispatch(createAction({actionCreate:'statusCreated'}))

                dispatch()
            }}>
                <p>+</p>
            </div>
            <div className='cards_cont'>
               {dataState.map((item)=>{
                return item.status === id && ( 
                <div className='card'>
                    <div className='card_name'>
                        <p>Deal #{item.number}</p>
                    </div>
                    <div className='card_desc'>
                        <p>€{item.price}</p>
                    </div>
                    <div className='add_data'>
                        <p>
                            right now
                        </p>
                    </div>
                    <div className='company_name'>
                        <p>{item.company}</p>
                    </div>
                    <div className='reactions_bar'>
                        <div className='comment' onClick={() =>{
                            dispatch(ticketId({ticket_id:item.id}))
                            commentMenu()
                        }}>
                            <p>C</p>
                        </div>
                        <div className='like'>
                            <p>D</p>
                        </div>
                    </div>
                </div>
                )
               })}
            </div>
        </div>
    )
}