import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Bubble, GiftedChat } from 'react-native-gifted-chat'
import { useRoute } from '@react-navigation/native'



const Index3 = () => {
  const route = useRoute()
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          Image: (require('../../../src/assets/pictures/image50.png')),
        },
      },
    ])
  }, [])

  const onSend = messageArray => {
    console.log('messageArray',messageArray)
    const msg = messageArray[0];
    const myMsg = { ...msg, senderId: '123456789', receiverId: '1234567890' }
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, myMsg),
      Firestore().collection("Chats").
      doc(123456789).collection("message").add({
        ...myMsg,
        createdAt:new Date(),
      })
    )
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GiftedChat

        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: '123456789',
        }}
        renderBubble={prop => {
          return (
            <Bubble
              {...prop}
              wrapperStyle={{
                left: {
                  backgroundColor: "lightblue"
                },
                right: {
                  backgroundColor: "darkred"
                }
              }}
            />
          )
        }}
      />
    </View>
  )
}

export default Index3