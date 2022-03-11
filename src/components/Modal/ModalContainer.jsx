import React from 'react'
import { Box, Modal } from "@mui/material"
import './ModalContainer.scss'
import FormAddPost from './Forms/FormAddPost'
import FormEditPost from './Forms/FormEditPost'

function ModalContainer({ open, handleClose, post }) {
  
  return (
    <Modal open={open} onClose={handleClose} post={post} >
      <Box className="box"> 
        {post ? <FormEditPost post={post} handleClose={handleClose} /> : <FormAddPost handleClose={handleClose} />}
      </Box>
    </Modal>
  );
};

export default ModalContainer