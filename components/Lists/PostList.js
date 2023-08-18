import ActionButton from "../ui-components/ActionButton";
import PostTable from "../DataTables/PostTable";

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
        key: "created-date",
        heading: "Created date",
    },
    {
        key: "post_description",
        heading: "Post Decription",
    },
    {
        key: "likes",
        heading: "Number of Likes",
    },
    {
        key: "shares",
        heading: "Number of Shares",
    },

    {
        key: "comments",
        heading: "Number of Comments",
    },
    {
        key: "views",
        heading: "Number of Views",
    },
    {
        key: "account_type",
        heading: "Account Type",
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
        "created-date": {
            value: "Dec 1, 2022",
        },
        post_description: {
            value: "I sell perfumes and fashion assessories",
        },
        likes: {
            value: "20",
        },
        shares: {
            value: "20",
        },

        comments: {
            value: "20",
        },

        views: {
            value: "20",
        },
        account_type: {
            value: "Business",
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


];

const PostList = () => {
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
            <PostTable
                mainHeading={"Post List"}
                subHeading={"Review all Post details."}
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

export default PostList;
