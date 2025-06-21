import React from 'react';
import { MessageType } from '../HW1';
import { Avatar, Box, Typography, Paper } from '@mui/material';

export type MessagePropsType = {
    message: MessageType
}

const Message = (props: MessagePropsType) => {
    const { message } = props;

    return (
        <Box display="flex" justifyContent="flex-end" mb={3} alignItems="flex-end">
            <Box>
                <Typography
                    variant="subtitle2"
                    align="right"
                    color="white"
                    fontWeight={700}
                    mb={0.5}
                >
                    {message.user.name}
                </Typography>
                <Paper
                    sx={{
                        bgcolor: '#1976d2',
                        color: 'white',
                        borderRadius: '18px 18px 0 18px',
                        px: 3,
                        py: 2,
                        minWidth: 300,
                        maxWidth: 460,
                        boxShadow: 1,
                    }}
                    elevation={3}
                >
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                        {message.message.text}
                    </Typography>
                </Paper>
                <Typography
                    variant="caption"
                    align="right"
                    color="grey.200"
                    sx={{ display: 'block', mt: 0.5 }}
                >
                    {message.message.time}
                </Typography>
            </Box>
            <Avatar
                src={message.user.avatar}
                alt="avatar"
                sx={{ ml: 2, width: 48, height: 48 }}
            />
        </Box>
    );
};

export default Message;
