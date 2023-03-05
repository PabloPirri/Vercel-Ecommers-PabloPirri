import { initializeApp } from "firebase/app";
import { getFirestore, collection , doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "e-commerce-----pablopirri.firebaseapp.com",
  projectId: "e-commerce-----pablopirri",
  storageBucket: "e-commerce-----pablopirri.appspot.com",
  messagingSenderId: "836739197354",
  appId: "1:836739197354:web:b967cba13f698e544fe3d3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach ( async (prod) => {
        await addDoc (collection (db, "productos"), {
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            cantidad: prod.cantidad,
            desc: prod.desc,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    })
}

export const getProductos = async() => {
    const productos = await getDocs (collection (db, "productos"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}

export const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id: producto.id}
    return item
}

export const updateProducto = async(id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

// /* ------- deleteProducto NO SE UTILIZA --------*/
// /*
// export const deleteProducto = async(id) => {
//     await deleteDoc(doc(db, "productos", id))
// } */

export const createOrdenCompra = async(cliente, productos,precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal, 
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
    return oCompra
}