import React from "react";
import CommonTableLoader from "../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "./newTable/NewTable";
import TransitionsModal from "../../commonComponents/transitionsModal/TransitionsModal";
import AppointmentBookingViewModal from "./AppointmetBookingViewModal";
import { UseAppointmentBooking } from "./UseAppointmentBooking";
export default function AppointmentBookings() {
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
  ] = UseAppointmentBooking();
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
        title={"Appointments"}
        tableHeadings={[
          {
            id: "name",
            Label: "Name",
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
          {
            id: "visitDate",
            Label: "Visit Date",
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
      <AppointmentBookingViewModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        viewData={viewData}
      />
    </>
  );
}
