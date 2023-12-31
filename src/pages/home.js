import '../App.css'
import Select from 'react-select';
import Header from '../components/header';
import New from '../components/New/new';
import CreateBtn from "../components/buttons/createbtn";
import {useState} from "react";
import CreateModal from "../components/createModal/createmodal";
import { useDispatch , useSelector} from 'react-redux';
import { isShow, userId } from '../store/index';
import { setData } from '../store/index';
import { setComments } from '../store/index';
import CommentModal from '../components/commentModal/commentModal';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
  const [ticket,setTicket] = useState([])
  const userId = useSelector((state) => state.index.userId)
  const dispatch = useDispatch()
  const isShowState = useSelector((state) => state.index.show)
  const isCommentState = useSelector((state) => state.index.comments)

  const navigate = useNavigate()

  useEffect(() =>{
      if(userId === 0){
          navigate("/")
      }
  },[])

  const handlerCreate = () =>{

    if(isShowState){
       dispatch(isShow({show:false}))
    } else{
      dispatch(isShow({show:true}))
    }
  }

    const handlerComment = () => {
        if(isCommentState){
          dispatch(setComments({comments:false}))
        }else{
          dispatch(setComments({comments:true}))
        }
    }

  return (
    <div>
      <div className='bg'>
        <div className='navigation_bar_box'>
          <div className='nav_title_box'>
            <p>Deals</p>
          </div>
          <div className='search--cont'>
              
          </div>
          <div className='createBtn_box'>
            <CreateBtn handlerCreate={handlerCreate}/>
          </div>
          <div className='general_box'>
            <p>General</p>
          </div>
          <div className='search_box'>
            <div className='Deals_box'>Deals in Progress</div>
            <input className='search' placeholder='search'></input>
          </div>
          <div className='settings_box'>
            <div className='settings'></div>
          </div>
        </div>
        <div className='nav_bar2_box'>
          <div className='nav_bar2'></div>
          <div className='nav_bar3'></div>
        </div>
        <div className='main_cont'>
          <New ticket={ticket} title={'New'} id={1} color={'green'} commentMenu={handlerComment}/>
          <New ticket={ticket} title={'In Progress'} id={2} color={'orange'}commentMenu={handlerComment}/>
          <New ticket={ticket} title={'Testing'} id={3} color={'yellow'}commentMenu={handlerComment}/>
          <New ticket={ticket} title={'Done'} id={4} color={'red'}commentMenu={handlerComment}/>
        </div>
      </div>
      <CreateModal handlerModal={handlerCreate} setTicket={setTicket} ticket={ticket} commentMenu={handlerComment}/>
      <CommentModal commentMenu={handlerComment} />
    </div>
  );
}

export default Home;
