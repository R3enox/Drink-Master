import "./styles.css"


export const RoundedSwitch = () => {
    return (
      <label className="switch toggle">
        <input type="checkbox" id="themeSwitch" />
        <span className="slider round"></span>
      </label>
    );
}