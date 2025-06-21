import React, { useEffect, useRef, useState } from 'react'
import { message0 } from '../HW1'
import { Box, Button, TextField, Paper } from '@mui/material'

// компонента, которая тестирует вашу компоненту (не изменять, any не трогать)
const MessageSender = (props: any) => {
    const M = props.M
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [messages, setMessages] = useState<any[]>([])
    const [text, setText] = useState<any>('')

    const onChange = (e: any) => {
        setText(e.currentTarget.value)
    }

    useEffect(() => {
        if (textareaRef?.current) {
            textareaRef.current.style.height = '0px'
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
        }
    }, [text])

    const addMessage = () => {
        if (text.trim() === '') return;
        setMessages([
            ...messages,
            {
                id: messages.length ? messages.length + 1 : 1,
                user: message0.user,
                message: {
                    text,
                    time: new Date().toTimeString().slice(0, 5),
                },
            },
        ])
        setTimeout(() => setText(''), 4)
    }

    const onKeyDown = (e: any) => {
        if (e.key === 'Enter' && e.shiftKey) addMessage()
    }

    return (
        <>
            {messages.map((m) => (
                <M key={'message' + m.id} message={m} />
            ))}

            <Box
                id={'hw1-send-message-form'}
                display="flex"
                alignItems="flex-end"
                mt={4}
                p={2}
                bgcolor="#f6f8fa"
                borderRadius="20px"
                boxShadow={0}
            >
                <TextField
                    id="hw1-textarea"
                    inputRef={textareaRef}
                    variant="outlined"
                    multiline
                    maxRows={4}
                    placeholder="Type your message"
                    value={text}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    fullWidth
                    sx={{
                        background: '#fff',
                        borderRadius: 2,
                        mr: 2,
                        '& textarea': {
                            resize: 'none',
                            padding: '14px',
                        },
                    }}
                    InputProps={{
                        style: { fontSize: 18, minHeight: 50, borderRadius: 16 }
                    }}
                    title="Shift+Enter for send"
                />
                <Button
                    id="hw1-button"
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={addMessage}
                    sx={{
                        minWidth: 110,
                        height: 50,
                        borderRadius: 20,
                        fontWeight: 600,
                        fontSize: 18,
                        boxShadow: 0
                    }}
                >
                    Send
                </Button>
            </Box>
        </>
    )
}

export default MessageSender
