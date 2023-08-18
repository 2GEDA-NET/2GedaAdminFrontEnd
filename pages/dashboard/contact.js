import BaseLayout from "@/components/BaseLayout";
import { useEffect, useRef, useState } from "react";
import ContactList from "@/components/Lists/ContactList";
import HeaderSection from "@/components/ui-components/HeaderSection";
import ActionButton from "@/components/ui-components/ActionButton";
import { AiOutlineFileText, AiOutlineLogin, AiOutlineLogout, AiOutlinePlusCircle } from "react-icons/ai";
import Modal from "@/components/ui-components/Modal";
import Input from '@/components/ui-components/Input';


const Contact = () => {
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
        heading={"Contact"}
        subHeading={"Reviews all Users Contacts"}
        rightItem={() => (
          <ActionButton
            onClick={() => setModal(true)}
            Icon={AiOutlinePlusCircle}
            label="Add New User"
          />
        )}
      />
      <ContactList />
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

export default Contact;
