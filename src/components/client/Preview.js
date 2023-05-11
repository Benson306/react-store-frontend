import { useLocation } from "react-router-dom";

const Preview = () => {

    const location = useLocation();

    const data = location.state.data

    return ( <div>
        {data.title}
    </div> );
}
 
export default Preview;