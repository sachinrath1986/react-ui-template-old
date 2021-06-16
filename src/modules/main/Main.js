import Aside from "./aside/Aside"

const Main = () => {

    return (
        <div className="d-flex flex-column flex-root">
            <div className="d-flex flex-row flex-column-fluid page">
                <Aside />
                I am dashboard
                </div>
        </div>
    );
}

export default Main;