import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    changeTitle: (newValue: string)=> void

}

export function EditableSpan(props:EditableSpanPropsType) {

  const [editMode, setEditMode] =useState<boolean>(false);
  const [title, setTitle] =useState<string>(props.title)

  const onEditMode=()=>{
      setEditMode(true)
      setTitle(props.title)
  }
  const offEditMode=()=>{
      setEditMode(false)
  if(title.trim()) {props.changeTitle(title.trim())}
  }
  const changeTitle=(e:ChangeEvent<HTMLInputElement>)=>{setTitle(e.currentTarget.value)}

    return  (
         editMode
        ?<input
                 autoFocus
                 onBlur={offEditMode}
                 value={title}
             onChange={changeTitle}/> :
        <span onDoubleClick={onEditMode}>{props.title}</span>
    )
}