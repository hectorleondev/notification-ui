import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Category } from "../../api/category/types";
import { useAddNotification } from "../../hooks/home/use_add_notification";
import {LoadingButton} from "@mui/lab";

interface AddDialogProps{
    open: boolean;
    handleClose: () => void;
    categories: Category[],
    onAfterAdd: () => void;
}

export const AddDialog = ({open, handleClose, categories, onAfterAdd}:AddDialogProps) => {
    const {
        categoryType,
        onChangeCategory,
        onChangeInput,
        onClose,
        loading,
        disableButton,
        errorMessage,
        message,
        onAddClick
    } = useAddNotification(handleClose, onAfterAdd);

    return (
        <Dialog open={open} onClose={handleClose} fullWidth={true}>
            <DialogTitle>New Notification</DialogTitle>
            <DialogContentText></DialogContentText>
            <DialogContent>
                <Box
                    component='form'
                    noValidate>
                    <FormControl fullWidth>
                        <InputLabel id="operation-type-label">Category</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category-label"
                            label="Category"
                            value={categoryType}
                            onChange={onChangeCategory}
                        >
                            <MenuItem value="0"></MenuItem>
                            {categories.map((item)=> (
                                <MenuItem value={item.category_id}>{item.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl> 
                    <TextField
                        margin="dense"
                        id="name"
                        label="Message"
                        fullWidth
                        variant="outlined"
                        value={message}
                        onChange={(e)=>onChangeInput(e)}
                    />   
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <LoadingButton
                    loading={loading}
                    onClick={onAddClick}
                    disabled={disableButton}
                >
                    Create Notification
                </LoadingButton>
            </DialogActions>
            {errorMessage !== "" && (
                <Alert variant="filled" severity="error">
                    {errorMessage}
                </Alert>
            )}
        </Dialog>
    )
}