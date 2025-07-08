import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(39, 174, 96, 0.4);
  transition: all 0.3s ease;
  animation: ${bounce} 2s infinite;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(39, 174, 96, 0.6);
  }
  
  &.open {
    animation: none;
  }
`;

const ChatWindow = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideUp} 0.3s ease-out;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 450px;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const HeaderText = styled.div``;

const CompanyName = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

const Status = styled.p`
  margin: 0;
  font-size: 12px;
  opacity: 0.9;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background: #f8f9fa;
`;

const Message = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled.div`
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 18px;
  background: ${props => props.isUser ? '#27ae60' : 'white'};
  color: ${props => props.isUser ? 'white' : '#2c3e50'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  word-wrap: break-word;
  line-height: 1.4;
`;

const MessageTime = styled.span`
  font-size: 11px;
  color: #6c757d;
  margin-top: 5px;
`;

const InputContainer = styled.div`
  padding: 15px 20px;
  background: white;
  border-top: 1px solid #e9ecef;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const MessageInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e9ecef;
  border-radius: 25px;
  outline: none;
  font-size: 14px;
  
  &:focus {
    border-color: #27ae60;
  }
`;

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #27ae60;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  
  &:hover {
    background: #219a52;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 16px;
  color: #6c757d;
  font-style: italic;
  font-size: 14px;
`;

const TypingDots = styled.div`
  display: flex;
  gap: 3px;
  
  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #6c757d;
    animation: ${bounce} 1.4s infinite ease-in-out;
    
    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
  }
`;

const QuickReplies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const QuickReply = styled.button`
  padding: 8px 12px;
  background: white;
  border: 1px solid #27ae60;
  color: #27ae60;
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #27ae60;
    color: white;
  }
`;

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Bem-vindo à Mineração Cezar! 👋",
      isUser: false,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    },
    {
      id: 2,
      text: "Como posso ajudá-lo hoje? Estou aqui para esclarecer dúvidas sobre nossos produtos e serviços.",
      isUser: false,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    "Preços dos produtos",
    "Entrega e frete",
    "Especificações técnicas",
    "Orçamento personalizado",
    "Contato comercial"
  ];

  const autoResponses = {
    "preços": "Nossos preços variam conforme o produto e quantidade. Areia de construção: R$ 45/m³, Areia filtrante: R$ 120/m³, Cristais: R$ 280/kg. Para orçamentos personalizados, use nosso sistema de pedidos!",
    "entrega": "Realizamos entregas em toda a região metropolitana. Frete grátis para pedidos acima de R$ 500. Prazo de entrega: 2-5 dias úteis dependendo da localização.",
    "especificações": "Todos nossos produtos possuem especificações técnicas detalhadas no catálogo. Você pode acessar informações como granulometria, pureza, densidade e aplicações.",
    "orçamento": "Para um orçamento personalizado, acesse nossa seção de Pedidos ou use a Calculadora de Materiais. Também pode entrar em contato pelo WhatsApp: (11) 99999-9999",
    "contato": "Entre em contato conosco: 📞 (11) 3333-4444 | 📱 WhatsApp: (11) 99999-9999 | 📧 contato@mineracaocezar.com.br | Horário: Segunda a Sexta, 8h às 18h"
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
    
    // Simular resposta automática
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        generateAutoResponse(inputValue.toLowerCase());
      }, 2000);
    }, 500);
  };

  const generateAutoResponse = (userMessage) => {
    let response = "Obrigado pela sua mensagem! Nossa equipe analisará sua solicitação e retornará em breve. Para atendimento imediato, ligue (11) 3333-4444 ou WhatsApp (11) 99999-9999.";

    // Verificar palavras-chave para respostas automáticas
    for (const [keyword, autoResponse] of Object.entries(autoResponses)) {
      if (userMessage.includes(keyword)) {
        response = autoResponse;
        break;
      }
    }

    const botMessage = {
      id: messages.length + 2,
      text: response,
      isUser: false,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleQuickReply = (reply) => {
    const newMessage = {
      id: messages.length + 1,
      text: reply,
      isUser: true,
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        generateAutoResponse(reply.toLowerCase());
      }, 1500);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <ChatContainer>
      {isOpen && (
        <ChatWindow>
          <ChatHeader>
            <HeaderInfo>
              <Avatar>🏗️</Avatar>
              <HeaderText>
                <CompanyName>Mineração Cezar</CompanyName>
                <Status>Online - Respondemos rapidamente</Status>
              </HeaderText>
            </HeaderInfo>
            <CloseButton onClick={() => setIsOpen(false)}>×</CloseButton>
          </ChatHeader>

          <MessagesContainer>
            {messages.map((message) => (
              <Message key={message.id} isUser={message.isUser}>
                <MessageBubble isUser={message.isUser}>
                  {message.text}
                </MessageBubble>
                <MessageTime>{message.time}</MessageTime>
              </Message>
            ))}
            
            {isTyping && (
              <Message isUser={false}>
                <MessageBubble isUser={false}>
                  <TypingIndicator>
                    Digitando
                    <TypingDots>
                      <span></span>
                      <span></span>
                      <span></span>
                    </TypingDots>
                  </TypingIndicator>
                </MessageBubble>
              </Message>
            )}

            {messages.length === 2 && (
              <QuickReplies>
                {quickReplies.map((reply, index) => (
                  <QuickReply key={index} onClick={() => handleQuickReply(reply)}>
                    {reply}
                  </QuickReply>
                ))}
              </QuickReplies>
            )}
            
            <div ref={messagesEndRef} />
          </MessagesContainer>

          <InputContainer>
            <MessageInput
              type="text"
              placeholder="Digite sua mensagem..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <SendButton onClick={handleSendMessage} disabled={inputValue.trim() === ''}>
              ➤
            </SendButton>
          </InputContainer>
        </ChatWindow>
      )}

      <ChatButton 
        className={isOpen ? 'open' : ''}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '×' : '💬'}
      </ChatButton>
    </ChatContainer>
  );
};

export default Chat;

