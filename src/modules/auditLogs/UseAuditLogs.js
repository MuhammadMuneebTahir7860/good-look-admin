import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from '../../commonComponents/toast/Toast';
import { doDeleteAuditLogs, doGetAuditLogs } from "../../redux/actions/AuditLogsActions";


export default function UseAuditLogs() {
    const [getLoading, setGetLoading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch((doGetAuditLogs(setGetLoading)))
    }, [])
    const data = useSelector(state => state.AuditLogsReducer.auditLogs);
    const [delId, setDelId] = useState('');
    const [delModal, setDelModal] = useState(false);

    const deleteHandler = (id) => {
        setDelId(id);
        setDelModal(!delModal);
    }
    const ctaDeleteHandler = () => {
        dispatch(doDeleteAuditLogs(delId, Toast, setSubmitLoading, setDelModal))
    }

    return [
        {
            getLoading,
            data,
            deleteHandler,
            delModal, setDelModal,
            ctaDeleteHandler,
            submitLoading,
        },
    ];
}
