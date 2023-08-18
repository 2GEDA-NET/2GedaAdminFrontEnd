import ActionButton from "../ui-components/ActionButton";
import ReportTable from "../DataTables/ReportTable";

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
        key: "sent_date",
        heading: "Sent date",
        // icon: FaLongArrowAltDown,
    },

    {
        key: "report-id",
        heading: "Report ID",
    },
    {
        key: "name",
        heading: "Name",
    },
    {
        key: "report-type",
        heading: "Report Type",
    },
    {
        key: "report-description",
        heading: "Report Description",
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
        sent_date: {
            value: "Dec 1, 2022",
        },

        "report-id": {
            value: "1293",
        },
        "name": {
            value: "Kings Motor",
        },
        "report-type": {
            value: "Posts",
        },
        "report-description": {
            value: "Sells contradicted products",
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
                    style={{ color: 'blue', borderColor: 'blue' }}
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
                    style={{ color: 'green', borderColor: 'green' }}
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
                    style={{ color: 'red', borderColor: 'red' }}
                />
            ),
        },
    },
]
const ReportList = () => {
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

            <ReportTable
                mainHeading={"Report List"}
                subHeading={"View, Edit, and Update Report"}
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
                heading={"Download all reports"}
                onClose={handleClose}
                positiveText={'Download'}
                negativeText={'Cancel'}
            />
        </>
    );
};

export default ReportList;
