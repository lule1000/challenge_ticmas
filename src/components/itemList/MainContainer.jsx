import Categories from "./Categories";
import InternalBrowser from "../internalBrowser/InternalBrowser";
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContainer = () => {
    return (
        <>
            <InternalBrowser />
            <Categories />
        </>
    );
}

export default MainContainer;