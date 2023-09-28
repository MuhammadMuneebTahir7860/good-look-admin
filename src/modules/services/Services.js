import React from "react";
import CommonTableLoader from "../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "./newTable/NewTable";
import TransitionsModal from "../../commonComponents/transitionsModal/TransitionsModal";
import { UseServices } from "./UseServices";
import ServiceViewModal from "./ServicesViewModal";
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
      title,
      description,
      setDescription,
      setTitle,
      addBlogHandler,
      isEdit,
      setIsEdit,
      price,
      setPrice,
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
        title={"Services"}
        tableHeadings={[
          {
            id: "Title",
            Label: "Title",
          },
          {
            id: "description",
            Label: "Description",
          },
          {
            id: "price",
            Label: "Price",
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
        serviceTitle={title}
        description={description}
        setTitle={setTitle}
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
        price={price}
        setPrice={setPrice}
      />
      <ServiceViewModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        viewData={viewData}
      />
    </>
  );
}
