import { useEffect, useRef, useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import Card from "../../components/ui-components/Card";
import FullWidthCard from "../../components/ui-components/FullWidthCard";
import Header from "../../components/ui-components/Header";
import HeaderSection from "../../components/ui-components/HeaderSection";
import Modal from "../../components/ui-components/Modal";
import ActionButton from "../../components/ui-components/ActionButton";
import BillingHistory from "../../components/BillingHistory";
import UserList from "../../components/Lists/UserList";
import DoughnutChartExample from "../../components/DoughnutChartExample";
import DataCard from "../../components/ui-components/DataCard";
import { FaUserCircle, FaEnvelope } from 'react-icons/fa';
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FiUser, FiLogOut, FiHelpCircle } from "react-icons/fi";
import { AiOutlineFileText, AiOutlineLogin, AiOutlineLogout, AiOutlinePlusCircle } from "react-icons/ai";
import Section from "../../components/ui-components/Section";
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import PieChart from "@/components/Charts/PieChart";
import MixedChart from "@/components/Charts/MixedChart";
import RadarChart from "@/components/Charts/RadarChart";
import PolarAreaChart from "@/components/Charts/PolarChart";
import PostBuinessAndPersonalChart from "@/components/DataCharts/PostBusAndPerChart";
import BusinessCategoryChart from "@/components/DataCharts/BusinessCategoryChart";
import ReportsChart from "@/components/DataCharts/ReportChart";
import GeneralReportBarChart from "@/components/DataCharts/GeneralReportBarChart";
import FunnelChart from "@/components/Charts/FunnelChart";
import WaterfallChart from "@/components/Charts/WaterfallChart";
import ProductChart from "@/components/DataCharts/ProductChart";
import SalesChart from "@/components/DataCharts/SalesChart";
import DualChartContainer from "@/components/DataCharts/DualChartContainer";
import Input from '@/components/ui-components/Input';


const Home = () => {
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
      {/* <Header /> */}
      <HeaderSection
        heading={"Dashboard"}
        subHeading={"Welcome to your Admin dashboard"}
        rightItem={() => (
          <ActionButton
            onClick={() => setModal(true)}
            Icon={AiOutlinePlusCircle}
            label="Add New User"
          />
        )}
      />

      <Section>
        <DataCard
          label={"Total Users"}
          value={"23,34,450"}
          percentageValue={56.4}
          inverse={true}
        />
        <DataCard
          label={"Total Posts"}
          value={"45,09,333"}
          percentageValue={3.45}
        />
        <DataCard
          label={"Total Business"}
          value={"43,54,111"}
          percentageValue={10.89}
        />
        <DataCard
          label={"Total Reports"}
          value={"43,54,111"}
          percentageValue={10.89}
        />
        <DataCard
          label={"Total Products"}
          value={"43,54,111"}
          percentageValue={10.89}
        />
      </Section>
      <DualChartContainer
        heading={'User Chart'}
        chart1={<LineChart />}
        chart2={<BarChart />}
      />
      <DualChartContainer
        heading={'Business Chart'}
        chart1={<BusinessCategoryChart />}
        chart2={<PostBuinessAndPersonalChart />}
      />
      <DualChartContainer
        heading={'Report Chart'}
        chart1={<ReportsChart />}
        chart2={<GeneralReportBarChart />}
      />

      <DualChartContainer
        heading={'Product Chart'}
        chart1={<SalesChart />}
        chart2={<ProductChart />}
      />
      <Modal
        isOpen={modal}
        onClose={handleClose}
        heading={"Add New Product"}
        positiveText={"Save Changes"}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      >
        <form>
          <Input type='email' name='business_email' placeholder='Enter Business Email' />
          <Input type='text' name='product_name' placeholder='Enter Product Name' />
          <textarea
            id="description"
            name="description"
            rows="4"
            cols="100"
            placeholder="Enter a detailed description..."
          ></textarea>

          <Input type='number' min="1" max="100" step="1" name='quantity' placeholder='Enter Product Quantity' />
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
            <option value="option1">Electronics</option>
            <option value="option2">Fashion and Beauty</option>
            <option value="option3">Home and Kitchen</option>
          </select>
          <Input type='number' step="1" name='price' placeholder='Enter Product Price' />
          <Input type='file' name='product_image' placeholder='Choose Product Image' />
        </form>
      </Modal>



    </BaseLayout>
  );
};

export default Home;
