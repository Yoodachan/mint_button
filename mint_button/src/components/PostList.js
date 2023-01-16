
// 게시판 에디터
import { useState } from 'react';

import '../css/PostList.css';



function PostList () {
    let [글제목, 글제목변경] = useState( ['남자코트 추천', '강남 우동맛집', '파이썬 독학'] ); 
    let [따봉, 따봉변경] = useState([0,0,0]);
    let [ modal, setModal ] = useState(false); 
    let [ title,setTitle ] = useState(0); 
    let [ 입력값,입력값변경 ] = useState(0);


    // var 어레이 = [];
    // for (var i = 0; i < 3; i++) {
    //     어레이.push(<div>안녕</div>)
    // }

    return (
    <section id="main_content">

        <button onClick={ ()=>{ 
            let copy = [...글제목]
            copy[0] = '여자코트 추천';
            글제목변경(copy)
            } }> 수정버튼 </button>

        <button onClick={ ()=>{ 
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy)
            } }> 정렬버튼 </button>

        {
        글제목.map(function(e,i){
            return (
            <div className="list" key={i}>
                <h4 onClick={ ()=>{ 
                    setModal(!modal);
                    setTitle(i); 
                }}>
                { 글제목[i] } 
                <span onClick={(e)=>{ 
                    e.stopPropagation()
                    let copy = [...따봉];
                    copy[i] = copy[i] + 1;
                    따봉변경(copy)  
                }}>👍
                </span> 
                {따봉[i]} 
                </h4> 
                <p>2월 18일 발행</p>
                <button onClick={                   
                    ()=>{
                        let copy = [...글제목];
                        copy.splice(i,1)
                    }
                }>글 수정</button>
                <button onClick={
                    ()=>{
                        let copy = [...글제목];
                        copy.splice(i,1)
                    }
                }>글 삭제</button>
            </div> )
          }) 
        }

        <input 
        type="text" 
        onChange={ (e,i)=>{
            입력값변경(e.target.value);
            console.log(입력값)
        }}
        />
        <button onClick={
            (e,i)=>{
                let copy = [...글제목];

                copy.push(입력값)
                글제목변경(copy)
                // 글제목변경().push(입력값)
            }

        } >글 추가</button>
        
    

        { 
            modal == false ? <Modal color={ "skyblue" } 글제목={ 글제목 } 글제목변경={ 글제목변경 } title={title} /> : null
        }

        {/* { 어레이 } */}

    </section>
    )
}


function Modal(props,i){
    return (
      <div className="modal">
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
            let copy = [ ...props.글제목 ];
            props.글제목변경(copy)
            }}>글수정</button>
      </div>
    )
  }


export default PostList;