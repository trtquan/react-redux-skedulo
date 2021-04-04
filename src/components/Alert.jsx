import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.getStatus = this.getStatus.bind(this);
    this.state = {
      display: "none",
    };
  }

  showAlert() {
    toast.warn(
      "Github API rate limit exceeded, try again later or refresh page until it works again",
      {
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }
    );
  }

  getStatus(show) {
    show && this.showAlert();
  }

  componentDidMount() {
    const { showAlert } = this.props;
    this.getStatus(showAlert);
  }

  componentWillReceiveProps(nextProps) {
    this.getStatus(nextProps.showAlert);
  }

  render() {
    return (
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    );
  }
}

Alert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
};

export default Alert;
