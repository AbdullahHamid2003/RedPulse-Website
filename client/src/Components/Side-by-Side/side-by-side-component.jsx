import { Grid, Item, ListItem } from "@mui/material"
import ButtonComponent from "../Button/BAButton";
import { useNavigate } from "react-router-dom";

export default function SidebySideComponent(props) {

    const {imageURL, heading, para} = props;
    const navigate = useNavigate();

    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <ListItem className="Grid_Img">
                        <img src={imageURL} alt="" style={{borderRadius: "12px", height: "400px" }} />
                    </ListItem>
                </Grid>
                <Grid item xs={6}>
                    <ListItem>
                        <div className="pt-2">
                            <h1>{heading}</h1>
                            <p style={{fontSize: "18px"}}>{para}</p>
                            <ButtonComponent 
                            buttonText="Donate Now"
                            buttonType="outlined"
                            onclick = {()=>{navigate('/donate-blood')}}
                            />
                        </div>
                    </ListItem>
                </Grid>
            </Grid>
        </>
    )
}