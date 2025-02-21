import { FC } from "react";

import { Dialog, DialogTitle, DialogContent, Box } from "@mui/material";
import { ModalUIProps } from "../types";

export const ModalUI: FC<ModalUIProps> = ({ title, onClose, children }) => (
  <>
    <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "black",
          outline: "1px solid white",
          color: "white",
          borderRadius: "1%",
          padding: "20px",
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "auto",
            width: "fit-content",
          }}
        >
          {children}
        </Box>
      </DialogContent>
    </Dialog>
  </>
);
