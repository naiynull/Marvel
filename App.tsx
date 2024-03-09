import { Dispatch, SetStateAction, useState } from 'react';
import {Home} from './src/screens/Home'
import { Login } from './src/screens/login';
import { Geral } from './src/screens/Geral';
import { Comics } from './src/screens/comics';

export interface Ipagina{
setpageI: Dispatch<SetStateAction<number>>

}

export default function app(){
  const[page, setPage] = useState(1)
if (page == 1) {
  return <Home setpageI={setPage} />
}else if (page == 2) {
  return <Login setpageI={setPage} />
}else if (page == 3) {
  return <Geral setpageI={setPage} />
}else if (page == 4) {
  return <Comics setpageI={setPage} />
}
}