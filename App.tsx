import { Dispatch, SetStateAction, useState } from 'react';
import {Home} from './src/screens/Home'

export interface Ipagina{
setpageI: Dispatch<SetStateAction<number>>

}

export default function app(){
  const[page, setPage] = useState(1)
  return(
    <Home setpageI={setPage}/>
  );
}