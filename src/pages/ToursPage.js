import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FireBaseConnection from "../core/FireBaseConnection"
const ToursPage = () =>  {
    const params = useParams()
    const [data, setData] = useState({
        source: {},
        list: [],
        isLoaded: false
    })
    useEffect(() => {
        const callFB = async () => {
            const db = new FireBaseConnection().getDB()
            const source = await getDoc(doc(collection(db, "Sources"), where("url") ))
        } 
    })
    return (
        <h1>Product {params.id}</h1>
    )
}
export default ToursPage