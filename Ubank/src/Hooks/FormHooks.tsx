import { useEffect } from "react"
import { transformData } from "../utils/Transformer"

useEffect(() => {

const storedata = transformData()    
console.log(storedata)

}, [])

const useForm = () => {

}