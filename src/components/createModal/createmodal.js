import style from './createmodal.css'
import React, {useState} from 'react'
import Select from 'react-select'
import CreateBtn from '../buttons/createbtn';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { create } from '../../store/index'; 
import {userData,Status} from "../userData/userdata";

export default function CreateModal({display,show,setTicket,ticket,item}){
    const isShow = useSelector((state) => state.index.show)
    
    const dispatch = useDispatch()
    
    let arruserData = []
    userData.map(item => {
        arruserData.push({value:item.id,label:item.username})
    })

    const [base,setBase] = useState({
        name:'',
        description:'',
        status: 0,
        progress: 0,
    })

    // push SetBase

    function handlerCreate(){
        dispatch(create({item: base}))    
    }
    

    return  (
        <div>
        <div className={'createModal'} style={{display:( isShow ? 'block' : 'none')}}>
            <span className='modal_title'>Edit Activity</span>
            <div className={'cancel_icon'} onClick={()=>{
                if(display ==='none'){
                    show('block')
                } else if(display === 'block'){
                    show('none')
                }
            }}>
            </div>
            {/* ******************************************** */}
            <div className='inputsContainer'>
                <div className='inputs_Cont'>
                    <div className='inputName_cont'>
                        <div className='inputName_title'>
                            <p>Deal Number:</p>
                        </div>
                        <div className='inputName'>
                                <input type={'text'}   onBlur={(e)=>{
                                    setBase((state) => {
                                    return {
                                        ...state,
                                        name:e.target.value
                                    }
                        
                                })
                            }}/>
                        </div>
                    </div>
                </div>
                <div className='desc_input_box'>
                    <div className='desc_title'>
                            <p>Surname:</p>
                    </div>
                    <div className='description_area'>
                        <textarea type={'text-area'} placeholder={'text area'} onBlur={(e)=>{
                            setBase((state) =>{
                                return{
                                    ...state,
                                    description:e.target.value
                                }
                            })
                        }}textarea/>
                    </div>
                </div>
                <div className='userIdSelect_box'>
                    <div className='select_title'>
                        <p>UserName:</p>
                    </div>
                        <Select
                        options={arruserData}
                        onChange={(i)=>{
                            setBase((state)=>{
                                return{
                                    ...state,
                                    progress:i.label
                                }   
                                })
                            }}
                        />
                </div>
                    <div className='progress_box'>
                        <div className='select_title'>
                            <p>Progress</p>
                        </div>
                        <Select
                            options={Status}
                            onChange={(i)=>{
                            setBase((state)=>{
                                return{
                                ...state,
                                    status:i.value
                                }
                            })
                        }}
                    />
                    </div>
                </div>
                <div className='price_area'>
                        <div className='price_title'>
                            <p>Price:</p>
                        </div>
                        <div className='priceInputArea'>
                            <input type='text'onBlur={(e)=>{
                                    setBase((state)=>{
                                        return{
                                            ...state,
                                                price:e.target.value
                                        }
                                    })
                                }}/>  
                        </div>
                </div>
                {/* '''''''''''''''''''''''''''''''''''''''''' */}
                <div className='create_btn'>
                    <CreateBtn handlerCreate={handlerCreate} base={base} setTicket={setTicket}/>
                </div>
            </div>
        </div>
    )
}