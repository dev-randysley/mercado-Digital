import {ItemList} from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { collection, getDocs} from 'firebase/firestore';
import { db } from "../../utils/firebase";

export const Promotions = () =>{
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db, 'itemCollection');
            const response = await getDocs(query);
            const data = response.docs;
            const items = data.map( doc => {return {id:doc.id,  ...doc.data()}});
            const numRandom = Math.floor(Math.random() * 20)
            setProductos(items.slice(numRandom))
        }
        getData();
    },[])

    return(
        <div>
        {
            productos.length === 0 ? <div> <br/> <Spinner animation="border" /> </div>:<ItemList productos = {productos}/>
        }
            
        </div>
    )
}
