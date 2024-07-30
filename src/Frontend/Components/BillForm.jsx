 
import React, { useState } from 'react';

const BillForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [invoiceId, setInvoiceId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ description, amount, invoiceId });
  };

  return (
    <div className='container'>
    <form onSubmit={handleSubmit} className=''>
      <div className='form-group row'>
        <label class="col-sm-2 col-form-label">Bill Description</label>
        <div class="col-sm-3">
        <input class="form-control"
        placeholder="Enter Bill Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        /></div>
      </div>
<br/>
      <div className='form-group row'>
        <label class="col-sm-2 col-form-label">Bill Amount (USD $)</label>
        <div class="col-sm-3">
        <input class="form-control"
          placeholder="Enter Bill Amount"
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        /></div>
      </div>
        <br/>
      <div className='form-group row'>
        <label class="col-sm-2 col-form-label">Invoice Number</label>
        <div class="col-sm-3">
        <input class="form-control"
          placeholder="Enter Invoice Number"
          type="text"
          value={invoiceId}
          onChange={(e) => setInvoiceId(e.target.value)}
          required
        /> 
      </div></div>
      <div className='form-group row'>
      <div class="col-sm-2"></div>
      
      <div class="col-sm-3" style={{marginTop:30}}>
      <button className='btn btn-primary' type="submit">Submit</button>
      </div></div>
    </form></div>
  );
};

export default BillForm;
