import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from '../styled/ToggleSwitchInput';

interface Props {
    [key: string]: any;
}

export const ToggleSwitch: React.FC<Props> = (props) => {  
  return (
    <div>
      <CheckBoxWrapper>
          <CheckBox {...props} type="checkbox" />
          <CheckBoxLabel htmlFor={props.id} />
      </CheckBoxWrapper>
    </div>
  );
}
