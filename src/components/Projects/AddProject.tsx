import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";


const AddNewProject = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [projectname, SetProjectName] = useState<any>();
    const [projectdescription, SetProjectDescription] = useState<any>();

    const createProduct = async () => {
        setLoading(true);
        let obj: any = {
            title: projectname,
            description: projectdescription,
        }

        let options = {
            method: "POST",
            body: JSON.stringify(obj),
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': "xoxe.xoxp-1- Mi0yLTEyMDAwMDY0NjU5Ni0zNjIyOTI0NjkwODM3LTYyNDA4ODg2MjYyOTMtNjI2Mzg1NDk2NDMzNy03ZWE0NGFiNGY0YTMyYjQ0YTkxNmIyNTEwZTMyY2ZhMzljZWY0MTRmYTM3YzI3NGQyN2ExYWM5ZTdhYjBiMmMw"
            })
        }
        try {
            const response = await fetch('https://api-workplanner.vercel.app/projects', options);
            const responseData = await response.json();
            if (response.status == 200) {
                router.push("/projects")
            }
        } catch (err: any) {
            console.error(err);

        } finally {
            setLoading(false);
        }

    }

    return (
        <div >
            <Card sx={{ display: "flex", flexDirection: "column" }}>
                <TextField
                    sx={{ width: "300px" }}
                    size="small"
                    placeholder="Project Title"
                    value={projectname}
                    onChange={(e: any) => SetProjectName(e.target.value)}
                />
                <TextField placeholder="Description"
                    sx={{ width: "300px" }}
                    value={projectdescription}
                    size="small"
                    onChange={(e: any) => SetProjectDescription(e.target.value)} />
                <div>
                    <Button onClick={() => router.push("/projects")}>Cancel</Button>
                    <Button onClick={createProduct}>  Save</Button>
                </div>
            </Card>

        </div>
    );
}

export default AddNewProject;
