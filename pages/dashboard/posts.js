import { useEffect, useRef, useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import HeaderSection from "@/components/ui-components/HeaderSection";
import ActionButton from "@/components/ui-components/ActionButton";
import { AiOutlineFileText, AiOutlineLogin, AiOutlineLogout, AiOutlinePlusCircle } from "react-icons/ai";
import Section from "@/components/ui-components/Section";
import DataCard from "@/components/ui-components/DataCard";
import PostList from "@/components/Lists/PostList";
import Modal from "@/components/ui-components/Modal";
import PostBarChart from "@/components/DataCharts/PostsBarChart";
import MixedChart from "@/components/Charts/MixedChart";
import PostBuinessAndPersonalChart from "@/components/DataCharts/PostBusAndPerChart";
import DualChartContainer from "@/components/DataCharts/DualChartContainer";
import Input from '@/components/ui-components/Input';


const Posts = () => {
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
                heading={"Post"}
                subHeading={"See all Post details"}
                rightItem={() => (
                    <ActionButton
                        onClick={() => setModal(true)}
                        Icon={AiOutlinePlusCircle}
                        label="Add New Post"
                    />
                )}
            />
            <Section>
                <DataCard
                    label={"Total Posts"}
                    value={"23,34,450"}
                    percentageValue={56.4}
                    inverse={true}
                />
                <DataCard
                    label={"Total Business Posts"}
                    value={"45,09,333"}
                    percentageValue={3.45}
                />
                <DataCard
                    label={"Total Personal Posts"}
                    value={"43,54,111"}
                    percentageValue={10.89}
                />
                <DataCard
                    label={"Total Sponsored Posts"}
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
                heading={'Post Chart'}
                chart1={<PostBarChart />}
                chart2={<PostBuinessAndPersonalChart />}
            />

            <PostList />

            <Modal
                isOpen={modal}
                onClose={handleClose}
                heading={"Add New Post"}
                positiveText={"Save Changes"}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
            >
                <form>
                    <Input type='email' name='email' placeholder='Enter Your Email' />
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        cols="100"
                        placeholder="Enter a Post description..."
                    ></textarea><br/>
                    <label htmlFor="selectOption">Select Product Category:</label>
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
                        <option value="option1">Personal</option>
                        <option value="option2">Business</option>
                    </select>
                    <Input type='file' name='post_image' placeholder='Choose Post Image' />
                </form>
            </Modal>


        </BaseLayout>
    );
};

export default Posts;
