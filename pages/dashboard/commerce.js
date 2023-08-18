import React, { useState } from 'react';
import BaseLayout from "@/components/BaseLayout";
import Section from "@/components/ui-components/Section";
import ProductChart from "@/components/DataCharts/ProductChart";
import SalesChart from "@/components/DataCharts/SalesChart";
import HeaderSection from "@/components/ui-components/HeaderSection";
import ActionButton from "@/components/ui-components/ActionButton";
import { AiOutlineFileText, AiOutlineLogin, AiOutlineLogout, AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "@/components/ui-components/Modal";
import DataCard from "@/components/ui-components/DataCard";
import ProductList from "@/components/Lists/ProductList";
import DualChartContainer from "@/components/DataCharts/DualChartContainer";
import Input from '@/components/ui-components/Input';
import CategoriesList from '@/components/Lists/CategoriesList';



const Commerce = () => {
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
        heading={"Commerce"}
        subHeading={"Welcome to 2geda Commerce"}
        rightItem={() => (
          <ActionButton
            onClick={() => setModal(true)}
            Icon={AiOutlinePlusCircle}
            label="Add New Product"
          />
        )}
      />
      <Section>

        <DataCard
          label={"Total Products"}
          value={"23,34,450"}
          percentageValue={56.4}
          inverse={true}
        />
        <DataCard
          label={"Total Orders"}
          value={"45,09,333"}
          percentageValue={3.45}
        />
        <DataCard
          label={"Total Business"}
          value={"43,54,111"}
          percentageValue={10.89}
        />
        <DataCard
          label={"Total Business Categories"}
          value={"43,54,111"}
          percentageValue={10.89}
        />
        <DataCard
          label={"Total Banned Products"}
          value={"43,54,111"}
          percentageValue={10.89}
        />
      </Section>
      <DualChartContainer
        heading={'Product Chart'}
        chart1={<SalesChart />}
        chart2={<ProductChart />}
      />

      <CategoriesList />

      <ProductList />

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

export default Commerce;
