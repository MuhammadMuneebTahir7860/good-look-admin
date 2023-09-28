import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { Divider, Hidden, Icon } from "@mui/material";
import { NewTableStyle } from "./NewTableStyle";
import GlobalSearch from "../../../commonComponents/globalSearch/GlobalSearch";
import { AppContext } from "../../../State";
import FormModal from "../formModal/FormModal";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UseWindowDimensions from "../../../customHooks/UseWindowDimensions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { faListNumeric } from "@fortawesome/free-solid-svg-icons";
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, tableHeading } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <NewTableStyle.Tablehead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {tableHeading?.map((headCell, i) => {
          return (
            <TableCell
              key={headCell?.id}
              align={"left"}
              // padding={'none'}
              sortDirection={orderBy === headCell?.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell?.id}
                direction={orderBy === headCell?.id ? order : "asc"}
                onClick={createSortHandler(headCell?.id)}
                sx={{ fontSize: 12, color: "#6D7D93" }}
              >
                {headCell.Label}
                {orderBy === headCell?.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </NewTableStyle.Tablehead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  tableHeading: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      Label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { width } = UseWindowDimensions();
  const { toolBarTitle, handleClickOpen, state } = props;

  const AddButton = ({ handleClickOpen }) => {
    return (
      <>
        {width > 600 ? (
          <NewTableStyle.AddButton
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            Add
          </NewTableStyle.AddButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="search"
            disableFocusRipple
            disableRipple
            onClick={handleClickOpen}
          >
            <NewTableStyle.AddIcon />
          </IconButton>
        )}
      </>
    );
  };
  return (
    <>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" id="tableTitle" component="div">
          {toolBarTitle}
        </Typography>
        <div>
          <AddButton handleClickOpen={handleClickOpen} />
        </div>
      </Toolbar>
      <Divider />
    </>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  toolBarTitle: PropTypes.string.isRequired,
  handleAnchorClick: PropTypes.func.isRequired,
};

const MobileSearchBar = (props) => {
  const { searchShow, setSearchShow, setSearchQuery } = props;
  return (
    <Hidden smUp>
      <>
        {searchShow && (
          <NewTableStyle.SearchBox>
            <GlobalSearch
              onChangeText={(val) => {
                setSearchQuery(val);
              }}
              placeholder="Search here..."
              searchCancel={() => {
                setSearchQuery("");
              }}
            />
            <IconButton
              size="small"
              disableFocusRipple
              disableRipple
              onClick={(val) => {
                setSearchShow(!searchShow);
                setSearchQuery("");
              }}
            >
              <NewTableStyle.CloseIconBox>
                <NewTableStyle.CloseIcon />
              </NewTableStyle.CloseIconBox>
            </IconButton>
          </NewTableStyle.SearchBox>
        )}
        {!searchShow && (
          <NewTableStyle.HeaderIconsContainer>
            <IconButton
              color="inherit"
              aria-label="search"
              disableFocusRipple
              disableRipple
              onClick={() => setSearchShow(!searchShow)}
            >
              <NewTableStyle.SearchIcon />
            </IconButton>
          </NewTableStyle.HeaderIconsContainer>
        )}
      </>
    </Hidden>
  );
};

export default function NewTable({
  title,
  tableHeadings,
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
  serviceTitle,
  description,
  setDescription,
  setTitle,
  addBlogHandler,
  isEdit,
  setIsEdit,
  price,setPrice
}) {
  const { state, dispatch } = React.useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchShow, setSearchShow] = React.useState(false);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleClickOpen = (row, type) => {
    if (type === "update") {
      setTitle("");
      setDescription("");
      setProfileImg("");
      dispatch({
        type: "setModal",
        payload: {
          modalUpdateFlag: true,
          openFormModal: true,
        },
      });
      updateHandler(row);
    } else {
      dispatch({
        type: "setModal",
        payload: {
          modalUpdateFlag: false,
          openFormModal: true,
        },
      });
    }
  };

  //open dropDown panel
  const handleAnchorClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //close dropDown panel
  const searchingFor = (searchQuery) => {
    // return function (data) {
    //   return (data?.name).toLowerCase().includes(searchQuery?.toLowerCase());
    // };
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.length) : 0;
  return (
    <Box sx={{ width: "100%" }}>
      {/* Form Modal */}
      <FormModal
        ctaUpdateHandler={ctaUpdateHandler}
        profileImg={profileImg}
        serviceTitle={serviceTitle}
        description={description}
        setDescription={setDescription}
        setTitle={setTitle}
        setProfileImg={setProfileImg}
        updateHandler={updateHandler}
        addBlogHandler={addBlogHandler}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
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
        delModal={delModal}
        setDelModal={setDelModal}
        ctaDeleteHandler={ctaDeleteHandler}
        price={price}
        setPrice={setPrice}
      />
      {/* Form Modal */}
      <NewTableStyle.Paper>
        <EnhancedTableToolbar
          numSelected={selected.length}
          toolBarTitle={title}
          state={state}
          dispatch={dispatch}
          handleAnchorClick={handleAnchorClick}
          handleClickOpen={handleClickOpen}
        />

        <NewTableStyle.MobileViewTableHeader
          searchShow={searchShow}
          disableGutters
        >
          <NewTableStyle.PaginationContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              labelRowsPerPage={"Rows per page:"}
              component="div"
              count={data?.length ? data?.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </NewTableStyle.PaginationContainer>

          <Hidden smDown>
            <GlobalSearch
              placeholder="Search"
              onChangeText={(val) => {
                setSearchQuery(val);
              }}
              searchCancel={() => {
                setSearchQuery("");
              }}
            />
          </Hidden>

          <MobileSearchBar
            searchShow={searchShow}
            setSearchShow={setSearchShow}
            setSearchQuery={setSearchQuery}
          />
        </NewTableStyle.MobileViewTableHeader>

        <NewTableStyle.TableContainer>
          <NewTableStyle.Table aria-labelledby="tableTitle" size={"medium"}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              // onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data?.length}
              tableHeading={tableHeadings}
            />
            <TableBody>
              {data
                ?.slice()
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <>
                      <TableRow tabIndex={-1} key={index} sx={{ height: 60 }}>
                        <TableCell></TableCell>
                        <TableCell align="left">{row?.name}</TableCell>
                        <TableCell align="left">{row?.workTitle}</TableCell>
                        <TableCell align="left">
                          <VisibilityIcon
                            sx={{
                              marginRight: 2,
                              cursor: "pointer",
                              color: "#DEB18A",
                            }}
                            onClick={() => dataViewHandler(row)}
                          />
                          <DeleteIcon
                            onClick={() => deleteHandler(row?._id)}
                            sx={{
                              color: "red",
                              marginRight: 2,
                              cursor: "pointer",
                            }}
                          />
                          <EditIcon
                            onClick={() => handleClickOpen(row, "update")}
                            sx={{ cursor: "pointer", color: "#1E86FF" }}
                          />
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </NewTableStyle.Table>
        </NewTableStyle.TableContainer>
      </NewTableStyle.Paper>
    </Box>
  );
}
