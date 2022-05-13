const Greeter = (props) => {
    return(
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="bg-white shadow-lg my-2">{props.name} {props.phrase}</h2>
                </div>
            </div>
    );
};

export default Greeter;