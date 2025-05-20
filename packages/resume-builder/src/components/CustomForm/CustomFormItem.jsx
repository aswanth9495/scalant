import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';
import { updateFormData } from '../../store/formStoreSlice';
import RichTextEditor from '../RichTextEditor';

const CustomFormItem = ({ item, formId }) => {
  const dispatch = useDispatch();
  const formData = useSelector(
    (state) => state.scalantResumeBuilder.formStore.forms[formId]
  );
  const [form] = Form.useForm();

  const handleValuesChange = (changedValues, allValues) => {
    // Get current items from formData or initialize with current item if empty
    const currentItems = formData?.achievementsItems || [item];

    // Find the index of the current item
    const itemIndex = currentItems.findIndex(
      (achievementItem) => achievementItem.id === item.id
    );

    let updatedItems;
    if (itemIndex === -1) {
      // If item not found, add it to the array
      updatedItems = [
        ...currentItems,
        { ...item, formData: allValues, saved: true },
      ];
    } else {
      // Update existing item
      updatedItems = currentItems.map((achievementItem) =>
        achievementItem.id === item.id
          ? { ...achievementItem, formData: allValues, saved: true }
          : achievementItem
      );
    }

    dispatch(
      updateFormData({
        formId,
        data: { achievementsItems: updatedItems },
      })
    );
  };

  return (
    <Form
      key={item.id}
      form={form}
      layout="vertical"
      onValuesChange={handleValuesChange}
      initialValues={item.formData}
    >
      <Form.Item name="description" label="">
        <RichTextEditor
          form={form}
          fieldName="description"
          placeholder="Enter your achievements description"
          onValuesChange={handleValuesChange}
        />
      </Form.Item>
    </Form>
  );
};

export default CustomFormItem;
