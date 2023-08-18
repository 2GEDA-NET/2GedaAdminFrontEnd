import ActionButton from "../ui-components/ActionButton";
import UserTable from "../DataTables/UserTable";

import {
    FaCloudDownloadAlt,
    FaRegFilePdf,
    FaLongArrowAltDown,
    FaEye,
    FaTrash,
    FaEdit,
} from "react-icons/fa";
import { useState } from "react";
import Modal from "../ui-components/Modal";

const table_column_heading = [
    {
        key: "email",
        heading: "Email",
    },
    {
        key: "first_name",
        heading: "First Name",
    },
    {
        key: "last_name",
        heading: "Last Name",
    },
    {
        key: "account_type",
        heading: "Account Type",
    },
    {
        key: "phone_number",
        heading: "Phone Number",
    },
    {
        key: "view-btn",
        heading: "",
    },
    
    {
        key: "edit-btn",
        heading: "",
    },
    
    {
        key: "delete-btn",
        heading: "",
    },
];

const table_data = [
    {
        id: 1,
        email: {
            value: "email@gmail.com",
            //   icon: FaRegFilePdf,
        },
        first_name: {
            value: "Admin",
        },

        last_name: {
            value: "Admin",
        },
        account_type: {
            value: "Business",
        },
        phone_number: {
            value: "+2349078865654",
        },
        "view-btn": {
            component: () => (
                <ActionButton
                    label="View"
                    Icon={FaEye}
                    inverse={true}
                    onClick={() => {
                        alert('Welcome to 2geda dashboard presentation');
                    }}
                    style={{color: 'blue', borderColor: 'blue'}}
                />
            ),
        },
        "edit-btn": {
            component: () => (
                <ActionButton
                    label="Edit"
                    Icon={FaEdit}
                    inverse={true}
                    onClick={() => {
                        alert('Welcome to aio dashboard presentation');
                    }}
                    style={{color: 'green', borderColor: 'green'}}
                />
            ),
        },
        "delete-btn": {
            component: () => (
                <ActionButton
                    label="Delete"
                    Icon={FaTrash}
                    inverse={true}
                    onClick={() => {
                        alert('Welcome to aio dashboard presentation');
                    }}
                    style={{color: 'red', borderColor: 'red'}}
                />
            ),
        },
    },
    
];

const ContactList = () => {
    const [modal, setModal] = useState(false);
    const handleClose = () => {
        //alert('closing');
        setModal(false);
    };

    const openModal = () => {
        setModal(true);
    };
    return (
        <>
            <UserTable
                // mainHeading={"Users Contacts"}
                // subHeading={"Review all user contact details."}
                headingRightItem={() => (
                    <ActionButton
                        onClick={openModal}
                        label="Download All"
                        Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px' }}
                    />
                )}
                heading={table_column_heading}
                data={table_data}
            />
            <Modal
                isOpen={modal}
                heading={"Download all email"}
                onClose={handleClose}
                positiveText={'Download'}
                negativeText={'Cancel'}
            />
        </>
    );
};

export default ContactList;
