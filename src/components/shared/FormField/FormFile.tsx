import { useContext, useState } from 'react';

import { ContentFile } from '../../styled';
import { FormFieldContext } from './FormFieldHOC';

export const FormFile: React.FC = () => {
    const { value, onChange, name, placeholder, files: accept } = useContext<any>(FormFieldContext);
    const [dataSrc, setDataSrc] = useState<any>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value: inputValue, files, name } = event.target;


      if (files?.length) {
        setDataSrc(URL.createObjectURL(files[0]));
        onChange(inputValue);
      }

    }

    return <ContentFile displayImg={!value}>
        <div className="input-content">
            <img src={dataSrc} alt="" />
            <input type="file" name={name} id={name} accept={accept.join(',')} onChange={handleChange} />
            <label htmlFor={name}>Foto</label>
        </div>
    </ContentFile>;
};
