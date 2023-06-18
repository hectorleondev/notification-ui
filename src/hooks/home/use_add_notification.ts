import { SelectChangeEvent } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import NotificationService from "../../api/notification";

export const useAddNotification = (handleClose: ()=>void, onAfterAdd: ()=>void) => {
    const [disableButton, setDisableButton] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('')
    const [categoryType, setCategoryType] = useState('0');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setUpForm();
    }, []);

    const setUpForm = () => {
        setMessage('');
        setCategoryType('0');
        setLoading(false);
    }

    const onChangeCategory = useCallback((event: SelectChangeEvent) => {
        const item = event.target.value;
        setCategoryType(event.target.value);
        if(item != "0" && message != ""){
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [message]);

    const onClose = useCallback(() => {
        setUpForm();
        handleClose()
        setLoading(false);
        setDisableButton(true);
        setErrorMessage('');
    }, []);

    const onChangeInput = useCallback((e: any) => {
        const newValue = e.currentTarget.value;
        setMessage(newValue);
        if(categoryType != "0" && newValue != ""){
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [categoryType]);


    const onAddClick = useCallback(async () => {
        setMessage('');
        setLoading(true);
        NotificationService.save_calculation({
            category_id: categoryType,
            message
        }).then((res)=>{
            onClose();
            onAfterAdd();
        })
        .catch((e: any) => {
            setErrorMessage(e.response.data.message);
        })
        .finally(()=>setLoading(false))
    

    }, [message, categoryType]);

    return  {
        categoryType,
        onChangeCategory,
        onChangeInput,
        onClose,
        loading,
        disableButton,
        errorMessage,
        message,
        onAddClick
    }
}