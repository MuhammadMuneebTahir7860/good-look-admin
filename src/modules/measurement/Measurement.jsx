import React from "react";
import CommonTableLoader from "../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "./newTable/NewTable";
import TransitionsModal from "../../commonComponents/transitionsModal/TransitionsModal";
import { UseMeasurement } from "./UseMeasurement";
import MeasurementViewModal from "./MeasurementViewModal";
export default function Measurement() {
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
      blogTitle,
      description,
      setDescription,
      setBlogTitle,
      addBlogHandler,
      isEdit,
      setIsEdit,
      billingData,
      setBillingData,
      handleAddBilling,
      billings,
      setBillings,
      userData,
      setUserData,
    },
  ] = UseMeasurement();
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
        title={"Measurements"}
        tableHeadings={[
          {
            id: "userName",
            Label: "User name",
          },
          {
            id: "userId",
            Label: "User ID",
          },
          {
            id: "phone",
            Label: "Phone",
          },
          {
            id: "address",
            Label: "Address",
          },
          {
            id: "createdAt",
            Label: "Created At",
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
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        uploadImage={uploadImage}
        loading={loading}
        imgDeleteHandler={imgDeleteHandler}
        name={name}
        blogTitle={blogTitle}
        description={description}
        setBlogTitle={setBlogTitle}
        setDescription={setDescription}
        setName={setName}
        addBlogHandler={addBlogHandler}
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
        billingData={billingData}
        setBillingData={setBillingData}
        handleAddBilling={handleAddBilling}
        billings={billings}
        setBillings={setBillings}
        userData={userData}
        setUserData={setUserData}
      />
      {openModal && (
        <MeasurementViewModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          viewData={viewData}
        />
      )}
    </>
  );
}
