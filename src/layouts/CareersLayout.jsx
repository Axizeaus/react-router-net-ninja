import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui
        harum vitae adipisci ratione atque quibusdam, velit, distinctio aliquam
        nihil nam dolorum ut? Tenetur, quae accusantium nulla inventore et
        earum!
      </p>

      <Outlet />
    </div>
  );
}
