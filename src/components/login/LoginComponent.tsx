"use client"

import Image from 'next/image'
import "./login.css"
import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function LoginComponent() {
    return (
        <div className="container">
            <div className="blur-bg" />
            <div className="content">
                <img src={"/orotron_logo.jpeg"} alt="Logo" />
                {/* Your content here */}
                <Typography style={{ color: "black" }}>Welcome to Orotron</Typography>

                <Link style={{ color: "blue" }}
                    href={"https://slack.com/openid/connect/authorize?response_type=code&state=4c8a9451-077e-4637-ab7b-8c1849e41f3a&client_id=120000646596.6250899073846&scope=openid,email,profile&redirect_uri=https://app-workplanner.vercel.app/tasks"}
                >Login with Slack</Link>
            </div>
        </div>
    )
}
``