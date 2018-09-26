import React from 'react';
import PropTypes from 'prop-types';

const AddColorForm = ({ onNewColor = f => f }) => {
    let _title, _color;
    const submit = e => {
        e.preventDefault();
        onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus()
    };
    return (
        <form onSubmit={submit}>
            <div className="input-group mb-3">
                <input ref={input => _title = input}
                       type="text"
                       className="form-control"
                       placeholder="color title..." required/>
                <input className="form-control"
                       ref={input => _color = input}
                       type="color" required/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary">ADD</button>
                </div>
            </div>
        </form>
    )
};

AddColorForm.propTypes = {
    onNewColor: PropTypes.func,
};

AddColorForm.defaultProps = {
    onNewColor: f => f,
};

export default AddColorForm;