import React from "react";
import CommonTableLoader from "../../commonComponents/commonTableLoader/CommonTableLoader";
import NewTable from "./newTable/NewTable";
import TransitionsModal from "../../commonComponents/transitionsModal/TransitionsModal";
import { UseBlog } from "./UseBlog";
import BlogViewModal from "./BlogViewModal";
export default function Blog() {
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
      setDescription,setBlogTitle,
      addBlogHandler,
      isEdit,setIsEdit
    },
  ] = UseBlog();
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
        title={"Blogs"}
        tableHeadings={[
          {
            id: "blogTitle",
            Label: "Blog Title",
          },
          {
            id: "description",
            Label: "Description",
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
      />
      <BlogViewModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        viewData={viewData}
      />
    </>
  );
}
