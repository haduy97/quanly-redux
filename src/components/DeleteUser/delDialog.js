import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { connect, useDispatch } from 'react-redux';
import { closeDelDialog, deleteUser } from '../../redux/action';
import deleteIcon from '../../img/delete-icon.png';

const DelDialog = (props) => {
    const { openDel, selectedDel } = props
    const dispatch = useDispatch()

    return (
        <div>
            <Dialog
                open={openDel}
                onClose={() => dispatch(closeDelDialog(false))}
            >
                <DialogContent>
                    <DialogContentText align="center" >
                        {<img src={deleteIcon}/>}<br/>
                        <b>Xóa người dùng này ?</b>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={() => dispatch(closeDelDialog(false))} >
                        quay lại
          </Button>
                    <Button color="primary" onClick={() => { dispatch(deleteUser(selectedDel)); dispatch(closeDelDialog(false)) }} autoFocus>
                        xóa
          </Button>
                </DialogActions>
            </Dialog>
        </div>

    );
};
const mapStateToProps = (state) => ({
    openDel: state.user.openDel,
    selectedDel: state.user.selectedDel
});

export default connect(mapStateToProps, null)(DelDialog);