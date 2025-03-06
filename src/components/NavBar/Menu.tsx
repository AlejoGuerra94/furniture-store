import { menuItems } from "./constans";
import MenuItem from "./MenuItem";

export const Menu = () => {
  return (
    <div>
      {menuItems.map((item) => (
        <MenuItem key={item.href} {...item} />
      ))}
    </div>
  );
};
