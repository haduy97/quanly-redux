import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from "@material-ui/core/MenuItem";
import { connect, useDispatch } from 'react-redux';
import { closeDialog, addDialog, inputTxt } from '../../redux/action';
import TextField from '@material-ui/core/TextField';
import addIcon from '../../img/usericon.png';
import '../AdminUser/ListUser.css';

const AddDialog = (props) => {
    const { openAdd, inputText, currencies } = props
    // const [inputText, setInputText] = useState("");
    const dispatch = useDispatch()
    const _onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(inputTxt({ ...inputText, [name]: value }));
    }
    const newItem = { ...inputText };

    // Validation
    const _usernameValidate = (username) => {
        const MIN_LENGTH = 3;
        const MAX_LENGTH = 20;
        if (!username) {
            window.alert("Tên không được để trống");
            return false;

        }
        const usernameLength = username.length;
        if (usernameLength <= MIN_LENGTH || usernameLength > MAX_LENGTH) {
            window.alert("Tên phải từ 4 đến 20 kí tự !!");
            return false;
        }
        return true;
    };
    const _passwordValidate = (password) => {
        const MIN_LENGTH = 6;
        if (!password) {
            window.alert("Tên không được để trống");
            return false;
        }
        const passwordLength = password.length;
        if (passwordLength < MIN_LENGTH) {
            window.alert("Mật khẩu ít nhất là 6 kí tự");
            return false;
        }
        return true;
    }
    const _emailValidate = (email) => {
        const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const checking = checkEmail.exec(email);
        if (checking === null) {
            window.alert("Email không hợp lệ!! VD: example@gmail.com");
            return false;
        }
        return true;
    }
    // const _roleValidate = ()
    const _onAddHandle = (newItem) => {
        if (_usernameValidate(newItem.username) && _passwordValidate(newItem.password) && _emailValidate(newItem.email)) {
            dispatch(addDialog(newItem));
            dispatch(closeDialog(false))
        }
    }

    return (
        <div>
            <Dialog
                open={openAdd}
                onClose={() => dispatch(closeDialog(false))}
            >
                <DialogTitle align="center">{<img src={addIcon} />}<br />{`Tạo người dùng mới`}</DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        <TextField name="username" type="text" label="username" variant="outlined" onChange={_onChange} />
                        <br /><br />
                        <TextField name="password" type="password" label="password" variant="outlined" onChange={_onChange} /><br /><br />
                        <TextField select className="select-role" name="role" type="text" label="role" variant="outlined" onChange={_onChange} value={inputText.role ? inputText.role : 'Member'} >
                            {currencies.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}</TextField><br /><br />
                        <TextField name="email" type="text" label="email" variant="outlined" onChange={_onChange} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={() => dispatch(closeDialog(false))}>
                        quay lại
          </Button>
                    <Button color="primary" onClick={() => {
                        _onAddHandle(newItem)
                    }} autoFocus>
                        tạo
          </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
};

// khi component nào xài thì lấy ra
const mapStateToProps = (state) => ({
    openAdd: state.user.openAdd,
    inputText: state.user.inputText,
    currencies: state.user.currencies
})


export default connect(mapStateToProps, null)(AddDialog);