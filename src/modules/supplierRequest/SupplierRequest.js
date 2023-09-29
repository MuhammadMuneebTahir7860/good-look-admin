import React from "react";
import CommonTableLoader from "../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "./newTable/NewTable";
import TransitionsModal from "../../commonComponents/transitionsModal/TransitionsModal";
// import ClientViewModal from "./ClientViewModal";
import { UseSupplierRequest } from "./UseSupplierRequest";
export default function SupplierRequest() {
  const [
    {
      getLoading,
      data,
      ctaUpdateHandler,
      profileImg,
      setProfileImg,
      updateHandler,
      uploadImage,
      loading,
      imgDeleteHandler,
      name,
      setName,
      contact,
      setContact,
      address,
      setAddress,
      email,
      setEmail,
      submitLoading,
      deleteHandler,
      delModal,
      setDelModal,
      ctaDeleteHandler,
      dataViewHandler,
      viewData,
      handleCloseModal,
      openModal,
    },
  ] = UseSupplierRequest();
  if (getLoading) {
    return <CommonTableLoader />;
  }
  return (
    <>
      <TransitionsModal
        sumbitHandler={ctaDeleteHandler}
        open={delModal}
        setOpen={setDelModal}
      />
      <NewTable
        title={"Resquests"}
        tableHeadings={[
          {
            id: "clientName",
            Label: "Worker Name",
          },
          {
            id: "email",
            Label: "Email",
          },
          {
            id: "contact",
            Label: "Contact",
          },

          {
            id: "address",
            Label: "Address",
          },
          // {
          //   id: "registeredAt",
          //   Label: "Registered At",
          // },

          // {
          //   id: "Details",
          //   Label: "Details",
          // },
          {
            id: "actions",
            Label: "Actions",
          },
        ]}
        data={data}
        ctaUpdateHandler={ctaUpdateHandler}
        profileImg={profileImg}
        setProfileImg={setProfileImg}
        updateHandler={updateHandler}
        uploadImage={uploadImage}
        loading={loading}
        imgDeleteHandler={imgDeleteHandler}
        name={name}
        setName={setName}
        contact={contact}
        setContact={setContact}
        address={address}
        setAddress={setAddress}
        email={email}
        setEmail={setEmail}
        submitLoading={submitLoading}
        deleteHandler={deleteHandler}
        delModal={delModal}
        setDelModal={setDelModal}
        ctaDeleteHandler={ctaDeleteHandler}
        dataViewHandler={dataViewHandler}
      />
      {/* <ClientViewModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        viewData={viewData}
      /> */}
    </>
  );
}
