import PropTypes from 'prop-types';
import '../../stylesheets/AddColorForm.scss';

const AddColorForm = ({onNewColor = f => f}) => {
    let _title, _color;
    
    const submit = e => {
        e.preventDefault();
        onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    };

    return (
        <form className="add-color" onSubmit={submit}>
            <input type="text" ref={input => _title = input} placeholder="color title..." required />
            <input type="color" ref={input => _color = input} required />
            <button>추가</button>
        </form>
    );
};

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
};

AddColorForm.displayName = "AddColorForm";

export default AddColorForm;
