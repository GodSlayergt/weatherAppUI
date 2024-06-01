import "./Body.css";

export const Body = ({ data }) => {
  const icon = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
  return (
    <div className="body">
      <p className="prediction"> {data.prediction}</p>

      <span className="body__temp">{parseFloat(data.temp).toFixed(0)}</span>
      <sup>
        &deg;<sub>C</sub>
      </sup>

      <p>{data.description}</p>
    </div>
  );
};
