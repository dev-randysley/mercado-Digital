import React from 'react';
import {ItemList} from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { collection, getDocs,query, where } from 'firebase/firestore';
import { db } from "../../utils/firebase";

export const ItemListContainer = React.memo(() =>{
    const {categoryID} = useParams();
    const [productos, setProductos] = useState([]);
    
    useEffect(()=>{
        const getData = async()=>{
            if(categoryID){
                const q = query(collection(db, 'itemCollection'),where("categoryId","==",categoryID));
                const response = await getDocs(q);
                const data = response.docs;
                const items = data.map( doc => {return {id:doc.id,  ...doc.data()}});
                setProductos(items)
            }
            else{
                const query = collection(db, 'itemCollection');
                const response = await getDocs(query);
                const data = response.docs;
                const items = data.map( doc => {return {id:doc.id,  ...doc.data()}});
                setProductos(items)
            }

        }
        getData();
    },[categoryID])
    
    
    return(
        <div>
        {
            productos.length === 0 ? <div> <br/> <Spinner animation="border" /> </div>: <ItemList productos = {productos} />
        }
            
        </div>
    )
})
