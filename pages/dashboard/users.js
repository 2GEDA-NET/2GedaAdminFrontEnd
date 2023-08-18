import { useEffect, useRef, useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import HeaderSection from "@/components/ui-components/HeaderSection";
import ActionButton from "@/components/ui-components/ActionButton";
import { AiOutlineFileText, AiOutlineLogin, AiOutlineLogout, AiOutlinePlusCircle } from "react-icons/ai";
import UserList from "@/components/Lists/UserList";
import Section from "@/components/ui-components/Section";
import DataCard from "@/components/ui-components/DataCard";
import BarChart from "@/components/Charts/BarChart";
import PolarAreaChart from "@/components/Charts/PolarChart";
import LineChart from "@/components/Charts/LineChart";
import UserLineChart from "@/components/DataCharts/UserLineChart";
import PersonalAndBusinessUserChart from "@/components/DataCharts/PerAndBusUsersChart";
import DualChartContainer from "@/components/DataCharts/DualChartContainer";
import Modal from "@/components/ui-components/Modal";
import Input from '@/components/ui-components/Input';


const Users = () => {
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
        heading={"Users"}
        subHeading={"See all Users details"}
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
          label={"Total Business Account"}
          value={"45,09,333"}
          percentageValue={3.45}
        />
        <DataCard
          label={"Total Personal Account"}
          value={"43,54,111"}
          percentageValue={10.89}
        />
        <DataCard
          label={"Total Banned Account"}
          value={"43,54,111"}
          percentageValue={10.89}
        />
        <DataCard
          label={"Total Active Account"}
          value={"43,54,111"}
          percentageValue={10.89}
        />
      </Section>
      <DualChartContainer
        heading={'Users Chart'}
        chart1={<PersonalAndBusinessUserChart />}
        chart2={<UserLineChart />}
      />
      <UserList />
      <Modal
        isOpen={modal}
        onClose={handleClose}
        heading={"Add New User"}
        positiveText={"Save Changes"}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      >
        <form>
          <Input type='email' name='email' placeholder='Enter Your Email' />
          <Input type='text' name='first_name' placeholder='Enter First Name' />
          <Input type='text' name='last_name' placeholder='Enter Last Name' />
          <Input type='password' name='password' placeholder='Enter Password' />
          <label htmlFor="selectOption">Select Account Type:</label>
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
            <option value="option1">Business</option>
            <option value="option2">Personal</option>
          </select>
          <Input type='number' step="1" name='phone_number' placeholder='Enter Phone Number' />
          <Input type='file' name='profile_image' placeholder='Choose Profile Image' />
        </form>
      </Modal>
    </BaseLayout>
  );
};

export default Users;
