import { useState } from "react"
import "./DropArea.css"
const DropArea = ({onDrop}) => {
    const [showDrop, setShowDrop] = useState(false)
  return (
    <section onDrop={() => {
        onDrop()
        setShowDrop(false)
    }} onDragOver={(e) => e.preventDefault()} onDragLeave={() => setShowDrop(false)} onDragEnter={() => setShowDrop(true)} className={showDrop ? "drop_area": "hide_drop"}>Drop here</section>
  )
}

export default DropArea