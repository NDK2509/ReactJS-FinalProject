import { useParams } from "react-router-dom"
const Detail = () =>  {
    const params = useParams()
    return (
        <h1>Product {params.id}</h1>
    )
}
export default Detail