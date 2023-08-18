import ActionButton from "../ui-components/ActionButton";
import ProductTable from "../DataTables/ProductTable";

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
        heading: "Business Email",
    },
    {
        key: "created_date",
        heading: "Created date",
        // icon: FaLongArrowAltDown,
    },

    {
        key: "product_category",
        heading: "Product Category",
    },
    {
        key: "product_name",
        heading: "Product Name",
    },
    
    {
        key: "quantity",
        heading: "Product Quantity",
    },
    {
        key: "price",
        heading: "Product Price",
    },
    {
        key: "product-description",
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
        created_date: {
            value: "Dec 1, 2022",
        },

        product_category: {
            value: "Electronics",
        },
        product_name: {
            value: "Kings Motor",
        },
        
        "quantity": {
            value: "23",
        },
        "price": {
            value: "$23",
        },
        "product-description": {
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
const CategoriesList = () => {
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

            <ProductTable
                mainHeading={"Categories List"}
                subHeading={"Review all Categories Available on 2geda"}
                headingRightItem={() => (
                    <ActionButton
                        onClick={openModal}
                        label="Download All"
                        Icon={FaCloudDownloadAlt}
                        style={{ margin: '0 19px', }}
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

export default CategoriesList;
