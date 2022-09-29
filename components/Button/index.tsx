import { Button } from "antd";
import button from "./button.module.scss";

export interface model {
  name: string;
  text: string;
}
function Buttons(props: model) {
  const { name, text } = props;
  return (
    <>
      <Button className={`${button.container} ${button[name]}`}>{text}</Button>
    </>
  );
}
export default Buttons;
