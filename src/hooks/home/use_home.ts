import {useCallback, useEffect, useState} from "react";
import {LogList} from "../../api/log/types";
import CategoryService from "../../api/category";
import LogService from "../../api/log";
import {CategoryList} from "../../api/category/types";

export const useHome = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [logList, setLogList] = useState<LogList>({
        logs: []
    })

    const [categoryList, setCategoryList] = useState<CategoryList>({
        categories: []
    })

    const [openAddDialog, setOpenAddDialog ] = useState(false);

    const load_data = async () => {
        setLoading(true);
        setErrorMessage('');
        try {
            const categories = await CategoryService.get_category_list()
            setCategoryList(categories.data);
            const response = await LogService.get_log_list()
            let sorted_data = response.data.logs.sort((a, b)=> (a.create_at > b.create_at)? -1: 1);
            setLogList({logs: sorted_data});
        } catch (error: any) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load_data();
    }, []);

    const handleClickOpenAddDialog = () => {
        setOpenAddDialog(true);
    };

    const handleCloseAddDialog = () => {
        setOpenAddDialog(false);
    };

    const onAfterAdd = useCallback(() => {
        load_data();
    }, []);

    return {
        loading,
        errorMessage,
        categoryList,
        logList,
        openAddDialog,
        handleClickOpenAddDialog,
        handleCloseAddDialog,
        onAfterAdd
    }
}