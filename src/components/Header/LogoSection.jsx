import logoIcon from "../../assets/logo.svg";
export default function LogoSrction() {
  return (
    <a href="./index.html">
      <img className="h-9" src={logoIcon} alt="Weather App" />
    </a>
  );
}
