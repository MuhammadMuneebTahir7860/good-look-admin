import React from 'react';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader';
import NewTable from './newTable/NewTable';
import TransitionsModal from '../../commonComponents/transitionsModal/TransitionsModal';
import UseAuditLogs from './UseAuditLogs';
import OverlayLoader from '../../commonComponents/overlayLoader/OverlayLoader';
export default function AuditLogs() {
    const [{
        getLoading,
        data,
        deleteHandler,
        delModal, setDelModal,
        ctaDeleteHandler,
        submitLoading,
    }] = UseAuditLogs();
    if (
        getLoading
    ) {
        return <CommonTableLoader />;
    }
    return (
        <>
            <OverlayLoader open={submitLoading} />
            <TransitionsModal sumbitHandler={ctaDeleteHandler} open={delModal} setOpen={setDelModal} />
            <NewTable
                title={'Audit Logs'}
                tableHeadings={[
                    {
                        id: "time",
                        Label: "Time"
                    },
                    {
                        id: "user",
                        Label: "User"
                    },
                    {
                        id: "changes",
                        Label: "Changes"
                    },
                    {
                        id: "action",
                        Label: "Action"
                    },
                ]}
                data={data}
                deleteHandler={deleteHandler}
            />
        </>
    )
}
