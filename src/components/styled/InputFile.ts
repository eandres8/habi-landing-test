import styled, { StyledComponent } from 'styled-components';

import { StyledCProps } from '../../interfaces/style-components.type';

export const ContentFile: StyledComponent<'div', StyledCProps, {}, any> 
    = styled.div`
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;

        & > .input-content {
            width:350px;
            padding:20px;
            background:#fff;
            box-shadow: -3px -3px 7px rgba(94, 104, 121, 0.377),
                        3px 3px 7px rgba(94, 104, 121, 0.377);

            & input {
                display: none;
            }

            & label {
                display:block;
                width:45%;
                height:45px;
                margin-left: 25%;
                line-height:50px;
                text-align:center;
                background:#1172c2;
                color:#fff;
                font-size:15px;
                font-family:"Open Sans",sans-serif;
                text-transform:Uppercase;
                font-weight:600;
                border-radius:5px;
                cursor:pointer;
            }

            & > img {
                width:100%;
                display: ${(props: any) => props.displayImg ? 'block' : 'auto'};
                margin-bottom:30px;
            }
        }
    `;
