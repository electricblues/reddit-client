import { useState, useEffect } from "react";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";

export const ArticleModal = (props) => {
  const { onClose } = props;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    onClose(false);
  };

  useEffect(() => {
    setOpen(props.open);
  }, [props]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Title</DialogTitle>
      <div>Hello</div>
      <Button onClick={handleClose}>Close</Button>
    </Dialog>
  );
};
