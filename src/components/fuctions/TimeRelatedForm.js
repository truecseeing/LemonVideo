const TimeRelatedForm = () => {
    const onFinish = fieldsValue => {
      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      const rangeTimeValue = fieldsValue['range-time-picker'];
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        
      };
      console.log('Received values of form: ', values);
    };
  }
  export default TimeRelatedForm