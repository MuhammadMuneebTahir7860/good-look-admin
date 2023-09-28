import React from "react";
import CommonTableLoader from "../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "./newTable/NewTable";
import TransitionsModal from "../../commonComponents/transitionsModal/TransitionsModal";
import OrderViewModal from "./OrderViewModal";
import { UserOrder } from "./UseOrder";
export default function Order() {
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
      publishHandler,
      ctaApprovedHandler,
      
    },
  ] = UserOrder();
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
        title={"All Orders"}
        tableHeadings={[
          {
            id: "title",
            Label: "Title",
          },
          {
            id: "seller",
            Label: "Seller ",
          },
          {
            id: "buyer",
            Label: "Buyer",
          },
          {
            id: "amount",
            Label: "Amount",
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
        ctaApprovedHandler={ctaApprovedHandler}
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
      <OrderViewModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        viewData={viewData}
      />
    </>
  );
}
