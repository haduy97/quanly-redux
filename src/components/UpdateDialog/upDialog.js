import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import { connect, useDispatch } from 'react-redux';
import { closeUpdateDialog, updateUser, inputTxt, selectedUpdateUser } from '../../redux/action/index';
import updateIcon from '../../img/updateicon.png'
import '../AdminUser/ListUser.css';

const UpDialog = (props) => {
    const { openUp, inputText, selectedUp, currencies } = props;
    const dispatch = useDispatch();
    const input = selectedUp ? selectedUp : inputText
    const _onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(inputTxt({ ...inputText, [name]: value }));
    }
    
    return (
        <div>
            <Dialog
                open={openUp}
                onClose={() => dispatch(closeUpdateDialog(false))}
            >
                <DialogTitle align="center" >{<img src={updateIcon}/>}<br/>{"Sửa thông tin cá nhân"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField name="username" label="username" variant="outlined" value={input.username} onChange={_onChange} disabled />
                        <br /><br />
                        <TextField name="password" label="password" variant="outlined"  onChange={_onChange} /><br /><br />
                        <TextField select className="select-role" name="role" type="text" label="role" variant="outlined" onChange={_onChange} >
                            {currencies.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}</TextField><br /><br />
                        <TextField name="email" label="email" variant="outlined"  onChange={_onChange} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={() => dispatch(closeUpdateDialog(false))} >
                        quay lại
          </Button>
                    <Button color="primary" onClick={() => { dispatch(updateUser(selectedUp)); dispatch(closeUpdateDialog(false)); }} autoFocus>
                        cập nhật
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapStateToProps = (state) => ({
    openUp: state.user.openUp,
    inputText: state.user.inputText,
    selectedUp: state.user.selectedUp,
    currencies: state.user.currencies
})

export default connect(mapStateToProps, null)(UpDialog);