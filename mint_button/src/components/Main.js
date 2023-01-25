import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';

import styled from 'styled-components';

let MainTopContent = styled.section
`
width: 100%;
height: auto;
color: red;
margin: 60px auto;
text-align : center;
background : #f0faf9; 
border: 1px solid red;
`

let MainBanner = styled.div
`
width: 1200px;
height: 350px;
border-radius: 10px;

`


function Main () {

    return (
        <>
            <MainTopContent>
                <MainBanner>
                    

                </MainBanner>
            </MainTopContent>
        </>
    )


}



export default Main;