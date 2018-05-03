import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContactCard = (props) => {
  const contact = props.contacts;
  return (
   
   <div>
      
      <p>Name:{contact.first_name}</p>
      <p>#:{contact.phone_number}</p>

  </div>
  );
};

export default ContactCard;