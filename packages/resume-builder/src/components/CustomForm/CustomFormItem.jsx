import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Card, Input } from 'antd';
import { updateFormData } from '../../store/formStoreSlice';

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
    <Card key={item.id}>
      <Form
        form={form}
        layout="vertical"
        onValuesChange={handleValuesChange}
        initialValues={item.formData}
      >
        <Form.Item name="description" label="Achievements description">
          <Input.TextArea placeholder="Enter Section Heading" />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CustomFormItem;
