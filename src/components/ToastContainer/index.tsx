import React from 'react';
import { useTransition } from 'react-spring';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { ToastMessage, useToast } from '../../hooks/toast';
import { Container, Toast } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const icons = {
  info: <FiInfo size={20} />,
  error: <FiAlertCircle size={20} />,
  success: <FiCheckCircle size={20} />,
};

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    }
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item: message, key, props }) => (
        <Toast
          key={key}
          type={message.type}
          hasDescription={!!message.description}
          style={props}
        >
          {icons[message.type || 'info']}
          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>
          <button type="button" onClick={() => removeToast(message.id)}>
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
