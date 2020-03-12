import React from 'react'
import './styles.css'

const UploadTextFile = (props) => {
  const { fileContentHandler, fileInfo, label, className } = props;
  const suppress = (e) => {
     e.stopPropagation()
     e.preventDefault()
   }
   const onDrop = async (e) => {
     e.stopPropagation()
     e.preventDefault()
     const file = e.dataTransfer.files[0]
     let text = await file.text()
     if (file) {
       fileInfo(file)
       fileContentHandler(text)
     }
   }
   const onChangeHandler = async (e) => {
     const file = e.target.files[0]
     let text = await file.text()

     if(fileContentHandler != null) {
     fileContentHandler(text)
     }
     if(fileInfo) {
     fileInfo(file)
     }
   }
   return (
     <div
       onDrop={onDrop}
       onDragEnter={suppress}
       onDragOver={suppress}
     >
       <form method='post' action='#' id='#'>
           <label className={`tiny-uploader ${className ? className : ''}`}>
             {label ? label : 'Upload text'}
             <input
               type='file'
               name='file'
               onChange={onChangeHandler}
               style={{ display: 'none' }}
             />
           </label>          
       </form>
     </div>
   )
 }
 
 export default UploadTextFile
 