import React from "react";
import CommonTableLoader from "../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "./newTable/NewTable";
import TransitionsModal from "../../commonComponents/transitionsModal/TransitionsModal";
import CustomerViewModal from "./CustomerViewModal";
import { UseCustomer } from "./UseCustomer";
export default function Customer() {
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
      sellerName,
      setSellerName,
      productTitle,
      setProductTitle,
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
      sellerEmail,
      setSellerEmail,
      email,
      setEmail,
      paymentApproved,setPaymentApproved

    },
  ] = UseCustomer();
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
        title={"Our Customers"}
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
        productTitle={productTitle}
        setProductTitle={setProductTitle}
        sellerName={sellerName}
        setSellerName={setSellerName}
        email={email}
        setEmail={setEmail}
        sellerEmail={sellerEmail}
        setSellerEmail={setSellerEmail}
        paymentApproved={paymentApproved}
        setPaymentApproved={setPaymentApproved}
        submitLoading={submitLoading}
        deleteHandler={deleteHandler}
        navigateHandler={navigateHandler}
        delModal={delModal}
        setDelModal={setDelModal}
        ctaDeleteHandler={ctaDeleteHandler}
        dataViewHandler={dataViewHandler}
        publishHandler={publishHandler}
      />
      <CustomerViewModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        viewData={viewData}
      />
    </>
  );
}
