import { BallTriangle, Grid } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
    return (
        <div className="flex flex-col items-center py-16">
            <Grid color="#1565D8" height={80} width={80} />
            <h2 className="mt-4 text-primary">Loading Data Please Wait</h2>
        </div>
    );
}

export default Loading;