import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComp from "../../Components/Button/Button";
import classes from "./style.module.css";
import green from "./../../Assets/greenn.png";



const HomePage = (props) => {
  const navigate = useNavigate();

  const onIntegrate = () => {
    navigate("/contacts");
    console.log("integrating");
  };

  return (
    <>
      <div className={classes.imgbtnholder}>
        <img src={green} alt="wp-img" />
        <div className={classes.btndiv}>
          <ButtonComp
            btnName={"Integrate Whatsapp"}
            btnClicked={() => onIntegrate()}
            isDisabled={false}
          />
        </div>
      </div>
    </>
  );
};
export default HomePage;
