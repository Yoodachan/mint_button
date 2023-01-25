import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const ResetStyle = createGlobalStyle` 
  ${reset} // styled-reset이라는 패키지를 설치해야한다. 몇가지만 reset해 줄 경우 사용하지 않아도 무방하다.

* {
  box-sizing: border-box;
}

body,h1,h2,h3,h4,h5,p,div,ul,li,dl,dt,dd{
  margin: 0;
  padding: 0;
}

h1,h2,h3,h4,h5,h6 {
  display: block;
}
h1,h4,h5,dt,strong,body,i,em,p,div,ul,li,dl,dt,dd,input,button,textarea {
  font-family: 'Noto Sans KR',sans-serif;
}
h2,h3 {
    font-family: 'Hahmlet', serif;
}
ul,li {
    list-style:none
}
a {  
  display: block;
  text-decoration:none;
  color: inherit;
}
address,em {
    font-style:normal
}

input,button {
  padding: 0;
  border: none;
  outline: none;
  display: block;
}

ul {
  list-style: none;
  padding-left:0px;
}

button {
  appearance: none;
  cursor: pointer;
  background: none;
}

table,tr,th,td {
  padding: 0px;
  border-spacing: 0px;
  border-collapse: collapse;
}

textarea {
  resize: none;
}

i {
  font-style: normal;
}

`;



export default ResetStyle;