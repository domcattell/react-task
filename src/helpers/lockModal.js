//small workaround function for react-bootstrap modals
//onHide props has to be a function. This function
//is used to lock the modal whilst an action is in progress
const lockModal = () => {
	return false
};

export default lockModal