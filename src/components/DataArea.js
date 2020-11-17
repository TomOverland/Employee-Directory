import React from 'react';
import DataTable from "./DataTable";
import Nav from "./Nav"
import API from "../utils/API";
import "../styles/DataArea.css";

class DataArea extends React.Component {
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }

    headings = [
        { name: "Image", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "Phone", width: "20%" },
        { name: "Email", width: "20%" },
        { name: "DOB", width: "10%" }
    ]

    handleSort = heading => {
        if (this.state.order === "descend") {
            this.setState({
                order: "ascend"
            })
        } else {
            this.setState({
                order: "descend"
            })
        }

        // const compareFnc = (a, b) => {}
    }
}
