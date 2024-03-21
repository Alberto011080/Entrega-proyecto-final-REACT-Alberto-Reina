// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc,  addDoc, getDocs, getDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAg35msYalO6xMz1L3NT_A2A5p-QTHdtv0",
  authDomain: "react-60225-2024.firebaseapp.com",
  projectId: "react-60225-2024",
  storageBucket: "react-60225-2024.appspot.com",
  messagingSenderId: "614345846618",
  appId: "1:614345846618:web:5bc1de5ea678948d408d63"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const bdd = getFirestore()

/* Que hacer con los productos. A esto se le conoce como:  SE CONOCOCEN COMO  CRUD

    READ - UPDATE - DELETE - CREATE£

    CREATE
    READ
    UPDATE
    DELETE

    */

//Crear productos
//^Acabo de ocultar los objetos pasados manualmente

// console.log(prods)
const prods = [
    {
        "name": "The Mandrake Proyect",
        "artista": "Bruce Dickinson" ,
        "price": 13,
        "stock": 25,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/01.jpg?alt=media&token=27369621-dab6-44f9-911a-2ec4fd3fb64c",
        "category" : "novedad"

    },
    
    {
       
        "name": "Invincible Shield",
        "artista": "Judas Priest" ,
        "price": 19,
        "stock": 25,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/02.jpg?alt=media&token=e3e541a1-ec0f-46fb-a2ae-cbd06e2d6cc2",
        "category" : "novedad"

    },
    {
        
        "name": "Be Right Here",
        "artista": "Blackberry Smoke",
        "price": 15,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/03.jpg?alt=media&token=efd41115-d98d-42e1-9bd7-0bdaae9c2ce7",
        "category" : "novedad"

    },
    {
      
        "name": "Back is Black",
        "artista": "AC/DC",
        "price": 33,
        "stock": 19,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/04.jpg?alt=media&token=3dde3a92-8468-41c5-b4ab-cc414dd580d3",
        "category" : "reedicion"

    },
    {
     
        "name": "Highway To Hell",
        "artista": "AC/DC",
        "price": 33 ,
        "stock": 20 ,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/05.jpg?alt=media&token=7aaa63bd-dbb4-44d1-b475-9615b2ca051c",
        "category" : "reedicion"

    },
    {
      
        "name": "Jar Of Flies",
        "artista": "Alice in Chains",
        "price": 23,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/06.jpg?alt=media&token=0cb7c98f-83fb-45fe-99ea-f256d6360ae8",
        "category" : "novedad"

    },
    {
       
        "name": "The Catalyst",
        "artista": "Amaranthe",
        "price": 16,
        "stock": 5 ,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/07.jpg?alt=media&token=94f03020-8e99-43d4-87b7-75bffe2ca07b",
        "category" : "novedad"

    },
    {
        
        "name": "Against The Wings" ,
        "artista": "Revolution Saints",
        "price": 17,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/08.jpg?alt=media&token=9f130e5e-b707-4360-8762-f7e88d5d9a76",
        "category" : "novedad"

    },
    {
        
        "name": "Vault Of Horrors",
        "artista": "Aborted",
        "price": 18,
        "stock": 5,
        "img":"https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/09.jpg?alt=media&token=362ba2f9-70ea-444e-9aa8-204a36a23590" ,
        "category" : "novedad"

    },
    {
       
        "name": "Inspiratio Profanus",
        "artista": "Dimmu Borgir",
        "price": 26,
        "stock":20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/10.jpg?alt=media&token=6c5d9dc5-3896-4a13-8667-97f096080f95",
        "category" : "novedad"

    },
    {
        
        "name":"Hell, Fire and Damnation (CD)" ,
        "artista":"Saxon",
        "price": 18,
        "stock": 25,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/11.jpg?alt=media&token=ea4dfc27-7f5c-437f-abd9-bc3990cdc7c4",
        "category" : "novedad"

    },
    {
        
        "name": "666" ,
        "artista": "Cobra Spell",
        "price":23 ,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/12.jpg?alt=media&token=70f7fd7c-809e-4224-8313-ae71004f6d58",
        "category" : "novedad"

    },
    {
       
        "name": "Criatura" ,
        "artista": "Non Servium",
        "price":10 ,
        "stock": 3,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/13.jpg?alt=media&token=799fcae9-6e91-48bf-a00d-732b1f75c26f",
        "category" : "novedad"

    },
    {
        
        "name": "The Best Of 1980-1990" ,
        "artista": "U2",
        "price":9 ,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/14.jpg?alt=media&token=dcbdeddf-b041-43c8-874f-a5d45e5288a9",
        "category" : "reedicion"

    },
    {
        
        "name": "(Whats the Story)Morning Glory?" ,
        "artista": "Oasis",
        "price":10 ,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-60225-2024.appspot.com/o/15.jpg?alt=media&token=f7f5c14d-6f70-4a8d-b304-0d44e6af07a1",
        "category" : "reedicion"

    }
]



export const createProducts = async () => {
  
        prods.forEach(async (prod) => {
            await addDoc( collection(bdd, "productos"),{       
                name: prod.name,
                artista: prod.artista ,
                price: prod.price,
                stock: prod.stock,
                category: prod.category, 
                img: prod.img
            })
           
        })
}  

// createProducts()

//Obtener productos
export const  getProducts = async () => {
    const productos = await getDocs (collection(bdd, "productos"))
    const items= productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
    return items
    
}

export const  getProduct = async (id) => {
    const producto = await getDocs (doc(bdd, "productos", id))
    const item= {...producto.data(), id: producto.id}
    return item
    
}
getProducts()
