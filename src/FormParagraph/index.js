import "./style.css";

const FormParagraph = ({ title, select, input }) => {
  return (
    <p className="form__paragraph">
      <label>
        <span className="form__labelText">{title}</span>
        {select}
        {input}
      </label>
    </p>
  );
};

export default FormParagraph;
