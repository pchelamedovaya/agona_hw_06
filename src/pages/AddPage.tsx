import ButtonChoice from "../components/ButtonChoice.tsx";
import '/src/styles/AddPage.css';
import AddComponent from "../components/AddComponent.tsx";

const AddPage = () => {
    return (
        <section className="addPage">
            <div className="addPage_container">
                <div className="addPage_container__text">О фильме</div>
                <ButtonChoice></ButtonChoice>
                <AddComponent></AddComponent>
            </div>
        </section>
    );
};

export default AddPage;