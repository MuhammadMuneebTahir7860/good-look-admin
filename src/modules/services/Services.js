import React from "react";
import CommonTableLoader from "../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "./newTable/NewTable";
import TransitionsModal from "../../commonComponents/transitionsModal/TransitionsModal";
import { UseServices } from "./UseServices";
import UsersViewModal from "./ServicesViewModal";
export default function Services() {
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
      navigateHandler,
      publishHandler
    },
  ] = UseServices();
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
        title={"All Services"}
        tableHeadings={[
          {
            id: "fullName",
            Label: "Full Name",
          },
          {
            id: "email",
            Label: "Email",
          }, {
            id: "contact",
            Label: "Contact",
          },

          {
            id: "registeredAt",
            Label: "Registered At",
          },
         
          {
            id: "Details",
            Label: "Details",
          },

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
        navigateHandler={navigateHandler}
        delModal={delModal}
        setDelModal={setDelModal}
        ctaDeleteHandler={ctaDeleteHandler}
        dataViewHandler={dataViewHandler}
        publishHandler={publishHandler}
      />
      <UsersViewModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        viewData={viewData}
        navigateHandler={navigateHandler}
      />
    </>
  );
}
