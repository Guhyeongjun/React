// components/ColorWithContext.js.js
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useColors } from "../ColorProvider";

export default function ColorWithContext({id,title,color,rating}){
    const {removeColor}=useColors()
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={()=>removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{height:50,backgroundColor:color}}></div>
            <StarRating />
        </section>
    )

}