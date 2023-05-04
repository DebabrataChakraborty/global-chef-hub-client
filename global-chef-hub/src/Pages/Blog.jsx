import ChefNavbar from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Blog = () => {
    return (<>
        <ChefNavbar />
        <div className="container vh-100 row justify-content-center align-items-center">
            <h2>Q:The differences between uncontrolled and controlled components?</h2>
            <p>Ans:
                Controlled:It does not maintain its internal state.Here, data is controlled by the parent component.It accepts its current value as a prop.It allows validation control.It has better control over the form elements and data.
                Uncontrolled:It maintains its internal states.Here, data is controlled by the DOM itself.It uses a ref for their current values.It does not allow validation control.It has limited control over the form elements and data.
            </p><br />
            <h2>Q:How to validate React props using PropTypes?</h2>
            <p>
                Ans:
                1.PropTypes.any - The props can be of any data type.<br />
                2.PropTypes.array - The props should be an array.<br />
                3.PropTypes.bool - The props should be a boolean.

            </p><br />
            <h2>Q:difference between nodejs and express js?</h2>
            <p>
                Ans:NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.

            </p>
            <h2>Q:What is a custom hook, and why will you create a custom hook?</h2>
            <p>
                Ans:Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.

            </p>

        </div>
        <Footer />
    </>
    );
};

export default Blog;