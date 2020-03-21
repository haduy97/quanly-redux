import React, { useState, useEffect } from 'react';
import "../AdminUser/ListUser.css";
import AddDialog from '../AddUser/addDialog';
import DelDialog from '../DeleteUser/delDialog';
import UpDialog from '../UpdateDialog/upDialog';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import UserReducer from "../../redux/reducers/UserReducer";
import { connect, useDispatch } from 'react-redux';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { openDialog, openDelDialog, selectedDeleteUser, openUpdateDialog, selectedUpdateUser, inputSearching, inputTxt, getUser } from '../../redux/action/index';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Axios from 'axios';

const url = "http://jsonplaceholder.typicode.com/users"
const AdminUser = (props) => {
  const { users, inputSearch } = props;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       `http://jsonplaceholder.typicode.com/users`
  //     );
  //     dispatch(getUser(result.users))
  //   }
  //   fetchData();
  // }, [])

  const _onSearch = (e) => {
    const value = e.target.value;
    dispatch(inputSearching(value));
  }

  const _searchList = users.filter(_user => {
    if (!inputSearch) {
      return true;
    }
    const toSearch = _user.username.toLowerCase();
    return toSearch.indexOf(inputSearch.toLowerCase()) + 1;
  })

  return (
    <div>
      <flex className="flex-table">
        <h1 className="tittle">Danh sách</h1>
        <TextField
          type="search"
          className="searchUser"
          helperText="Tìm kiếm tên người dùng"
          label={<SearchIcon />}
          onChange={_onSearch}
        />
      </flex>

      <Fab
        color="primary"
        aria-label="add"
        className="icon-add"
        onClick={() => { dispatch(openDialog(true)); dispatch(inputTxt("")) }}
      >
        <AddIcon />
      </Fab>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>User</b></TableCell>
            <TableCell align="center"><b>Password</b></TableCell>
            <TableCell align="center"><b>Vị trí</b></TableCell>
            <TableCell align="center"><b>Email</b></TableCell>
            <TableCell align="center"><b>Chức năng</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((_user, index) => (
            <TableRow key={index}>
              <TableCell align="center">{_user.username}</TableCell>
              <TableCell align="center">{_user.password}</TableCell>
              <TableCell align="center">{_user.role}</TableCell>
              <TableCell align="center">{_user.email}</TableCell>
              <TableCell align="center">
                <IconButton >
                  <EditIcon onClick={() => { dispatch(openUpdateDialog(true)); dispatch(selectedUpdateUser(_user)) }} />
                </IconButton>
                <IconButton key={index} color="secondary" onClick={() => { dispatch(openDelDialog(true)); dispatch(selectedDeleteUser(index)) }} >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddDialog />
      <DelDialog />
      <UpDialog />
    </div>
  );
};

// khi component nào xài thì lấy ra
const mapStateToProps = state => {
  return {
    users: state.user.users,
    inputSearch: state.user.inputSearch
  };
};

export default connect(mapStateToProps, null)(AdminUser);