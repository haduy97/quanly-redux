const IS_REQUIRED_MESSAGE = "*Không được bỏ trống";

export const validators = {
    'username': {
        message: `Bắt buộc điền tên người dùng`
    },
    'password': {
        message: `Bắt buộc điền mật khẩu`
    },
    'role': {
        message: `Bắt buộc chọn vị trí`
    },
    'email': {
        message: `Bắt buộc điền email`
    },
}

export const setValidators = (name , value) => {
    validators[name].error = value
}

export const isRequired = (value) => {
    if (!(value)) {
        return IS_REQUIRED_MESSAGE
    }
    return false
}