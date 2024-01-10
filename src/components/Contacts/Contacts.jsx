import {
  ContactInfo,
  ContactItem,
  ContactList,
  DeleteContactBtn,
} from './Contacts.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <ContactList>
      {contacts.map(item => (
        <ContactItem key={item.id}>
          <ContactInfo>
            <span>&#128100;</span>
            <span>
              {item.name}: {item.number}
            </span>
          </ContactInfo>
          <DeleteContactBtn onClick={() => onDelete(item.id)}>
            Delete
          </DeleteContactBtn>
        </ContactItem>
      ))}
    </ContactList>
  );
};
