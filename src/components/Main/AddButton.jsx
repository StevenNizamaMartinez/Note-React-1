const AddButton = ({text, event}) => {

    return(
        <button  onClick={event} className="AddButton">{text}</button>
    )
}

export default AddButton