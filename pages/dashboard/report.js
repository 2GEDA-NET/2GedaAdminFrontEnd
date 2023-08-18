import { useEffect, useRef, useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import Section from "@/components/ui-components/Section";
import ReportsChart from "@/components/DataCharts/ReportChart";
import HeaderSection from "@/components/ui-components/HeaderSection";
import ActionButton from "@/components/ui-components/ActionButton";
import GeneralReportBarChart from "@/components/DataCharts/GeneralReportBarChart";
import { AiOutlineFileText, AiOutlineLogin, AiOutlineLogout, AiOutlinePlusCircle } from "react-icons/ai";
import DataCard from "@/components/ui-components/DataCard";
import ReportList from "@/components/Lists/ReportList";
import Modal from "@/components/ui-components/Modal";
import DualChartContainer from "@/components/DataCharts/DualChartContainer";
import Input from '@/components/ui-components/Input';


const Report = () => {
    const [modal, setModal] = useState(false);

    const handleClose = () => {
        //alert('closing');
        setModal(false);
    };

    const handleCancel = () => {
        setModal(false);
    }

    const handleSubmit = () => {
        alert('Submit is working..!');
        handleClose();
    }
    return (
        <BaseLayout>
            <HeaderSection
                heading={"Report"}
                subHeading={"Check for reported users, posts, and businesses"}
                rightItem={() => (
                    <ActionButton
                        onClick={() => setModal(true)}
                        Icon={AiOutlinePlusCircle}
                        label="Add New Report"
                    />
                )}
            />

            <Section>
                <DataCard
                    label={"Total Reports"}
                    value={"23,34,450"}
                    percentageValue={56.4}
                    inverse={true}
                />
                <DataCard
                    label={"Total Reported Business"}
                    value={"45,09,333"}
                    percentageValue={3.45}
                />
                <DataCard
                    label={"Total Reported Users"}
                    value={"43,54,111"}
                    percentageValue={10.89}
                />
                <DataCard
                    label={"Total Reported Posts"}
                    value={"43,54,111"}
                    percentageValue={10.89}
                />
                <DataCard
                    label={"Total Banned Posts"}
                    value={"43,54,111"}
                    percentageValue={10.89}
                />
            </Section>
            <DualChartContainer
                heading={'Report Chart'}
                chart1={<ReportsChart />}
                chart2={<GeneralReportBarChart />}
            />
            <ReportList />
            <Modal
                isOpen={modal}
                onClose={handleClose}
                heading={"Add New Report"}
                positiveText={"Save Changes"}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
            >
                <form>
                    <Input type='email' name='email' placeholder='Enter Your Email' />
                    <Input type='text' name='report_id' placeholder='Enter Id Number of Reportee' />
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        cols="100"
                        placeholder="Enter report detailed description..."
                    ></textarea>
                    <Input type='text' name='name' placeholder='Enter Name of Reportee' />
                    <label htmlFor="selectOption">Select Report Type:</label>
                    <select
                        id="selectOption"
                        name="selectOption"
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            width: '200px',
                            backgroundColor: '#f7f7f7',
                            outline: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <option value="option1">Posts</option>
                        <option value="option2">Users</option>
                        <option value="option3">Business</option>
                    </select>
                </form>
            </Modal>

        </BaseLayout>);
};

export default Report;
