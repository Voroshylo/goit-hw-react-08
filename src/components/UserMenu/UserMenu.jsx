import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/authSlice";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.container}>
      <span className={css.name}>Welcome, {user.name}</span>
      <button onClick={handleLogout} className={css.btn}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
