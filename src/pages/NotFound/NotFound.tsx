import { Button } from "UI/Button";
import { urls } from "configs/routes/const";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => navigate(urls.team.path);

  return (
    <div className=" flex h-screen w-screen flex-col items-center justify-center space-y-11">
      <div className="text-7xl text-blue-grey-regular">
        Oops, something went wrong!
      </div>
      <div className="w-fit text-lg">
        <Button onClick={handleBtnClick}>Вернутся на главную</Button>
      </div>
    </div>
  );
};

export default NotFound;
