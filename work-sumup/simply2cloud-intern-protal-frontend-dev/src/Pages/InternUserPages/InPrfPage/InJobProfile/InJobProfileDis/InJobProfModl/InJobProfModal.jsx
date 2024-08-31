import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import NoDataPage from "../../../../../../Component/NoDataPage/NoDataPage";
import InternJobProfileForm from "../../InJobProfForm/InJobProfForm";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function InternJobProfileModal({ fromJobPage }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      {fromJobPage ? (
        ""
      ) : (
        <NoDataPage domain={"Please Compleate Your Job Profile"} />
      )}
      {fromJobPage ? (
        <div className="text-center mx-auto">
          <button
            className="px-4 py-2 font-semibold border border-blue-700 border-solid  outline-blue-500  text-blue-500 rounded hover:bg-blue-700 hover:text-white"
            onClick={()=>{setOpen(true)}}
          >
            Apply Now
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center py-4">
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
          >
            Compleate Job Profile
          </button>
        </div>
      )}
      <BootstrapDialog
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Profile Form
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => {
            setOpen(false);
          }}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <InternJobProfileForm />
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
