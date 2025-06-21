import React from 'react';
import { MessageType } from "../HW1";
import { Avatar, Box, Typography, Paper } from '@mui/material';

export type MessagePropsType = {
    message: MessageType
}

const FriendMessage = (props: MessagePropsType) => {
    const { message } = props;

    return (
        <Box
            id={'hw1-friend-message-' + message.id}
            display="flex"
            justifyContent="flex-start"
            mb={3}
            alignItems="flex-end"
        >
            <Avatar
                id={'hw1-friend-avatar-' + message.id}
                src={message.user.avatar}
                alt="user avatar"
                sx={{ mr: 2, width: 48, height: 48 }}
            />
            <Box>
                <Paper
                    sx={{
                        bgcolor: '#f6f8fa',
                        color: '#222',
                        borderRadius: '18px 18px 18px 0',
                        px: 3,
                        py: 2,
                        minWidth: 300,
                        maxWidth: 460,
                        boxShadow: 1,
                    }}
                    elevation={3}
                >
                    <Typography
                        id={'hw1-friend-name-' + message.id}
                        variant="subtitle2"
                        fontWeight={700}
                        mb={0.5}
                    >
                        {message.user.name}
                    </Typography>
                    <Typography
                        id={'hw1-friend-text-' + message.id}
                        variant="body1"
                        sx={{ whiteSpace: 'pre-wrap' }}
                    >
                        {message.message.text}
                    </Typography>
                </Paper>
                <Typography
                    id={'hw1-friend-time-' + message.id}
                    variant="caption"
                    color="grey.500"
                    sx={{ display: 'block', mt: 0.5 }}
                >
                    {message.message.time}
                </Typography>
            </Box>
        </Box>
    );
};

export default FriendMessage;
