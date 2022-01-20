import "./style.css";
import FormParagraph from "../FormParagraph";
import Select from "../Select";
import Input from "../Input/input";

const Form = () => {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency Converter</legend>
        <FormParagraph title="Waluta:" select={<Select />} />
        <FormParagraph
          title="Ilość*:"
          input={
            <Input
              className="form__amount"
              type="number"
              name="amount"
              step="0.01"
              min="0.1"
              placeholder="0.00"
              required={true}
            />
          }
        />
        <FormParagraph
          title="Aktualny kurs*:"
          input={
            <Input
              className="form__course"
              type="number"
              name="course"
              step="0.001"
              min="0.1"
              placeholder="0.000"
              required={true}
            />
          }
        />

        <p className="form__requiredText">* - pola obowiązkowe</p>
        <p className="form__paragraph">
          <button className="form__button" type="submit">
            Przelicz
          </button>
        </p>
        <p className="form__paragraph">
          <label className="form__scoreText">
            Ilość PLN: <strong className="form__score">0.000</strong>
          </label>
        </p>
        <p className="form__paragraph">
          <button type="reset" className="form__button">
            Wyczyść kalkulator
          </button>
        </p>
        <section className="addition">
          <h2 className="addition__header">
            Możesz sprawdzić aktualy kurs Dolara:
          </h2>
          <p className="center">
            <button className="addition__button">Sprawdz kurs USD</button>
          </p>
          <p className="addition__paragraph"></p>
        </section>
      </fieldset>
    </form>
  );
};

export default Form;
