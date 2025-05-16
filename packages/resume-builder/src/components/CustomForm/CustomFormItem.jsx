import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Card } from 'antd';
import { updateFormData } from '../../store/formStoreSlice';
import RichTextEditor from '../RichTextEditor';

const CustomFormItem = ({ item, formId }) => {
  const dispatch = useDispatch();
  const formData = useSelector(
    (state) => state.scalantResumeBuilder.formStore.forms[formId]
  );
  const [form] = Form.useForm();

  const handleValuesChange = (changedValues, allValues) => {
    const currentItems = formData?.achievementsItems || [];
    const updatedItems = currentItems.map((achievementItem) =>
      achievementItem.id === item.id
        ? { ...achievementItem, formData: allValues, saved: true }
        : achievementItem
    );

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
        />
      </Form.Item>
    </Form>
  );
};

export default CustomFormItem;
