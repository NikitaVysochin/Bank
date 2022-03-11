import React from 'react'
import { useEffect, useState } from "react"
import { editPostAction } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'
import InputList from './InputList/InputList'
import './FormAddPost.scss'

function FormEditPost({ handleClose, post }) {
  const [_post, setPost] = useState(post)
  const [tagInp, setTagInp] = useState("")
  const [arrTags, setArrTags] = useState([])
  const dispatch = useDispatch()

  const changeInp = (e) => {
    setPost({ ..._post, [e.target.name]: e.target.value })
  }

  const delTag = (index) => {
    setArrTags([...arrTags.slice(0, index), ...arrTags.slice(index + 1)]);
  };

  const addTags = (e) => {
    if (e.keyCode === 13) {
      setArrTags([...arrTags, tagInp]);
      setTagInp("");
    }
  };

  const editPost = (_post) => {
    dispatch(editPostAction({..._post, 'date': new Date()}))
   }

  const Save = () => {
    handleClose();
    editPost(_post);
    setPost({});
    setArrTags([]);
  }

  useEffect(() => {
    setPost({ ..._post, tags: arrTags });
  }, [arrTags]);

  return (
    <InputList 
      Save={Save} 
      newPost={_post}
      changeInp={changeInp}
      delTag={delTag}
      setTagInp={setTagInp}
      tagInp={tagInp}
      addTags={addTags}
      arrTags={arrTags}
    />
  );
};
export default FormEditPost