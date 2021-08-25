import React, { forwardRef } from "react"
import { Card, CardContent, Typography } from "@material-ui/core"
import './Message.css'


const Message = forwardRef(({ c_username, text }, ref) => {

    const isuser = c_username === text.username;

    return (
        <div ref={ref} className={`message ${isuser && 'message_user'}`}>
            <Card className={isuser ? "message_usercard" : "message_guestcard"} >
                <CardContent>
                    <Typography color="white"
                        variant="h5"
                        component="h2">
                        {!isuser && `${text.username || 'Unknown User'}: `} {text.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
)

export default Message;

