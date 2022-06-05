import {useSearchParams } from "react-router-dom"

const SearchPage = () => {
    const [searchParams] = useSearchParams()
    return <div className="text-center">{searchParams.get("searchKey")}</div>
}
export default SearchPage