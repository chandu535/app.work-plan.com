"use client"

import { Button, Link } from "@mui/material";
import { useRouter } from "next/navigation";

const Projects = () => {
    return (
        <div>
            <h1>Get all Projects</h1>
            <Link href={"/projects/add"}>Add</Link>

        </div>
    );
}

export default Projects;